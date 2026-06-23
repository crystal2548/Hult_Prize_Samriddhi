import React, { useEffect, useRef, useState } from "react";
import { Input, InputNumber, Select, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Award,
  Eye,
  Save,
  RotateCcw,
  Trash2,
  Upload,
  Plus,
  X,
  Menu,
  ChevronRight,
  Calendar,
  Trophy,
  UserCheck,
  Image as ImageIcon,
  Download,
  LogOut,
  Code,
  AlertTriangle,
  HeartHandshake,
} from "lucide-react";
import { useAuth } from "../../lib/firebase/AuthContext";
import {
  getSiteSettings,
  updateSiteSettings,
} from "../../lib/settingsStore.js";
import {
  getDevelopers,
  upsertDevelopers,
  emptyDeveloper,
} from "../../lib/developerStore.js";
import {
  blankTeam,
  blankWinner,
  deleteYearContent,
  getManagedYears,
  getTeamProjectCards,
  getYearDraft,
  upsertYearContent,
  exportAllData,
  importAllData,
} from "../../lib/yearContentStore.js";
import "./styles/admin.css";

const { TextArea } = Input;

const parseList = (value) =>
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
const toInputList = (value) => (Array.isArray(value) ? value.join(", ") : "");

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

const emptyTeamRow = () => ({ ...blankTeam(), membersText: "", tagsText: "" });
const emptyWinnerRow = () => ({ ...blankWinner() });
const emptyJudgeRow = () => ({ name: "", role: "", image: "" });
const emptyCommitteeRow = () => ({ name: "", role: "", image: "" });
const emptySponsorRow = () => ({ name: "", logo: "" });

const createEmptyDraft = (year) => ({
  year: String(year),
  heroImage: "",
  heroBgColor: "#0a0a0a",
  globalTheme: "",
  globalDescription: "",
  theme: "",
  status: "Completed",
  image: "",
  description: "",
  teamsCount: 0,
  participants: 0,
  teams: [],
  winners: [],
  judges: [],
  organizingCommittee: [],
  sponsors: [],
});

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "teams-winners", label: "Teams & Winners", icon: Users },
  { key: "judges-oc", label: "Judges & OC", icon: UserCheck },
  { key: "sponsors", label: "Sponsors", icon: HeartHandshake },
  { key: "developers", label: "Developers", icon: Code },
  { key: "preview", label: "Preview", icon: Eye },
];

const sectionVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };
  const fileInputRefs = useRef({});
  const [selectedYear, setSelectedYear] = useState("2026");
  const [yearInput, setYearInput] = useState("2026");
  const [reloadToken, setReloadToken] = useState(0);
  const [yearOptions, setYearOptions] = useState([]);
  const [draft, setDraft] = useState(() => createEmptyDraft("2026"));
  const [developersDraft, setDevelopersDraft] = useState([]);
  const [siteSettings, setSiteSettings] = useState({ maintenanceMode: false });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savedCards, setSavedCards] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection =
    location.pathname.split("/").filter(Boolean).slice(-1)[0] || "dashboard";
  const goToSection = (section) => {
    navigate(`/admin/${section}`);
    setSidebarOpen(false);
  };

  useEffect(() => {
    let active = true;

    async function loadMeta() {
      try {
        const [years, cards, devs, settings] = await Promise.all([
          getManagedYears(),
          getTeamProjectCards(),
          getDevelopers(),
          getSiteSettings(),
        ]);
        if (!active) return;
        setYearOptions(years);
        setSavedCards(cards);
        setDevelopersDraft(devs);
        setSiteSettings(settings);
      } catch (error) {
        message.error("Unable to load admin content list");
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadMeta();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadDraft() {
      setLoading(true);

      try {
        const data = await getYearDraft(selectedYear);
        if (!active) return;
        setDraft(data);
      } catch (error) {
        if (active) {
          setDraft(createEmptyDraft(selectedYear));
          message.error("Unable to load year content");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadDraft();

    return () => {
      active = false;
    };
  }, [selectedYear, reloadToken]);

  const syncCards = async () => {
    const cards = await getTeamProjectCards();
    setSavedCards(cards);
  };

  const updateField = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const updateTeam = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      teams: current.teams.map((team, teamIndex) =>
        teamIndex === index ? { ...team, [field]: value } : team,
      ),
    }));
  };

  const updateWinner = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      winners: current.winners.map((winner, winnerIndex) =>
        winnerIndex === index ? { ...winner, [field]: value } : winner,
      ),
    }));
  };

  const updateJudge = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      judges: current.judges.map((judge, judgeIndex) =>
        judgeIndex === index ? { ...judge, [field]: value } : judge,
      ),
    }));
  };

  const updateCommittee = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      organizingCommittee: current.organizingCommittee.map(
        (member, memberIndex) =>
          memberIndex === index ? { ...member, [field]: value } : member,
      ),
    }));
  };

  const addTeam = () => {
    setDraft((current) => ({
      ...current,
      teams: [...current.teams, emptyTeamRow()],
    }));
  };

  const removeTeam = (index) => {
    setDraft((current) => ({
      ...current,
      teams: current.teams.filter((_, teamIndex) => teamIndex !== index),
    }));
  };

  const addWinner = () => {
    setDraft((current) => ({
      ...current,
      winners: [...current.winners, emptyWinnerRow()],
    }));
  };

  const removeWinner = (index) => {
    setDraft((current) => ({
      ...current,
      winners: current.winners.filter(
        (_, winnerIndex) => winnerIndex !== index,
      ),
    }));
  };

  const addJudge = () => {
    setDraft((current) => ({
      ...current,
      judges: [...current.judges, emptyJudgeRow()],
    }));
  };

  const removeJudge = (index) => {
    setDraft((current) => ({
      ...current,
      judges: current.judges.filter((_, judgeIndex) => judgeIndex !== index),
    }));
  };

  const addCommitteeMember = () => {
    setDraft((current) => ({
      ...current,
      organizingCommittee: [
        ...current.organizingCommittee,
        emptyCommitteeRow(),
      ],
    }));
  };

  const removeCommitteeMember = (index) => {
    setDraft((current) => ({
      ...current,
      organizingCommittee: current.organizingCommittee.filter(
        (_, memberIndex) => memberIndex !== index,
      ),
    }));
  };

  const updateSponsor = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      sponsors: current.sponsors.map((sponsor, i) =>
        i === index ? { ...sponsor, [field]: value } : sponsor,
      ),
    }));
  };

  const addSponsor = () => {
    setDraft((current) => ({
      ...current,
      sponsors: [...current.sponsors, emptySponsorRow()],
    }));
  };

  const removeSponsor = (index) => {
    setDraft((current) => ({
      ...current,
      sponsors: current.sponsors.filter((_, i) => i !== index),
    }));
  };

  const updateDeveloper = (index, field, value) => {
    setDevelopersDraft((current) =>
      current.map((dev, i) => (i === index ? { ...dev, [field]: value } : dev)),
    );
  };

  const updateDeveloperSocial = (index, platform, value) => {
    setDevelopersDraft((current) =>
      current.map((dev, i) =>
        i === index
          ? { ...dev, socials: { ...dev.socials, [platform]: value } }
          : dev,
      ),
    );
  };

  const addDeveloper = () => {
    setDevelopersDraft((current) => [...current, emptyDeveloper()]);
  };

  const removeDeveloper = (index) => {
    setDevelopersDraft((current) => current.filter((_, i) => i !== index));
  };

  const uploadToImgBB = async (file) => {
    if (!IMGBB_API_KEY) {
      throw new Error("Missing VITE_IMGBB_API_KEY environment variable");
    }

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await response.json();

    if (!response.ok || !result?.success) {
      throw new Error(result?.error?.message || "Upload to imgbb failed");
    }

    return result.data.display_url || result.data.url || result.data.image?.url;
  };

  const openFilePicker = (key) => {
    fileInputRefs.current[key]?.click();
  };

  const handleFileUpload = async (event, onUploaded) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    const hide = message.loading(`Uploading ${file.name}...`, 0);

    try {
      const imageUrl = await uploadToImgBB(file);
      onUploaded(imageUrl);
      message.success("Image uploaded successfully");
    } catch (error) {
      message.error(error.message || "Unable to upload image");
    } finally {
      hide();
    }
  };

  const handleBackup = async () => {
    try {
      message.loading({ content: "Preparing backup...", key: "backup" });
      const jsonData = await exportAllData();
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `hult_prize_backup_${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      message.success({
        content: "Backup downloaded successfully!",
        key: "backup",
      });
    } catch (error) {
      message.error({ content: "Failed to generate backup.", key: "backup" });
    }
  };

  const handleRecover = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    event.target.value = ""; // reset input

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        message.loading({ content: "Restoring data...", key: "restore" });
        const jsonData = e.target.result;
        await importAllData(jsonData);

        await syncCards();
        const freshDraft = await getYearDraft(selectedYear);
        setDraft(freshDraft);

        message.success({
          content: "Data restored successfully!",
          key: "restore",
        });
      } catch (error) {
        message.error({
          content: "Failed to restore data. Invalid file format.",
          key: "restore",
        });
      }
    };
    reader.readAsText(file);
  };

  const loadYear = () => {
    const nextYear = yearInput.trim() || selectedYear;
    setSelectedYear(nextYear);
    setReloadToken((current) => current + 1);
    message.success(`Loaded ${nextYear}`);
  };

  const saveYear = async () => {
    setSaving(true);

    try {
      await upsertYearContent(selectedYear, {
        ...draft,
        year: selectedYear,
        teams: draft.teams.map((team) => ({
          name: team.name,
          image: team.image,
          problemStatement: team.problemStatement,
          solutionOverview: team.solutionOverview,
          impact: team.impact,
          members: parseList(team.membersText ?? toInputList(team.members)),
          tags: parseList(team.tagsText ?? toInputList(team.tags)),
        })),
        winners: draft.winners.map((winner) => ({
          place: winner.place,
          team: winner.team,
          image: winner.image,
          description: winner.description,
        })),
        judges: draft.judges.map((judge) => ({
          name: judge.name,
          role: judge.role,
          image: judge.image,
        })),
        organizingCommittee: draft.organizingCommittee.map((member) => ({
          name: member.name,
          role: member.role,
          image: member.image,
        })),
      });

      try {
        await syncCards();
        const freshDraft = await getYearDraft(selectedYear);
        setDraft(freshDraft);
        await upsertDevelopers(
          developersDraft.map((dev) => ({
            ...dev,
            stack: parseList(dev.stackText ?? toInputList(dev.stack)),
          })),
        );
      } catch (refreshError) {
        console.error("Saved, but refresh failed:", refreshError);
        message.warning(
          "Saved, but the admin view could not refresh immediately.",
        );
      }

      message.success(`Saved ${selectedYear}`);
    } catch (error) {
      console.error("Unable to save year content:", error);
      message.error(error?.message || "Unable to save year content");
    } finally {
      setSaving(false);
    }
  };

  const resetYear = () => {
    setDraft(createEmptyDraft(selectedYear));
    setYearInput(selectedYear);
    message.info(`Reset ${selectedYear}`);
  };

  const deleteYear = async () => {
    await deleteYearContent(selectedYear);
    await syncCards();
    setDraft(createEmptyDraft(selectedYear));
    message.success(`Deleted saved edits for ${selectedYear}`);
  };

  const teams = draft.teams || [];
  const winners = draft.winners || [];
  const judges = draft.judges || [];
  const committeeMembers = draft.organizingCommittee || [];
  const sponsors = draft.sponsors || [];

  const currentNavItem =
    NAV_ITEMS.find((item) => item.key === currentSection) || NAV_ITEMS[0];

  /* ======== Render helpers ======== */

  const renderUploadField = (label, value, onChangeValue, pickerKey) => (
    <div className="admin-field">
      <label className="admin-field-label">{label}</label>
      <div className="admin-upload-row">
        {value && (
          <div
            className="admin-upload-preview"
            style={{ backgroundImage: `url(${value})` }}
          />
        )}
        <Input
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
          placeholder="https://..."
        />
        <button
          className="admin-btn admin-btn-secondary admin-btn-icon"
          onClick={() => openFilePicker(pickerKey)}
          type="button"
        >
          <Upload />
        </button>
        <input
          ref={(node) => {
            fileInputRefs.current[pickerKey] = node;
          }}
          className="admin-hidden-input"
          type="file"
          accept="image/*"
          onChange={(event) =>
            handleFileUpload(event, (url) => onChangeValue(url))
          }
        />
      </div>
    </div>
  );

  const toggleMaintenance = async () => {
    const newVal = !siteSettings.maintenanceMode;
    const hide = message.loading(
      newVal ? "Enabling maintenance mode..." : "Disabling maintenance mode...",
    );
    try {
      await updateSiteSettings({ maintenanceMode: newVal });
      setSiteSettings((prev) => ({ ...prev, maintenanceMode: newVal }));
      message.success(
        newVal ? "Maintenance mode is now ON" : "Maintenance mode is now OFF",
      );
    } catch (error) {
      message.error("Failed to update maintenance mode");
    } finally {
      hide();
    }
  };

  /* ======== JSX ======== */

  return (
    <div className="admin-root">
      {/* Sidebar overlay (mobile) */}
      <div
        className={`admin-sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ---- Sidebar ---- */}
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Brand */}
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-brand-inner">
            <div className="admin-sidebar-logo">HP</div>
            <div>
              <div className="admin-sidebar-title">Hult Prize</div>
              <div className="admin-sidebar-subtitle">Admin Panel</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="admin-sidebar-nav">
          <div className="admin-sidebar-label">Navigation</div>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                className={`admin-sidebar-link ${currentSection === item.key ? "active" : ""}`}
                onClick={() => goToSection(item.key)}
              >
                <Icon className="admin-sidebar-icon" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Year Selector */}
        <div className="admin-sidebar-year">
          <div className="admin-sidebar-year-label">Select Year to Edit</div>
          <div className="admin-sidebar-year-input">
            <input
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              placeholder="e.g. 2026"
              onKeyDown={(e) => e.key === "Enter" && loadYear()}
            />
            <button
              className="admin-btn admin-btn-secondary admin-btn-sm"
              onClick={loadYear}
              type="button"
            >
              Load
            </button>
          </div>
          <div className="admin-sidebar-year-tags">
            {yearOptions.slice(0, 6).map((year) => (
              <button
                key={year}
                className={`admin-year-tag ${year === selectedYear ? "active" : ""}`}
                onClick={() => {
                  setYearInput(year);
                  setSelectedYear(year);
                  setReloadToken((current) => current + 1);
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="admin-sidebar-logout">
          <div className="admin-sidebar-user-email" title={user?.email}>
            {user?.email}
          </div>
          <button
            className="admin-btn admin-btn-danger admin-btn-sm admin-logout-btn"
            onClick={handleLogout}
            type="button"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ---- Main Area ---- */}
      <main className="admin-main">
        {/* Top Bar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              className="admin-mobile-toggle"
              onClick={() => setSidebarOpen(true)}
              type="button"
            >
              <Menu size={20} />
            </button>
            <div className="admin-breadcrumb">
              <span>Admin</span>
              <ChevronRight className="admin-breadcrumb-sep" size={14} />
              <span className="admin-breadcrumb-current">
                {currentNavItem.label}
              </span>
            </div>
          </div>
          <div className="admin-topbar-actions">
            <button
              className="admin-btn admin-btn-secondary admin-btn-sm"
              onClick={loadYear}
              type="button"
            >
              <RotateCcw size={14} />
              <span className="admin-btn-text">Reload</span>
            </button>
            <button
              className="admin-btn admin-btn-danger admin-btn-sm"
              onClick={deleteYear}
              type="button"
            >
              <Trash2 size={14} />
              <span className="admin-btn-text">Delete</span>
            </button>
            <button
              className="admin-btn admin-btn-primary"
              onClick={saveYear}
              disabled={saving}
              type="button"
            >
              <Save size={16} />
              <span className="admin-btn-text">
                {saving ? "Saving..." : "Save Changes"}
              </span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="admin-content">
          {loading ? (
            <div className="admin-loading">
              <div className="admin-loading-bar" />
              <div className="admin-loading-bar" />
              <div className="admin-loading-bar" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {/* ======== DASHBOARD ======== */}
              {currentSection === "dashboard" && (
                <motion.div
                  key="dashboard"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="admin-section-header admin-dashboard-header">
                    <div>
                      <h1 className="admin-section-title">Dashboard</h1>
                      <p className="admin-section-desc">
                        Manage year content, hero sections, and metadata for{" "}
                        <strong>{selectedYear}</strong>.
                      </p>
                    </div>
                    <div className="admin-dashboard-actions">
                      <button
                        className="admin-btn admin-btn-outline"
                        onClick={handleBackup}
                      >
                        <Download size={16} /> Backup Data
                      </button>
                      <button
                        className="admin-btn admin-btn-primary"
                        onClick={() => fileInputRefs.current.restore?.click()}
                      >
                        <Upload size={16} /> Recover Data
                      </button>
                      <input
                        type="file"
                        accept=".json"
                        style={{ display: "none" }}
                        ref={(el) => (fileInputRefs.current.restore = el)}
                        onChange={handleRecover}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="admin-stats-row">
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon">
                        <Calendar size={18} />
                      </div>
                      <div className="admin-stat-label">Saved Years</div>
                      <div className="admin-stat-value">
                        {savedCards.length}
                      </div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon">
                        <Users size={18} />
                      </div>
                      <div className="admin-stat-label">Teams</div>
                      <div className="admin-stat-value">
                        {draft.teams.length}
                      </div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon">
                        <Trophy size={18} />
                      </div>
                      <div className="admin-stat-label">Winners</div>
                      <div className="admin-stat-value">
                        {draft.winners.length}
                      </div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="admin-stat-icon">
                        <Award size={18} />
                      </div>
                      <div className="admin-stat-label">Participants</div>
                      <div className="admin-stat-value">
                        {draft.participants || 0}
                      </div>
                    </div>
                  </div>

                  {/* Global Settings */}
                  <div
                    className="admin-panel"
                    style={{
                      marginTop: "24px",
                      borderColor: siteSettings.maintenanceMode
                        ? "rgba(236, 32, 136, 0.3)"
                        : undefined,
                    }}
                  >
                    <div className="admin-panel-header">
                      <h2
                        className="admin-panel-title"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: siteSettings.maintenanceMode
                            ? "var(--heritage)"
                            : "inherit",
                        }}
                      >
                        <AlertTriangle size={18} /> Site Settings
                      </h2>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-field admin-maintenance-field">
                        <div>
                          <div className="admin-maintenance-title">
                            Maintenance Mode
                          </div>
                          <div className="admin-maintenance-desc">
                            Take down the public website temporarily. Admins can
                            still access the dashboard.
                          </div>
                        </div>
                        <button
                          className={`admin-btn ${siteSettings.maintenanceMode ? "admin-btn-danger" : "admin-btn-secondary"}`}
                          onClick={toggleMaintenance}
                        >
                          {siteSettings.maintenanceMode
                            ? "Disable Maintenance Mode"
                            : "Enable Maintenance Mode"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hero & Card Images */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">Hero & Media</h2>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-form-grid">
                        <div className="admin-field admin-field-full">
                          {renderUploadField(
                            "Hero Image",
                            draft.heroImage,
                            (val) => updateField("heroImage", val),
                            "heroImage",
                          )}
                        </div>
                        <div className="admin-field admin-field-full">
                          {renderUploadField(
                            "Card Image",
                            draft.image,
                            (val) => updateField("image", val),
                            "cardImage",
                          )}
                        </div>
                        <div className="admin-field">
                          <label className="admin-field-label">
                            Hero Background Color
                          </label>
                          <div className="admin-color-input">
                            <input
                              type="color"
                              value={draft.heroBgColor || "#0a0a0a"}
                              onChange={(e) =>
                                updateField("heroBgColor", e.target.value)
                              }
                            />
                            <Input
                              value={draft.heroBgColor}
                              onChange={(e) =>
                                updateField("heroBgColor", e.target.value)
                              }
                              placeholder="#0a0a0a"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Year Info */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">Year Information</h2>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-form-grid">
                        <div className="admin-field">
                          <label className="admin-field-label">
                            Global Theme
                          </label>
                          <Input
                            value={draft.globalTheme}
                            onChange={(e) =>
                              updateField("globalTheme", e.target.value)
                            }
                            placeholder="e.g. Unlimited"
                          />
                        </div>
                        <div className="admin-field admin-field-full">
                          <label className="admin-field-label">
                            Global Theme Description
                          </label>
                          <TextArea
                            rows={3}
                            value={draft.globalDescription}
                            onChange={(e) =>
                              updateField("globalDescription", e.target.value)
                            }
                            placeholder="A short summary of this year's global theme..."
                          />
                        </div>
                        <div className="admin-field">
                          <label className="admin-field-label">Status</label>
                          <Select
                            value={draft.status}
                            onChange={(value) => updateField("status", value)}
                            options={[
                              { value: "Completed", label: "Completed" },
                              { value: "In Progress", label: "In Progress" },
                              { value: "Draft", label: "Draft" },
                            ]}
                          />
                        </div>
                        <div className="admin-field">
                          <label className="admin-field-label">
                            Teams Count
                          </label>
                          <InputNumber
                            value={draft.teamsCount}
                            onChange={(value) =>
                              updateField("teamsCount", value ?? 0)
                            }
                            min={0}
                          />
                        </div>
                        <div className="admin-field">
                          <label className="admin-field-label">
                            Participants
                          </label>
                          <InputNumber
                            value={draft.participants}
                            onChange={(value) =>
                              updateField("participants", value ?? 0)
                            }
                            min={0}
                          />
                        </div>
                        <div className="admin-field admin-field-full">
                          <label className="admin-field-label">
                            Short Summary
                          </label>
                          <TextArea
                            rows={3}
                            value={draft.description}
                            onChange={(e) =>
                              updateField("description", e.target.value)
                            }
                            placeholder="Brief description of this year..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ======== TEAMS & WINNERS ======== */}
              {currentSection === "teams-winners" && (
                <motion.div
                  key="teams-winners"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="admin-section-header">
                    <h1 className="admin-section-title">Teams & Winners</h1>
                    <p className="admin-section-desc">
                      Add and manage participating teams and competition winners
                      for {selectedYear}.
                    </p>
                  </div>

                  {/* Teams */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">
                        Teams ({teams.length})
                      </h2>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={addTeam}
                        type="button"
                      >
                        <Plus size={14} /> Add Team
                      </button>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-list-stack">
                        {teams.map((team, index) => (
                          <div key={index} className="admin-subcard">
                            <div className="admin-subcard-header">
                              <div className="admin-subcard-title">
                                <span className="admin-subcard-number">
                                  {index + 1}
                                </span>
                                {team.name || `Team ${index + 1}`}
                              </div>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => removeTeam(index)}
                                type="button"
                              >
                                <X size={14} /> Remove
                              </button>
                            </div>
                            <div className="admin-subcard-body">
                              <div className="admin-form-grid">
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Team Name
                                  </label>
                                  <Input
                                    value={team.name}
                                    onChange={(e) =>
                                      updateTeam(index, "name", e.target.value)
                                    }
                                    placeholder="Team name"
                                  />
                                </div>
                                <div className="admin-field">
                                  {renderUploadField(
                                    "Image",
                                    team.image,
                                    (val) => updateTeam(index, "image", val),
                                    `team-${index}`,
                                  )}
                                </div>
                                <div className="admin-field admin-field-full">
                                  <label className="admin-field-label">
                                    Problem Statement
                                  </label>
                                  <TextArea
                                    rows={2}
                                    value={team.problemStatement}
                                    onChange={(e) =>
                                      updateTeam(
                                        index,
                                        "problemStatement",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="What problem does this team address?"
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  <label className="admin-field-label">
                                    Solution Overview
                                  </label>
                                  <TextArea
                                    rows={2}
                                    value={team.solutionOverview}
                                    onChange={(e) =>
                                      updateTeam(
                                        index,
                                        "solutionOverview",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="What is their proposed solution?"
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  <label className="admin-field-label">
                                    Impact
                                  </label>
                                  <TextArea
                                    rows={2}
                                    value={team.impact}
                                    onChange={(e) =>
                                      updateTeam(
                                        index,
                                        "impact",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="What impact does this solution create?"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Members (comma-separated)
                                  </label>
                                  <Input
                                    value={
                                      team.membersText ??
                                      toInputList(team.members)
                                    }
                                    onChange={(e) =>
                                      updateTeam(
                                        index,
                                        "membersText",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Name 1, Name 2"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Tags (comma-separated)
                                  </label>
                                  <Input
                                    value={
                                      team.tagsText ?? toInputList(team.tags)
                                    }
                                    onChange={(e) =>
                                      updateTeam(
                                        index,
                                        "tagsText",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="SDG, Innovation"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Winners */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">
                        Winners ({winners.length})
                      </h2>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={addWinner}
                        type="button"
                      >
                        <Plus size={14} /> Add Winner
                      </button>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-list-stack">
                        {winners.map((winner, index) => (
                          <div key={index} className="admin-subcard">
                            <div className="admin-subcard-header">
                              <div className="admin-subcard-title">
                                <span className="admin-subcard-number">
                                  {index + 1}
                                </span>
                                {winner.team || `Winner ${index + 1}`}
                              </div>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => removeWinner(index)}
                                type="button"
                              >
                                <X size={14} /> Remove
                              </button>
                            </div>
                            <div className="admin-subcard-body">
                              <div className="admin-form-grid">
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Place
                                  </label>
                                  <Input
                                    value={winner.place}
                                    onChange={(e) =>
                                      updateWinner(
                                        index,
                                        "place",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="1ST PLACE"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Team
                                  </label>
                                  <Input
                                    value={winner.team}
                                    onChange={(e) =>
                                      updateWinner(
                                        index,
                                        "team",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Winning team name"
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  {renderUploadField(
                                    "Image",
                                    winner.image,
                                    (val) => updateWinner(index, "image", val),
                                    `winner-${index}`,
                                  )}
                                </div>
                                <div className="admin-field admin-field-full">
                                  <label className="admin-field-label">
                                    Description
                                  </label>
                                  <TextArea
                                    rows={3}
                                    value={winner.description}
                                    onChange={(e) =>
                                      updateWinner(
                                        index,
                                        "description",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Describe their achievement..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ======== JUDGES & OC ======== */}
              {currentSection === "judges-oc" && (
                <motion.div
                  key="judges-oc"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="admin-section-header">
                    <h1 className="admin-section-title">
                      Judges & Organizing Committee
                    </h1>
                    <p className="admin-section-desc">
                      Manage judges and OC members for {selectedYear}.
                    </p>
                  </div>

                  {/* Judges */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">
                        Judges ({judges.length})
                      </h2>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={addJudge}
                        type="button"
                      >
                        <Plus size={14} /> Add Judge
                      </button>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-list-stack">
                        {judges.map((judge, index) => (
                          <div key={index} className="admin-subcard">
                            <div className="admin-subcard-header">
                              <div className="admin-subcard-title">
                                <span className="admin-subcard-number">
                                  {index + 1}
                                </span>
                                {judge.name || `Judge ${index + 1}`}
                              </div>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => removeJudge(index)}
                                type="button"
                              >
                                <X size={14} /> Remove
                              </button>
                            </div>
                            <div className="admin-subcard-body">
                              <div className="admin-form-grid">
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Name
                                  </label>
                                  <Input
                                    value={judge.name}
                                    onChange={(e) =>
                                      updateJudge(index, "name", e.target.value)
                                    }
                                    placeholder="Judge name"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Role
                                  </label>
                                  <Input
                                    value={judge.role}
                                    onChange={(e) =>
                                      updateJudge(index, "role", e.target.value)
                                    }
                                    placeholder="e.g. Lead Judge"
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  {renderUploadField(
                                    "Photo",
                                    judge.image,
                                    (val) => updateJudge(index, "image", val),
                                    `judge-${index}`,
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* OC Members */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">
                        OC Members ({committeeMembers.length})
                      </h2>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={addCommitteeMember}
                        type="button"
                      >
                        <Plus size={14} /> Add Member
                      </button>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-list-stack">
                        {committeeMembers.map((member, index) => (
                          <div key={index} className="admin-subcard">
                            <div className="admin-subcard-header">
                              <div className="admin-subcard-title">
                                <span className="admin-subcard-number">
                                  {index + 1}
                                </span>
                                {member.name || `Member ${index + 1}`}
                              </div>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => removeCommitteeMember(index)}
                                type="button"
                              >
                                <X size={14} /> Remove
                              </button>
                            </div>
                            <div className="admin-subcard-body">
                              <div className="admin-form-grid">
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Name
                                  </label>
                                  <Input
                                    value={member.name}
                                    onChange={(e) =>
                                      updateCommittee(
                                        index,
                                        "name",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Member name"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Role
                                  </label>
                                  <Select
                                    value={member.role || undefined}
                                    onChange={(value) =>
                                      updateCommittee(index, "role", value)
                                    }
                                    placeholder="Select a role"
                                    style={{ width: "100%" }}
                                    options={[
                                      {
                                        value: "Campus Director",
                                        label: "Campus Director",
                                      },
                                      {
                                        value: "Deputy Campus Director",
                                        label: "Deputy Campus Director",
                                      },
                                      {
                                        value:
                                          "Marketing and Communication Lead",
                                        label:
                                          "Marketing and Communication Lead",
                                      },
                                      {
                                        value: "Event Manager",
                                        label: "Event Manager",
                                      },
                                      {
                                        value: "Event Co-ordinator",
                                        label: "Event Co-ordinator",
                                      },
                                      {
                                        value: "Technical Head",
                                        label: "Technical Head",
                                      },
                                      {
                                        value: "Team's Startup Adviser",
                                        label: "Team's Startup Adviser",
                                      },
                                      {
                                        value: "Video Editor",
                                        label: "Video Editor",
                                      },
                                      {
                                        value: "Graphic Designer",
                                        label: "Graphic Designer",
                                      },
                                      {
                                        value: "Content & Social Media Manager",
                                        label: "Content & Social Media Manager",
                                      },
                                      {
                                        value: "Logistic Head",
                                        label: "Logistic Head",
                                      },
                                    ]}
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  {renderUploadField(
                                    "Photo",
                                    member.image,
                                    (val) =>
                                      updateCommittee(index, "image", val),
                                    `committee-${index}`,
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ======== SPONSORS ======== */}
              {currentSection === "sponsors" && (
                <motion.div
                  key="sponsors"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="admin-section-header">
                    <h1 className="admin-section-title">Sponsors</h1>
                    <p className="admin-section-desc">
                      Manage the sponsors for {selectedYear}.
                    </p>
                  </div>

                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">
                        Sponsors ({sponsors.length})
                      </h2>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={addSponsor}
                        type="button"
                      >
                        <Plus size={14} /> Add Sponsor
                      </button>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-list-stack">
                        {sponsors.map((sponsor, index) => (
                          <div key={index} className="admin-subcard">
                            <div className="admin-subcard-header">
                              <div className="admin-subcard-title">
                                <span className="admin-subcard-number">
                                  {index + 1}
                                </span>
                                {sponsor.name || `Sponsor ${index + 1}`}
                              </div>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => removeSponsor(index)}
                                type="button"
                              >
                                <X size={14} /> Remove
                              </button>
                            </div>
                            <div className="admin-subcard-body">
                              <div className="admin-form-grid">
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Sponsor Name
                                  </label>
                                  <Input
                                    value={sponsor.name}
                                    onChange={(e) =>
                                      updateSponsor(
                                        index,
                                        "name",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Sponsor Company Name"
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  {renderUploadField(
                                    "Sponsor Logo",
                                    sponsor.logo,
                                    (val) => updateSponsor(index, "logo", val),
                                    `sponsor-${index}`,
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ======== DEVELOPERS ======== */}
              {currentSection === "developers" && (
                <motion.div
                  key="developers"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="admin-section-header">
                    <h1 className="admin-section-title">Developers</h1>
                    <p className="admin-section-desc">
                      Manage the developers shown on the Developer page.
                    </p>
                  </div>

                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">
                        Developers ({developersDraft.length})
                      </h2>
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={addDeveloper}
                        type="button"
                      >
                        <Plus size={14} /> Add Developer
                      </button>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-list-stack">
                        {developersDraft.map((dev, index) => (
                          <div key={index} className="admin-subcard">
                            <div className="admin-subcard-header">
                              <div className="admin-subcard-title">
                                <span className="admin-subcard-number">
                                  {index + 1}
                                </span>
                                {dev.name || `Developer ${index + 1}`}
                              </div>
                              <button
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                onClick={() => removeDeveloper(index)}
                                type="button"
                              >
                                <X size={14} /> Remove
                              </button>
                            </div>
                            <div className="admin-subcard-body">
                              <div className="admin-form-grid">
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Name
                                  </label>
                                  <Input
                                    value={dev.name}
                                    onChange={(e) =>
                                      updateDeveloper(
                                        index,
                                        "name",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Developer Name"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Role
                                  </label>
                                  <Input
                                    value={dev.role}
                                    onChange={(e) =>
                                      updateDeveloper(
                                        index,
                                        "role",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="e.g. Fullstack Developer"
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  {renderUploadField(
                                    "Image",
                                    dev.image,
                                    (val) =>
                                      updateDeveloper(index, "image", val),
                                    `dev-${index}`,
                                  )}
                                </div>
                                <div className="admin-field admin-field-full">
                                  <label className="admin-field-label">
                                    Bio
                                  </label>
                                  <TextArea
                                    rows={2}
                                    value={dev.bio}
                                    onChange={(e) =>
                                      updateDeveloper(
                                        index,
                                        "bio",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="Short bio..."
                                  />
                                </div>
                                <div className="admin-field admin-field-full">
                                  <label className="admin-field-label">
                                    Tech Stack (comma-separated)
                                  </label>
                                  <Input
                                    value={
                                      dev.stackText ?? toInputList(dev.stack)
                                    }
                                    onChange={(e) =>
                                      updateDeveloper(
                                        index,
                                        "stackText",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="React, Node.js, Tailwind"
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    GitHub URL
                                  </label>
                                  <Input
                                    value={dev.socials.github}
                                    onChange={(e) =>
                                      updateDeveloperSocial(
                                        index,
                                        "github",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="https://github.com/..."
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    LinkedIn URL
                                  </label>
                                  <Input
                                    value={dev.socials.linkedin}
                                    onChange={(e) =>
                                      updateDeveloperSocial(
                                        index,
                                        "linkedin",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="https://linkedin.com/..."
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Twitter URL
                                  </label>
                                  <Input
                                    value={dev.socials.twitter}
                                    onChange={(e) =>
                                      updateDeveloperSocial(
                                        index,
                                        "twitter",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="https://twitter.com/..."
                                  />
                                </div>
                                <div className="admin-field">
                                  <label className="admin-field-label">
                                    Website URL
                                  </label>
                                  <Input
                                    value={dev.socials.website}
                                    onChange={(e) =>
                                      updateDeveloperSocial(
                                        index,
                                        "website",
                                        e.target.value,
                                      )
                                    }
                                    placeholder="https://..."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ======== PREVIEW ======== */}
              {currentSection === "preview" && (
                <motion.div
                  key="preview"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="admin-section-header">
                    <h1 className="admin-section-title">Live Preview</h1>
                    <p className="admin-section-desc">
                      Preview how your changes will appear on the public site.
                    </p>
                  </div>

                  {/* Hero Preview */}
                  <div
                    className="admin-preview-hero"
                    style={{ backgroundColor: draft.heroBgColor || "#0a0a0a" }}
                  >
                    {draft.heroImage ? (
                      <div
                        className="admin-preview-hero-image"
                        style={{ backgroundImage: `url(${draft.heroImage})` }}
                      />
                    ) : (
                      <div className="admin-preview-hero-fallback">
                        No hero image set
                      </div>
                    )}
                    <div className="admin-preview-hero-copy">
                      <div className="admin-preview-year">{selectedYear}</div>
                      <div className="admin-preview-theme">
                        {draft.globalTheme || "Global theme goes here"}
                      </div>
                      <button
                        className="admin-btn admin-btn-primary"
                        onClick={() => navigate("/")}
                        type="button"
                      >
                        Open Public Site
                      </button>
                    </div>
                  </div>

                  {/* Teams Preview */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">Teams</h2>
                    </div>
                    <div className="admin-panel-body">
                      {draft.teams.length ? (
                        <div className="admin-preview-list">
                          {draft.teams.map((team, index) => (
                            <div key={index} className="admin-preview-item">
                              <div
                                className="admin-preview-item-avatar"
                                style={
                                  team.image
                                    ? { backgroundImage: `url(${team.image})` }
                                    : {}
                                }
                              >
                                {!team.image && (team.name?.charAt(0) || "T")}
                              </div>
                              <div className="admin-preview-item-info">
                                <div className="admin-preview-item-name">
                                  {team.name || `Team ${index + 1}`}
                                </div>
                                <div className="admin-preview-item-desc">
                                  {team.problemStatement ||
                                    "No problem statement yet."}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className="admin-muted"
                          style={{ padding: "16px 0" }}
                        >
                          Add a team to see it previewed here.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Winners Preview */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">Winners</h2>
                    </div>
                    <div className="admin-panel-body">
                      {draft.winners.length ? (
                        <div className="admin-preview-list">
                          {draft.winners.map((winner, index) => (
                            <div key={index} className="admin-preview-item">
                              <div
                                className="admin-preview-item-avatar"
                                style={
                                  winner.image
                                    ? {
                                        backgroundImage: `url(${winner.image})`,
                                      }
                                    : {}
                                }
                              >
                                {!winner.image && <Trophy size={16} />}
                              </div>
                              <div className="admin-preview-item-info">
                                <div className="admin-preview-item-name">
                                  {winner.place || `Place ${index + 1}`}
                                </div>
                                <div className="admin-preview-item-desc">
                                  {winner.team || "Winner team"}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className="admin-muted"
                          style={{ padding: "16px 0" }}
                        >
                          Add a winner to see it previewed here.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Saved Years */}
                  <div className="admin-panel">
                    <div className="admin-panel-header">
                      <h2 className="admin-panel-title">Saved Years</h2>
                    </div>
                    <div className="admin-panel-body">
                      <div className="admin-saved-years">
                        {savedCards.slice(0, 8).map((card) => (
                          <div key={card.year} className="admin-saved-year">
                            <div className="admin-saved-year-title">
                              {card.year}
                            </div>
                            <div className="admin-saved-year-desc">
                              {card.theme || card.globalTheme || "No theme set"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
