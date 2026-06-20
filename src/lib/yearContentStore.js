import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase/config.js";
import yearData from "../data/yearData.js";
import teamsProjectData from "../data/teamsProjectData.js";

const YEAR_CONTENT_COLLECTION = "adminYearContent";

const EMPTY_TEAM = {
  name: "",
  image: "",
  problemStatement: "",
  solutionOverview: "",
  impact: "",
  members: [],
  tags: [],
};

const EMPTY_WINNER = {
  place: "1ST PLACE",
  team: "",
  image: "",
  description: "",
};

function normalizeList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return [];
}

function normalizeTeam(team = {}) {
  return {
    ...EMPTY_TEAM,
    ...team,
    members: normalizeList(team.members),
    tags: normalizeList(team.tags),
  };
}

function normalizeWinner(winner = {}) {
  return {
    ...EMPTY_WINNER,
    ...winner,
  };
}

function normalizeRecord(record = {}) {
  return {
    ...record,
    teams: normalizeList(record.teams).map(normalizeTeam),
    winners: normalizeList(record.winners).map(normalizeWinner),
    judges: normalizeList(record.judges),
    organizingCommittee: normalizeList(record.organizingCommittee),
    sponsors: normalizeList(record.sponsors),
  };
}

function normalizeSummary(year, record = {}, fallback = {}) {
  return {
    year: String(year),
    theme: record.theme ?? fallback.theme ?? "",
    globalTheme: record.globalTheme ?? fallback.globalTheme ?? record.theme ?? fallback.theme ?? "",
    status: record.status ?? fallback.status ?? "Draft",
    image: record.image ?? fallback.image ?? "",
    description: record.description ?? fallback.description ?? "",
    teams: record.teamsCount ?? record.teams ?? fallback.teams ?? 0,
    participants: record.participants ?? record.participations ?? fallback.participants ?? fallback.participations ?? 0,
    participations: record.participants ?? record.participations ?? fallback.participants ?? fallback.participations ?? 0,
  };
}

function yearContentDoc(year) {
  return doc(db, YEAR_CONTENT_COLLECTION, String(year));
}

function yearContentQuery() {
  return query(collection(db, YEAR_CONTENT_COLLECTION), orderBy("year", "desc"));
}

function mergeYearContent(yearKey, savedRecord = {}) {
  const staticRecord = yearData[yearKey] ?? {};
  const normalizedRecord = normalizeRecord(savedRecord);

  return {
    ...staticRecord,
    ...normalizedRecord,
    year: yearKey,
    teams: normalizedRecord.teams.length ? normalizedRecord.teams : (staticRecord.teams ?? []),
    winners: normalizedRecord.winners.length ? normalizedRecord.winners : (staticRecord.winners ?? []),
    judges: normalizedRecord.judges.length ? normalizedRecord.judges : (staticRecord.judges ?? []),
    organizingCommittee: normalizedRecord.organizingCommittee.length ? normalizedRecord.organizingCommittee : (staticRecord.organizingCommittee ?? []),
    sponsors: normalizedRecord.sponsors.length ? normalizedRecord.sponsors : (staticRecord.sponsors ?? []),
  };
}

export async function getYearContent(year) {
  const yearKey = String(year);
  const snap = await getDoc(yearContentDoc(yearKey));

  return mergeYearContent(yearKey, snap.exists() ? snap.data() : {});
}

export async function getYearDraft(year) {
  const content = await getYearContent(year);

  return {
    year: String(year),
    heroImage: content.heroImage ?? "",
    heroBgColor: content.heroBgColor ?? "#0a0a0a",
    globalTheme: content.globalTheme ?? content.theme ?? "",
    globalDescription: content.globalDescription ?? content.description ?? "",
    theme: content.theme ?? "",
    status: content.status ?? "Completed",
    image: content.image ?? "",
    description: content.description ?? "",
    teamsCount: content.teams?.length ?? 0,
    participants: content.participants ?? content.participations ?? 0,
    teams: content.teams ?? [],
    winners: content.winners ?? [],
    judges: content.judges ?? [],
    organizingCommittee: content.organizingCommittee ?? [],
    sponsors: content.sponsors ?? [],
  };
}

export async function getManagedYears() {
  const snap = await getDocs(yearContentQuery());
  const firestoreYears = snap.docs.map((entry) => String(entry.id));

  return Array.from(new Set([
    ...Object.keys(yearData),
    ...firestoreYears,
  ])).sort((a, b) => Number(b) - Number(a));
}

export async function getTeamProjectCards() {
  const snap = await getDocs(yearContentQuery());
  const firestoreRecords = new Map(
    snap.docs.map((entry) => [String(entry.id), entry.data()])
  );

  const cards = new Map();

  teamsProjectData.forEach((card) => {
    const yearKey = String(card.year);
    const override = firestoreRecords.get(yearKey) ?? {};
    cards.set(yearKey, normalizeSummary(yearKey, override, card));
  });

  firestoreRecords.forEach((override, yearKey) => {
    if (!cards.has(yearKey)) {
      cards.set(yearKey, normalizeSummary(yearKey, override, {}));
    }
  });

  return Array.from(cards.values()).sort((a, b) => Number(b.year) - Number(a.year));
}

export async function upsertYearContent(year, payload) {
  const yearKey = String(year);
  const record = normalizeRecord({
    ...payload,
    year: yearKey,
    updatedAt: serverTimestamp(),
  });

  await setDoc(yearContentDoc(yearKey), record, { merge: true });
  return record;
}

export async function deleteYearContent(year) {
  const yearKey = String(year);
  await deleteDoc(yearContentDoc(yearKey));
  return true;
}

export function blankTeam() {
  return { ...EMPTY_TEAM };
}

export function blankWinner() {
  return { ...EMPTY_WINNER };
}
