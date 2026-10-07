import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Rocket, 
  FileCheck, 
  Trophy, 
  Cpu, 
  Users, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Compass,
  Award,
  Layers,
  Zap
} from 'lucide-react';
import './InnovationCell.css';

export default function InnovationCell() {
  const [ideaSubmitted, setIdeaSubmitted] = useState(false);
  const [ideaForm, setIdeaForm] = useState({
    title: '',
    category: 'AI / Machine Learning',
    teamLeader: '',
    email: '',
    phone: '',
    summary: '',
    stage: 'Concept / Ideation'
  });

  const stats = [
    { num: '32+', label: 'Patents Published & Filed', icon: FileCheck },
    { num: '24+', label: 'Incubated Startups', icon: Rocket },
    { num: '₹65L+', label: 'Seed Grants & Funding', icon: Trophy },
    { num: '4.5★', label: 'MoE IIC Performance Rating', icon: Sparkles }
  ];

  const focusAreas = [
    {
      title: 'Smart IoT & Embedded Systems',
      desc: 'Smart agriculture sensors, automated industrial monitoring, and healthcare devices engineered by ITM students.',
      icon: Cpu,
      badge: 'Hardware Lab'
    },
    {
      title: 'AI, GenAI & Computer Vision',
      desc: 'Autonomous vision inspection, multilingual NLP assistants, and edge AI applications running on dedicated GPU clusters.',
      icon: Zap,
      badge: 'Software Lab'
    },
    {
      title: 'Green Tech & Renewable Energy',
      desc: 'EV battery management systems, solar forecasting models, and sustainable bio-degradable polymer prototypes.',
      icon: Compass,
      badge: 'Clean Tech'
    },
    {
      title: 'Biotech & Pharmaceutical Formulation',
      desc: 'Novel drug delivery systems, natural phytochemical synthesis, and analytical testing by Pharmacy department innovators.',
      icon: Layers,
      badge: 'Pharma Lab'
    }
  ];

  const featuredStartups = [
    {
      name: 'AgriVedic Tech',
      founder: 'Amit Patel (B.Tech CSE 2024)',
      domain: 'Agri-Tech / Drone Analytics',
      desc: 'Autonomous drone crop-spraying and disease prediction algorithms deployed across eastern Uttar Pradesh farms.',
      tag: 'Seed Funded ₹10L'
    },
    {
      name: 'MedPulse Diagnostics',
      founder: 'Dr. Shalini Rai & Riya Singh (B.Pharm)',
      domain: 'Point-of-Care MedTech',
      desc: 'Low-cost rapid biomarker test strip for early detection of kidney dysfunction in rural primary health centers.',
      tag: 'Patent Published'
    },
    {
      name: 'ChargeSphere Solutions',
      founder: 'Vikram Srivastava (B.Tech ME 2023)',
      domain: 'EV Charging Infrastructure',
      desc: 'Smart dynamic load-balancing dual AC-DC rapid charging kiosk designed for tier-2 smart cities.',
      tag: 'Incubated at ITM'
    }
  ];

  const handleIdeaSubmit = (e) => {
    e.preventDefault();
    setIdeaSubmitted(true);
  };

  return (
    <div className="innovation-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><Lightbulb size={14} /> Ministry of Education (MoE) Innovation Cell</span>
          <h1 className="page-header-title">ITM Institutional Innovation Council (IIC)</h1>
          <p className="page-header-desc">
            Catalyzing student entrepreneurship, patent creation, prototype incubation, and competitive hackathons 
            under the National Innovation & Start-up Policy (NISP) framework.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Innovation Cell</span>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="iic-stats-section">
        <div className="container">
          <div className="iic-stats-grid">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="card iic-stat-card">
                  <div className="iic-stat-icon">
                    <Icon size={28} />
                  </div>
                  <div className="iic-stat-data">
                    <span className="iic-num">{s.num}</span>
                    <span className="iic-lbl">{s.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus Pillars */}
      <section className="section iic-focus-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-title">INCUBATION ECOSYSTEM</span>
            <h2 className="section-title">Core Innovation Clusters</h2>
            <div className="gold-separator"></div>
            <p className="section-desc">
              State-of-the-art incubation laboratories equipped with 3D printers, CNC laser cutters, and GPU compute servers.
            </p>
          </div>

          <div className="iic-focus-grid">
            {focusAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card iic-focus-card">
                  <div className="focus-header">
                    <span className="focus-badge">{item.badge}</span>
                    <Icon size={26} className="focus-icon" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="section iic-startups-section">
        <div className="container">
          <div className="section-header-center">
            <span className="sub-title">CAMPUS VENTURES</span>
            <h2 className="section-title">Incubated Student Startups</h2>
            <div className="gold-separator"></div>
            <p className="section-desc">
              From student classroom projects to legally registered, funded enterprises transforming industry problems.
            </p>
          </div>

          <div className="startups-grid">
            {featuredStartups.map((st, idx) => (
              <div key={idx} className="card startup-card">
                <div className="startup-top">
                  <span className="startup-tag">{st.tag}</span>
                  <span className="startup-domain">{st.domain}</span>
                </div>
                <h3>{st.name}</h3>
                <p className="startup-founder"><strong>Founder:</strong> {st.founder}</p>
                <p className="startup-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Idea Form Section */}
      <section className="section iic-submit-section" id="submit-idea">
        <div className="container">
          <div className="card idea-submission-card">
            {ideaSubmitted ? (
              <div className="idea-success-box">
                <CheckCircle2 size={54} color="#10b981" />
                <h3>Project Proposal Received!</h3>
                <p>
                  Your innovation abstract has been queued for evaluation by the ITM Innovation & Incubation Screening Committee. 
                  Shortlisted teams will receive mentor allocation and lab access within 5 working days.
                </p>
                <button 
                  onClick={() => setIdeaSubmitted(false)} 
                  className="btn ss-btn"
                >
                  Submit Another Project Proposal
                </button>
              </div>
            ) : (
              <div>
                <div className="submission-header">
                  <span className="section-tag"><Sparkles size={14} /> Incubation Call 2026-27</span>
                  <h2>Submit Your Startup or Patent Idea</h2>
                  <p>
                    Open to all students & faculty members. Eligible ideas receive up to ₹5,00,000 prototype grants, 
                    legal IPR support, and dedicated workstation space.
                  </p>
                </div>

                <form onSubmit={handleIdeaSubmit} className="idea-form">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Project / Startup Title *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Smart Solar Weed Extractor"
                        value={ideaForm.title}
                        onChange={(e) => setIdeaForm({...ideaForm, title: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Domain / Technology *</label>
                      <select 
                        value={ideaForm.category}
                        onChange={(e) => setIdeaForm({...ideaForm, category: e.target.value})}
                        className="form-select"
                      >
                        <option>AI / Machine Learning</option>
                        <option>Robotics & IoT Automation</option>
                        <option>Green Tech & Renewable Energy</option>
                        <option>Biotechnology & Healthcare</option>
                        <option>Fintech & Web3</option>
                        <option>Consumer Electronics</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Lead Student / Investigator *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Aryan Sharma (B.Tech 3rd Yr)"
                        value={ideaForm.teamLeader}
                        onChange={(e) => setIdeaForm({...ideaForm, teamLeader: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Current Development Stage *</label>
                      <select 
                        value={ideaForm.stage}
                        onChange={(e) => setIdeaForm({...ideaForm, stage: e.target.value})}
                        className="form-select"
                      >
                        <option>Concept / Ideation</option>
                        <option>Proof of Concept (PoC) Ready</option>
                        <option>Working Hardware / Software Prototype</option>
                        <option>Field Tested / Registered Entity</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Contact Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. aryan.innovation@gmail.com"
                        value={ideaForm.email}
                        onChange={(e) => setIdeaForm({...ideaForm, email: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={ideaForm.phone}
                        onChange={(e) => setIdeaForm({...ideaForm, phone: e.target.value})}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '0.5rem' }}>
                    <label className="form-label">Executive Summary & Problem Statement *</label>
                    <textarea 
                      rows="4" 
                      required
                      placeholder="Explain the real-world problem you solve, proposed novel solution, target beneficiaries, and equipment required..."
                      value={ideaForm.summary}
                      onChange={(e) => setIdeaForm({...ideaForm, summary: e.target.value})}
                      className="form-input"
                    ></textarea>
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn ss-btn btn-lg">
                      <Send size={18} />
                      <span>Submit Proposal to Innovation Cell</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
