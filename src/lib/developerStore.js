import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase/config.js";
import developerData from "../data/developerData.js";

const DEVELOPER_DOC_PATH = "globalContent/developers";

export const emptyDeveloper = () => ({
  id: Date.now(),
  name: "",
  role: "",
  image: "",
  bio: "",
  stack: [],
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
    website: ""
  }
});

function normalizeDeveloper(dev) {
  return {
    ...emptyDeveloper(),
    ...dev,
    id: dev.id || Date.now(),
    stack: Array.isArray(dev.stack) ? dev.stack.filter(Boolean) : [],
    socials: {
      github: dev.socials?.github || "",
      linkedin: dev.socials?.linkedin || "",
      twitter: dev.socials?.twitter || "",
      website: dev.socials?.website || ""
    }
  };
}

export async function getDevelopers() {
  try {
    const snap = await getDoc(doc(db, DEVELOPER_DOC_PATH));
    if (snap.exists()) {
      const data = snap.data();
      if (data.developers && Array.isArray(data.developers)) {
        return data.developers.map(normalizeDeveloper);
      }
    }
  } catch (error) {
    console.error("Failed to fetch developers from Firestore", error);
  }
  
  // Fallback to static data if not found or on error
  return developerData.map(normalizeDeveloper);
}

export async function upsertDevelopers(developersArray) {
  const normalized = developersArray.map(normalizeDeveloper);
  await setDoc(doc(db, DEVELOPER_DOC_PATH), {
    developers: normalized,
    updatedAt: serverTimestamp()
  }, { merge: true });
  return normalized;
}
