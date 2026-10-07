import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  ExternalLink,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { collegeInfo } from '../utils/mockData';
import './Footer.css';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="footer-root">
      {/* Pre-Footer Action Banner */}
      <div className="footer-cta-banner">
        <div className="container footer-cta-inner">
          <div className="cta-text">
            <h3>Ready to Shape Your Career with ITM Gorakhpur?</h3>
            <p>Admissions for Academic Session 2026-27 are now open. Speak to our counsellors today.</p>
          </div>
          <div className="cta-actions">
            <Link to="/admissions" className="btn btn-accent btn-lg">
              Apply For Admission 2026
            </Link>
            <a href="tel:+919415210052" className="btn btn-outline-white btn-lg">
              <Phone size={18} /> Helpline: +91 94152 10052
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Column 1: About Institution */}
          <div className="footer-col about-col">
            <div className="footer-brand">
              <div className="footer-logo-crest">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="footer-brand-title">ITM GORAKHPUR</h4>
                <p className="footer-brand-sub">Institute of Technology & Management</p>
              </div>
            </div>

            <p className="footer-about-text">
              Established in 2001, ITM Gorakhpur is eastern Uttar Pradesh's leading technical and professional education campus, nurturing future leaders in Engineering, Pharmacy, and Management.
            </p>

            <div className="accreditation-tags">
              <span className="badge badge-primary"><ShieldCheck size={14} /> AICTE Approved</span>
              <span className="badge badge-accent"><ShieldCheck size={14} /> AKTU Code: 120</span>
              <span className="badge badge-success"><ShieldCheck size={14} /> PCI Approved</span>
              <span className="badge badge-primary"><ShieldCheck size={14} /> BTEUP Lucknow</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h5 className="footer-col-title">Quick Links</h5>
            <ul className="footer-links-list">
              <li><Link to="/about">About Institute & Vision</Link></li>
              <li><Link to="/academics">Programs & Departments</Link></li>
              <li><Link to="/admissions">Admissions & Eligibility</Link></li>
              <li><Link to="/payment">💳 Online Fee Payment</Link></li>
              <li><Link to="/innovation-cell">💡 Innovation Cell (IIC)</Link></li>
              <li><Link to="/placements">Placement Records</Link></li>
              <li><Link to="/grievance">Grievance Redressal (GRS)</Link></li>
              <li><Link to="/feedback">📝 Stakeholder Feedback</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="footer-col">
            <h5 className="footer-col-title">Academics</h5>
            <ul className="footer-links-list">
              <li><Link to="/academics?cat=Engineering">B.Tech Computer Science & Engg</Link></li>
              <li><Link to="/academics?cat=Engineering">B.Tech Artificial Intelligence & ML</Link></li>
              <li><Link to="/academics?cat=Engineering">B.Tech Data Science</Link></li>
              <li><Link to="/academics?cat=Pharmacy">Bachelor of Pharmacy (B.Pharm)</Link></li>
              <li><Link to="/academics?cat=Pharmacy">Diploma in Pharmacy (D.Pharm)</Link></li>
              <li><Link to="/academics?cat=Management">Master of Business Admin (MBA)</Link></li>
              <li><Link to="/academics?cat=Computer Applications">BCA & MCA Programs</Link></li>
              <li><Link to="/academics?cat=Diploma">Polytechnic Engineering Diploma</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col">
            <h5 className="footer-col-title">Campus Contact</h5>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>{collegeInfo.address}</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>{collegeInfo.phone} / {collegeInfo.alternatePhone}</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>{collegeInfo.email}</span>
              </div>
              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>

            <div className="newsletter-box">
              <p className="newsletter-label">Subscribe to Admission & Exam Alerts</p>
              {subscribed ? (
                <div className="subscribe-success">
                  <CheckCircle2 size={16} /> Subscribed to ITM Alerts!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} Institute of Technology & Management (ITM Gorakhpur). All Rights Reserved.
          </p>
          <div className="footer-compliance-links">
            <Link to="/mandatory-disclosure">Mandatory Disclosure</Link>
            <span>•</span>
            <Link to="/aicte-approvals">AICTE Approvals</Link>
            <span>•</span>
            <Link to="/bog">Board of Governors</Link>
            <span>•</span>
            <Link to="/audit-report">Audit Reports</Link>
            <span>•</span>
            <Link to="/service-book">Service Book</Link>
            <span>•</span>
            <Link to="/grievance">Grievance</Link>
            <span>•</span>
            <a href="https://aktu.ac.in" target="_blank" rel="noreferrer" className="external-partner">
              AKTU Portal <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
