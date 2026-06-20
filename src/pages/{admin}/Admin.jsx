import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Card, Col, Divider, Input, InputNumber, Row, Select, Space, Tag, Typography, message } from "antd";
import { ArrowLeftOutlined, DeleteOutlined, PlusOutlined, ReloadOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { blankTeam, blankWinner, deleteYearContent, getManagedYears, getTeamProjectCards, getYearDraft, upsertYearContent } from "../../lib/yearContentStore.js";
import "./styles/admin.css";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const parseList = (value) => String(value || "").split(",").map((item) => item.trim()).filter(Boolean);

const toInputList = (value) => Array.isArray(value) ? value.join(", ") : "";

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

const emptyTeamRow = () => ({ ...blankTeam(), membersText: "", tagsText: "" });
const emptyWinnerRow = () => ({ ...blankWinner() });
const emptyJudgeRow = () => ({ name: "", role: "", image: "" });
const emptyCommitteeRow = () => ({ name: "", role: "", image: "" });

const createEmptyDraft = (year) => ({
  year: String(year),
  heroImage: "",
  heroBgColor: "#0a0a0a",
  globalTheme: "",
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

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRefs = useRef({});
  const [selectedYear, setSelectedYear] = useState("2026");
  const [yearInput, setYearInput] = useState("2026");
  const [reloadToken, setReloadToken] = useState(0);
  const [yearOptions, setYearOptions] = useState([]);
  const [draft, setDraft] = useState(() => createEmptyDraft("2026"));
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savedCards, setSavedCards] = useState([]);

  const currentSection = location.pathname.split("/").filter(Boolean).slice(-1)[0] || "dashboard";
  const goToSection = (section) => navigate(`/admin/${section}`);

  useEffect(() => {
    let active = true;

    async function loadMeta() {
      try {
        const [years, cards] = await Promise.all([getManagedYears(), getTeamProjectCards()]);
        if (!active) return;
        setYearOptions(years);
        setSavedCards(cards);
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
      teams: current.teams.map((team, teamIndex) => teamIndex === index ? { ...team, [field]: value } : team),
    }));
  };

  const updateWinner = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      winners: current.winners.map((winner, winnerIndex) => winnerIndex === index ? { ...winner, [field]: value } : winner),
    }));
  };

  const updateJudge = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      judges: current.judges.map((judge, judgeIndex) => judgeIndex === index ? { ...judge, [field]: value } : judge),
    }));
  };

  const updateCommittee = (index, field, value) => {
    setDraft((current) => ({
      ...current,
      organizingCommittee: current.organizingCommittee.map((member, memberIndex) => memberIndex === index ? { ...member, [field]: value } : member),
    }));
  };

  const addTeam = () => {
    setDraft((current) => ({ ...current, teams: [...current.teams, emptyTeamRow()] }));
  };

  const removeTeam = (index) => {
    setDraft((current) => ({ ...current, teams: current.teams.filter((_, teamIndex) => teamIndex !== index) }));
  };

  const addWinner = () => {
    setDraft((current) => ({ ...current, winners: [...current.winners, emptyWinnerRow()] }));
  };

  const removeWinner = (index) => {
    setDraft((current) => ({ ...current, winners: current.winners.filter((_, winnerIndex) => winnerIndex !== index) }));
  };

  const addJudge = () => {
    setDraft((current) => ({ ...current, judges: [...current.judges, emptyJudgeRow()] }));
  };

  const removeJudge = (index) => {
    setDraft((current) => ({ ...current, judges: current.judges.filter((_, judgeIndex) => judgeIndex !== index) }));
  };

  const addCommitteeMember = () => {
    setDraft((current) => ({ ...current, organizingCommittee: [...current.organizingCommittee, emptyCommitteeRow()] }));
  };

  const removeCommitteeMember = (index) => {
    setDraft((current) => ({ ...current, organizingCommittee: current.organizingCommittee.filter((_, memberIndex) => memberIndex !== index) }));
  };

  const uploadToImgBB = async (file) => {
    if (!IMGBB_API_KEY) {
      throw new Error("Missing VITE_IMGBB_API_KEY environment variable");
    }

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

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

    const hide = message.loading(`Uploading ${file.name} to imgbb...`, 0);

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

  const loadYear = () => {
    const nextYear = yearInput.trim() || selectedYear;
    setSelectedYear(nextYear);
    setReloadToken((current) => current + 1);
    message.success(`Loaded ${nextYear}`);
  };

  const saveYear = async () => {
    setSaving(true);

    try {
      const { globalDescription: _ignoredGlobalDescription, ...draftWithoutGlobalDescription } = draft;

      await upsertYearContent(selectedYear, {
        ...draftWithoutGlobalDescription,
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
      } catch (refreshError) {
        console.error("Saved, but refresh failed:", refreshError);
        message.warning("Saved, but the admin view could not refresh immediately.");
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

  const teams = draft.teams.length ? draft.teams : [emptyTeamRow()];
  const winners = draft.winners.length ? draft.winners : [emptyWinnerRow()];
  const judges = draft.judges.length ? draft.judges : [emptyJudgeRow()];
  const committeeMembers = draft.organizingCommittee.length ? draft.organizingCommittee : [emptyCommitteeRow()];

  return (
    <div className="admin-page">
      <section className="admin-nav-wrap">
        <div className="admin-shell">
          <Card className="admin-nav-card" bodyStyle={{ padding: "12px 16px" }}>
            <div className="admin-nav-bar">
              <Button type="text" className="admin-nav-link" onClick={() => goToSection("dashboard")}>Dashboard</Button>
              <Button type="text" className="admin-nav-link" onClick={() => goToSection("teams-winners")}>Teams / Winners</Button>
              <Button type="text" className="admin-nav-link" onClick={() => goToSection("judges-oc")}>Judges & OC Members</Button>
              <Button type="text" className="admin-nav-link" onClick={() => goToSection("preview")}>Preview Site</Button>
              <Button type="primary" className="admin-nav-save" icon={<SaveOutlined />} onClick={saveYear} loading={saving}>Save Changes</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="admin-hero">
        <div className="admin-shell">
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)} className="admin-back-btn">
            Back
          </Button>

          <div className="admin-hero-grid">
            <div className="admin-hero-copy">
              <Tag className="admin-pill">Year content manager</Tag>
              <Title level={1} className="admin-title">Admin page for teams and winners</Title>
              <Paragraph className="admin-subtitle">
                Add or update the details for a year, including the public year card, the hero section, participating teams, and winners.
                Edits are saved locally in the browser and immediately reflected on the public pages.
              </Paragraph>
              <Space wrap>
                <Button type="primary" icon={<SaveOutlined />} onClick={saveYear} loading={saving}>
                  Save year
                </Button>
                <Button icon={<ReloadOutlined />} onClick={loadYear}>
                  Reload year
                </Button>
                <Button danger icon={<DeleteOutlined />} onClick={deleteYear}>
                  Delete saved edits
                </Button>
              </Space>
            </div>

            <Card className="admin-hero-card">
              <Text className="admin-field-label">Year</Text>
              <Space.Compact className="admin-year-row">
                <Input value={yearInput} onChange={(event) => setYearInput(event.target.value)} placeholder="2026" />
                <Button onClick={loadYear}>Load</Button>
              </Space.Compact>
              <div className="admin-hint">You can type any year value, then load it to edit.</div>
              <div className="admin-year-tags">
                {yearOptions.slice(0, 8).map((year) => (
                  <Tag key={year} color={year === selectedYear ? "magenta" : "default"} onClick={() => {
                    setYearInput(year);
                    setSelectedYear(year);
                    setReloadToken((current) => current + 1);
                  }}>
                    {year}
                  </Tag>
                ))}
              </div>

              <Divider />

              <div className="admin-stat-grid">
                <div>
                  <span>Saved years</span>
                  <strong>{savedCards.length}</strong>
                </div>
                <div>
                  <span>Teams in form</span>
                  <strong>{draft.teams.length}</strong>
                </div>
                <div>
                  <span>Winners in form</span>
                  <strong>{draft.winners.length}</strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="admin-body">
        <div className="admin-shell">
          <Row gutter={[24, 24]}>
            <Col xs={100} xl={100}>
              {currentSection === "dashboard" && (
                <Card className="admin-panel" title="Dashboard / Year summary">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Hero image</Text>
                    <div className="admin-upload-row">
                      <Input value={draft.heroImage} onChange={(event) => updateField("heroImage", event.target.value)} placeholder="https://..." />
                      <Button icon={<UploadOutlined />} onClick={() => openFilePicker("heroImage")}>Upload</Button>
                      <input
                        ref={(node) => { fileInputRefs.current.heroImage = node; }}
                        className="admin-hidden-input"
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleFileUpload(event, (url) => updateField("heroImage", url))}
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Hero background color</Text>
                    <Input value={draft.heroBgColor} onChange={(event) => updateField("heroBgColor", event.target.value)} placeholder="#0a0a0a" />
                  </Col>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Global theme</Text>
                    <Input value={draft.globalTheme} onChange={(event) => updateField("globalTheme", event.target.value)} placeholder="Unlimited" />
                  </Col>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Card image</Text>
                    <div className="admin-upload-row">
                      <Input value={draft.image} onChange={(event) => updateField("image", event.target.value)} placeholder="Public year card image" />
                      <Button icon={<UploadOutlined />} onClick={() => openFilePicker("cardImage")}>Upload</Button>
                      <input
                        ref={(node) => { fileInputRefs.current.cardImage = node; }}
                        className="admin-hidden-input"
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleFileUpload(event, (url) => updateField("image", url))}
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Status</Text>
                    <Select
                      value={draft.status}
                      onChange={(value) => updateField("status", value)}
                      options={[
                        { value: "Completed", label: "Completed" },
                        { value: "In Progress", label: "In Progress" },
                        { value: "Draft", label: "Draft" },
                      ]}
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Teams count</Text>
                    <InputNumber value={draft.teamsCount} onChange={(value) => updateField("teamsCount", value ?? 0)} min={0} className="admin-number" />
                  </Col>
                  <Col xs={24} md={12}>
                    <Text className="admin-field-label">Participants</Text>
                    <InputNumber value={draft.participants} onChange={(value) => updateField("participants", value ?? 0)} min={0} className="admin-number" />
                  </Col>
                  <Col xs={24}>
                    <Text className="admin-field-label">Short summary</Text>
                    <TextArea rows={3} value={draft.description} onChange={(event) => updateField("description", event.target.value)} />
                  </Col>
                </Row>
                </Card>
              )}

              {currentSection === "teams-winners" && (
                <>
              <Card className="admin-panel admin-section" title="Teams / Winners" extra={<Button icon={<PlusOutlined />} onClick={addTeam}>Add team</Button>}>
                <div className="admin-list-stack">
                  {teams.map((team, index) => (
                    <Card key={index} className="admin-subcard" size="small" title={`Team ${index + 1}`} extra={<Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeTeam(index)}>Remove</Button>}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                          <Text className="admin-field-label">Team name</Text>
                          <Input value={team.name} onChange={(event) => updateTeam(index, "name", event.target.value)} />
                        </Col>
                        <Col xs={24} md={12}>
                          <Text className="admin-field-label">Image URL</Text>
                          <div className="admin-upload-row">
                            <Input value={team.image} onChange={(event) => updateTeam(index, "image", event.target.value)} />
                            <Button icon={<UploadOutlined />} onClick={() => openFilePicker(`team-${index}`)}>Upload</Button>
                            <input
                              ref={(node) => { fileInputRefs.current[`team-${index}`] = node; }}
                              className="admin-hidden-input"
                              type="file"
                              accept="image/*"
                              onChange={(event) => handleFileUpload(event, (url) => updateTeam(index, "image", url))}
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <Text className="admin-field-label">Problem statement</Text>
                          <TextArea rows={2} value={team.problemStatement} onChange={(event) => updateTeam(index, "problemStatement", event.target.value)} />
                        </Col>
                        <Col xs={24}>
                          <Text className="admin-field-label">Solution overview</Text>
                          <TextArea rows={2} value={team.solutionOverview} onChange={(event) => updateTeam(index, "solutionOverview", event.target.value)} />
                        </Col>
                        <Col xs={24}>
                          <Text className="admin-field-label">Impact</Text>
                          <TextArea rows={2} value={team.impact} onChange={(event) => updateTeam(index, "impact", event.target.value)} />
                        </Col>
                        <Col xs={24} md={12}>
                          <Text className="admin-field-label">Members, comma separated</Text>
                          <Input value={team.membersText ?? toInputList(team.members)} onChange={(event) => updateTeam(index, "membersText", event.target.value)} placeholder="Name 1, Name 2" />
                        </Col>
                        <Col xs={24} md={12}>
                          <Text className="admin-field-label">Tags, comma separated</Text>
                          <Input value={team.tagsText ?? toInputList(team.tags)} onChange={(event) => updateTeam(index, "tagsText", event.target.value)} placeholder="SDG, Innovation" />
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </div>
              </Card>

              <Card className="admin-panel admin-section" title="Winners" extra={<Button icon={<PlusOutlined />} onClick={addWinner}>Add winner</Button>}>
                <div className="admin-list-stack">
                  {winners.map((winner, index) => (
                    <Card key={index} className="admin-subcard" size="small" title={`Winner ${index + 1}`} extra={<Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeWinner(index)}>Remove</Button>}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Place</Text>
                          <Input value={winner.place} onChange={(event) => updateWinner(index, "place", event.target.value)} placeholder="1ST PLACE" />
                        </Col>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Team</Text>
                          <Input value={winner.team} onChange={(event) => updateWinner(index, "team", event.target.value)} placeholder="Winner team" />
                        </Col>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Image URL</Text>
                          <div className="admin-upload-row">
                            <Input value={winner.image} onChange={(event) => updateWinner(index, "image", event.target.value)} />
                            <Button icon={<UploadOutlined />} onClick={() => openFilePicker(`winner-${index}`)}>Upload</Button>
                            <input
                              ref={(node) => { fileInputRefs.current[`winner-${index}`] = node; }}
                              className="admin-hidden-input"
                              type="file"
                              accept="image/*"
                              onChange={(event) => handleFileUpload(event, (url) => updateWinner(index, "image", url))}
                            />
                          </div>
                        </Col>
                        <Col xs={24}>
                          <Text className="admin-field-label">Description</Text>
                          <TextArea rows={3} value={winner.description} onChange={(event) => updateWinner(index, "description", event.target.value)} />
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </div>
              </Card>
                </>
              )}

              {currentSection === "judges-oc" && (
                <>
              <Card className="admin-panel admin-section" title="Judges" extra={<Button icon={<PlusOutlined />} onClick={addJudge}>Add judge</Button>}>
                <div className="admin-list-stack">
                  {judges.map((judge, index) => (
                    <Card key={index} className="admin-subcard" size="small" title={`Judge ${index + 1}`} extra={<Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeJudge(index)}>Remove</Button>}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Name</Text>
                          <Input value={judge.name} onChange={(event) => updateJudge(index, "name", event.target.value)} placeholder="Judge name" />
                        </Col>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Role</Text>
                          <Input value={judge.role} onChange={(event) => updateJudge(index, "role", event.target.value)} placeholder="Judge role" />
                        </Col>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Image URL</Text>
                          <div className="admin-upload-row">
                            <Input value={judge.image} onChange={(event) => updateJudge(index, "image", event.target.value)} />
                            <Button icon={<UploadOutlined />} onClick={() => openFilePicker(`judge-${index}`)}>Upload</Button>
                            <input
                              ref={(node) => { fileInputRefs.current[`judge-${index}`] = node; }}
                              className="admin-hidden-input"
                              type="file"
                              accept="image/*"
                              onChange={(event) => handleFileUpload(event, (url) => updateJudge(index, "image", url))}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </div>
              </Card>

              <Card className="admin-panel admin-section" title="OC Members" extra={<Button icon={<PlusOutlined />} onClick={addCommitteeMember}>Add member</Button>}>
                <div className="admin-list-stack">
                  {committeeMembers.map((member, index) => (
                    <Card key={index} className="admin-subcard" size="small" title={`Member ${index + 1}`} extra={<Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeCommitteeMember(index)}>Remove</Button>}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Name</Text>
                          <Input value={member.name} onChange={(event) => updateCommittee(index, "name", event.target.value)} placeholder="Member name" />
                        </Col>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Role</Text>
                          <Input value={member.role} onChange={(event) => updateCommittee(index, "role", event.target.value)} placeholder="Member role" />
                        </Col>
                        <Col xs={24} md={8}>
                          <Text className="admin-field-label">Image URL</Text>
                          <div className="admin-upload-row">
                            <Input value={member.image} onChange={(event) => updateCommittee(index, "image", event.target.value)} />
                            <Button icon={<UploadOutlined />} onClick={() => openFilePicker(`committee-${index}`)}>Upload</Button>
                            <input
                              ref={(node) => { fileInputRefs.current[`committee-${index}`] = node; }}
                              className="admin-hidden-input"
                              type="file"
                              accept="image/*"
                              onChange={(event) => handleFileUpload(event, (url) => updateCommittee(index, "image", url))}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </div>
              </Card>
                </>
              )}

              {currentSection === "preview" && (
                <Card className="admin-preview-card" title="Live preview">
                  <div className="admin-preview-hero" style={{ backgroundColor: draft.heroBgColor || "#0a0a0a" }}>
                    {draft.heroImage ? (
                      <div className="admin-preview-hero-image" style={{ backgroundImage: `url(${draft.heroImage})` }} />
                    ) : (
                      <div className="admin-preview-hero-fallback">No hero image set</div>
                    )}
                    <div className="admin-preview-hero-copy">
                      <Text className="admin-preview-year">{selectedYear}</Text>
                      <Title level={3}>{draft.globalTheme || "Global theme goes here"}</Title>
                      <Space wrap>
                        <Button type="primary" onClick={() => navigate("/")}>Open Public Site</Button>
                      </Space>
                    </div>
                  </div>

                  <Divider />

                  <div className="admin-preview-block">
                    <Text className="admin-field-label">Teams</Text>
                    <div className="admin-preview-list">
                      {draft.teams.length ? draft.teams.map((team, index) => (
                        <Card key={index} size="small" className="admin-preview-item">
                          <Space align="start" size={12}>
                            <Avatar shape="square" src={team.image}>{team.name?.charAt(0) || "T"}</Avatar>
                            <div>
                              <Text strong>{team.name || `Team ${index + 1}`}</Text>
                              <div className="admin-preview-text">{team.problemStatement || "Problem statement not added yet."}</div>
                            </div>
                          </Space>
                        </Card>
                      )) : <div className="admin-muted">Add a team to see it previewed here.</div>}
                    </div>
                  </div>

                  <Divider />

                  <div className="admin-preview-block">
                    <Text className="admin-field-label">Winners</Text>
                    <div className="admin-preview-list">
                      {draft.winners.length ? draft.winners.map((winner, index) => (
                        <Card key={index} size="small" className="admin-preview-item">
                          <Text strong>{winner.place || `Place ${index + 1}`}</Text>
                          <div>{winner.team || "Winner team"}</div>
                          <div className="admin-muted">{winner.description || "Winner description"}</div>
                        </Card>
                      )) : <div className="admin-muted">Add a winner to see it previewed here.</div>}
                    </div>
                  </div>

                  <Divider />

                  <div className="admin-preview-block">
                    <Text className="admin-field-label">Saved years</Text>
                    <div className="admin-saved-years">
                      {savedCards.slice(0, 8).map((card) => (
                        <div key={card.year} className="admin-saved-year">
                          <Text strong>{card.year}</Text>
                          <div className="admin-muted">{card.theme || card.globalTheme || "No title yet"}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Admin;