import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  Users, 
  Calendar, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { collegeInfo } from '../../utils/mockData';
import './About.css';

export default function About() {
  const milestones = [
    { year: "2001", title: "Foundation in GIDA Gorakhpur", desc: "Established with core B.Tech engineering branches to bring premier technical education to Eastern Uttar Pradesh." },
    { year: "2005", title: "Pharmacy & Management Wing", desc: "Launched B.Pharm under PCI and MBA under UP Technical University (now AKTU)." },
    { year: "2014", title: "High-Tech DELNET Central Library", desc: "Constructed the multi-tier digital library facility housing 40,000+ volumes and international journal archives." },
    { year: "2020", title: "AI, Machine Learning & Cloud Sandbox", desc: "Inaugurated dedicated GPU computing lab and modernized curriculum aligned with Industry 4.0." },
    { year: "2026", title: "25-Year Silver Jubilee & 18,000+ Alumni", desc: "Celebrating a quarter-century of educational leadership with alumni placed in premier tech MNCs worldwide." }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><Building2 size={14} /> Established 2001</span>
          <h1 className="page-header-title">About ITM Gorakhpur</h1>
          <p className="page-header-desc">
            A premier institution dedicated to academic rigor, technical discovery, 
            and ethical leadership for over two and a half decades.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="card vm-card">
              <div className="vm-icon-wrap primary">
                <Target size={28} />
              </div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">
                To emerge as a globally recognized center of excellence in technical, pharmaceutical, 
                and managerial education that inspires innovative thinking, scientific temperament, 
                and social responsibility among young minds.
              </p>
            </div>

            <div className="card vm-card">
              <div className="vm-icon-wrap accent">
                <Compass size={28} />
              </div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">
                To provide state-of-the-art technological laboratories, facilitate rigorous experiential 
                learning, forge dynamic corporate partnerships, and cultivate ethical professionals capable 
                of addressing global societal and industrial challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals and Accreditations Banner */}
      <section className="section bg-subtle-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Accreditations</span>
            <h2 className="section-title">Recognitions & Affiliations</h2>
            <p className="section-desc">
              All academic programs adhere strictly to statutory national benchmarks.
            </p>
          </div>

          <div className="affiliations-cards-grid">
            <div className="card aff-card">
              <ShieldCheck size={36} className="aff-icon" />
              <h4>AICTE New Delhi</h4>
              <p>Approved by All India Council for Technical Education, Ministry of Education, Govt. of India.</p>
            </div>

            <div className="card aff-card">
              <Award size={36} className="aff-icon" />
              <h4>AKTU Lucknow (Code: 120)</h4>
              <p>Affiliated to Dr. A.P.J. Abdul Kalam Technical University for B.Tech, MBA, and MCA degrees.</p>
            </div>

            <div className="card aff-card">
              <ShieldCheck size={36} className="aff-icon" />
              <h4>PCI New Delhi</h4>
              <p>Approved by Pharmacy Council of India for Bachelor of Pharmacy (B.Pharm) and D.Pharm.</p>
            </div>

            <div className="card aff-card">
              <Award size={36} className="aff-icon" />
              <h4>BTEUP Lucknow</h4>
              <p>Affiliated to Board of Technical Education Uttar Pradesh for Polytechnic Diploma programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">25 Years of Institutional Evolution</h2>
          </div>

          <div className="milestones-timeline">
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year-badge">{m.year}</div>
                <div className="card timeline-content-card">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Landmark & Heritage */}
      <section className="section about-campus-showcase-section">
        <div className="container">
          <div className="card about-campus-card">
            <div className="about-campus-grid">
              <div className="about-campus-img-frame">
                <img 
                  src="/images/itm-campus.png" 
                  alt="ITM Gorakhpur 15+ Acre GIDA Campus" 
                  className="about-campus-img"
                />
                <span className="campus-estate-tag">15+ Acre GIDA Campus</span>
              </div>
              <div className="about-campus-info">
                <span className="section-tag">Campus Infrastructure</span>
                <h3>Lush Green Campus on Lucknow-Gorakhpur Highway</h3>
                <p>
                  Situated in Sector-7 GIDA on National Highway 28, the ITM Gorakhpur campus encompasses 
                  over 28,450 square meters of high-tech academic blocks, multi-tier computing labs, 
                  residential hostels, DELNET central library, and manicured green lawns designed for holistic learning.
                </p>
                <div className="campus-mini-stats">
                  <div><strong>10.5+</strong> <span>Acres Land</span></div>
                  <div><strong>28,450</strong> <span>Sq.m Built-up</span></div>
                  <div><strong>650+</strong> <span>Core-i7 PCs</span></div>
                  <div><strong>40,000+</strong> <span>Library Books</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director & Board Message Callout */}
      <section className="section bg-subtle-section" id="directors-message">
        <div className="container">
          <div className="card leadership-message-card">
            <div className="leadership-avatar-col">
              <div className="director-round-frame">
                <img 
                  src="/images/director.png" 
                  alt="Dr. N. K. Singh - Director ITM Gorakhpur" 
                  className="leadership-photo"
                />
              </div>
              <h4>{collegeInfo.directorName}</h4>
              <span className="director-post">{collegeInfo.directorTitle}</span>
              <span className="director-creds">Ph.D, M.Tech (IIT Roorkee)</span>
            </div>
            <div className="leadership-text-col">
              <span className="section-tag">Director's Desk</span>
              <h3>"Empowering Youth Through Technical Mastery & Character"</h3>
              <p>
                "Welcome to the Institute of Technology and Management, Gorakhpur. Over the past 25 years, our mission has been singular: to build an educational haven where curious minds find world-class mentorship, state-of-the-art laboratory infrastructure, and unwavering corporate placement support.
              </p>
              <p>
                As technologies like Artificial Intelligence, Cloud Infrastructure, and Biopharmaceuticals reshape our global landscape, ITM continues to evolve its curriculum, ensuring our graduates are not just job seekers, but high-impact problem solvers."
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/admissions" className="btn ss-btn">
                  <span>Join the ITM Community &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
