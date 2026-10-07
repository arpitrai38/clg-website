import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Briefcase, 
  Award, 
  Building2, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Mail,
  GraduationCap
} from 'lucide-react';
import { recruitersData, alumniTestimonials, collegeInfo } from '../../utils/mockData';
import './Placements.css';

export default function Placements() {
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = ['All', 'IT Services', 'Product / E-commerce', 'Pharmaceuticals', 'Consulting', 'FinTech', 'Technology'];

  const filteredRecruiters = selectedSector === 'All'
    ? recruitersData
    : recruitersData.filter(r => r.sector.toLowerCase().includes(selectedSector.toLowerCase()));

  return (
    <div className="placements-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><TrendingUp size={14} /> Training & Placement Cell</span>
          <h1 className="page-header-title">Career Opportunities & Corporate Placements</h1>
          <p className="page-header-desc">
            Bridging talent and corporate requirements through continuous industry collaboration, 
            technical hackathons, aptitude bootcamps, and high-impact recruitment drives.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Placements</span>
          </div>
        </div>
      </section>

      {/* Placement Numbers Ribbon */}
      <section className="section placement-stats-section">
        <div className="container">
          <div className="placement-metrics-grid">
            <div className="card metric-card">
              <span className="metric-badge">Highest CTC</span>
              <h3 className="metric-val">{collegeInfo.stats.highestPackage}</h3>
              <p className="metric-caption">Amazon & Tier-1 Tech Offers</p>
            </div>

            <div className="card metric-card">
              <span className="metric-badge">Average CTC</span>
              <h3 className="metric-val">{collegeInfo.stats.averagePackage}</h3>
              <p className="metric-caption">Across Engineering & MBA batches</p>
            </div>

            <div className="card metric-card">
              <span className="metric-badge">Placement Success</span>
              <h3 className="metric-val">{collegeInfo.stats.placementRate}</h3>
              <p className="metric-caption">Of eligible and registered graduates</p>
            </div>

            <div className="card metric-card">
              <span className="metric-badge">Corporate Recruiters</span>
              <h3 className="metric-val">{collegeInfo.stats.activeRecruiters}</h3>
              <p className="metric-caption">National & Fortune-500 brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters Directory */}
      <section className="section bg-subtle-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Corporate Network</span>
            <h2 className="section-title">Prominent Recruiting Partners</h2>
            <p className="section-desc">
              Companies that consistently visit our GIDA Gorakhpur campus for engineering, computer applications, pharmacy, and management talent.
            </p>
          </div>

          {/* Sector Pills */}
          <div className="filter-tabs">
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`tab-btn ${selectedSector === sec ? 'active' : ''}`}
              >
                {sec}
              </button>
            ))}
          </div>

          <div className="recruiters-grid">
            {filteredRecruiters.map((rec, i) => (
              <div key={i} className="card recruiter-tile">
                <div className="rec-tile-header">
                  <div className="company-logo-avatar">
                    <Building2 size={24} />
                  </div>
                  <div className="rec-tile-info">
                    <h4 className="rec-company-name">{rec.name}</h4>
                    <span className="rec-sector-badge">{rec.sector}</span>
                  </div>
                </div>

                <div className="rec-tile-footer">
                  <span className="pkg-label">Offered Package:</span>
                  <span className="pkg-val">{rec.package}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Year Career Readiness Program */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Career Acceleration Roadmap</span>
            <h2 className="section-title">From First Year to Dream Placement</h2>
            <p className="section-desc">
              How ITM Gorakhpur prepares students systematically across all four academic years.
            </p>
          </div>

          <div className="roadmap-grid">
            <div className="card roadmap-card">
              <div className="roadmap-phase">Phase 01 • Year 1</div>
              <h4>Foundations & Soft Skills</h4>
              <ul className="roadmap-list">
                <li><CheckCircle2 size={14} className="hl-check" /> English Communication & Debate Workshops</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Fundamentals of Programming & Quantitative Aptitude</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Industry orientation and corporate guest lectures</li>
              </ul>
            </div>

            <div className="card roadmap-card">
              <div className="roadmap-phase">Phase 02 • Year 2</div>
              <h4>Core Engineering & Coding Sprints</h4>
              <ul className="roadmap-list">
                <li><CheckCircle2 size={14} className="hl-check" /> Data Structures & Algorithms on LeetCode/CodeChef</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Full-Stack Development and AI Sandbox mini-projects</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Industrial visits to manufacturing & IT centers</li>
              </ul>
            </div>

            <div className="card roadmap-card">
              <div className="roadmap-phase">Phase 03 • Year 3</div>
              <h4>Internships & Real-world Capstones</h4>
              <ul className="roadmap-list">
                <li><CheckCircle2 size={14} className="hl-check" /> Summer corporate internship assistance</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Pre-Placement Training (PPT) & Group Discussion drills</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Mock Technical interviews by corporate alumni</li>
              </ul>
            </div>

            <div className="card roadmap-card">
              <div className="roadmap-phase">Phase 04 • Year 4</div>
              <h4>Campus Drives & Final Conversion</h4>
              <ul className="roadmap-list">
                <li><CheckCircle2 size={14} className="hl-check" /> On-campus recruitment drives & online assessments</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Multiple offer opportunities with Tier-1 and Tier-2 firms</li>
                <li><CheckCircle2 size={14} className="hl-check" /> Post-selection onboarding guidance and transition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="section bg-subtle-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Alumni Spotlight</span>
            <h2 className="section-title">Where ITM Alumni Shine Today</h2>
          </div>

          <div className="testimonials-grid">
            {alumniTestimonials.map((t, idx) => (
              <div key={idx} className="card testimonial-card">
                <p className="testimonial-quote">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-role">{t.role}</p>
                    <span className="author-batch">{t.batch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T&P Office Contact Banner */}
      <section className="section">
        <div className="container glass-panel tp-contact-box">
          <div className="tp-left">
            <Briefcase size={36} className="tp-icon" />
            <div>
              <h3>Corporate Inquiries & Placement Invitation</h3>
              <p>Are you a corporate recruiter looking to conduct on-campus or virtual recruitment drives at ITM Gorakhpur?</p>
            </div>
          </div>
          <div className="tp-actions">
            <a href="mailto:placement@itmgkp.edu.in" className="btn btn-primary">
              <Mail size={16} /> Contact T&P Cell
            </a>
            <Link to="/admissions" className="btn btn-accent">
              Apply For Admission 2026-27
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
