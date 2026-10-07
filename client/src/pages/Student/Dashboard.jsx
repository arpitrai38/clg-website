import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Award, 
  FileText, 
  Download, 
  CheckCircle2, 
  LogOut, 
  ShieldAlert, 
  Calendar,
  CreditCard,
  Building
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './StudentDashboard.css';

export default function StudentDashboard() {
  const { user, logout, grievances } = useData();
  const navigate = useNavigate();

  const [downloadNote, setDownloadNote] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleDownload = (doc) => {
    setDownloadNote(`Generated official ${doc}. PDF downloaded.`);
    setTimeout(() => setDownloadNote(''), 3500);
  };

  // Student specific grievances
  const myGrievances = grievances.filter(
    (g) => g.rollNo === (user?.rollNo || '220120010045')
  );

  return (
    <div className="student-dashboard-page">
      {/* Top Banner with Student Info */}
      <div className="student-hero-banner">
        <div className="container student-banner-inner">
          <div className="student-profile-left">
            <div className="student-avatar-crest">
              <GraduationCap size={36} />
            </div>
            <div>
              <span className="badge badge-accent">AKTU ENROLLED</span>
              <h2 className="student-name">{user?.name || 'Rahul Tiwari'}</h2>
              <div className="student-meta-sub">
                <span>Roll No: <strong>{user?.rollNo || '220120010045'}</strong></span>
                <span>•</span>
                <span>{user?.department || 'B.Tech CSE - Final Year'}</span>
                <span>•</span>
                <span>AKTU Code: 120</span>
              </div>
            </div>
          </div>

          <div className="student-actions-right">
            <button onClick={handleLogout} className="btn btn-outline-white btn-sm">
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="container student-content-container">
        {downloadNote && (
          <div className="alert-notice glass-panel" style={{ margin: '1.5rem 0' }}>
            <CheckCircle2 size={16} className="text-emerald" />
            <span>{downloadNote}</span>
          </div>
        )}

        {/* Quick Academic Stats */}
        <div className="student-stats-row">
          <div className="card student-stat-card">
            <span className="stat-caption">Cumulative CGPA</span>
            <span className="stat-highlight">8.42</span>
            <span className="stat-sub">AKTU University Grade: Outstanding</span>
          </div>

          <div className="card student-stat-card">
            <span className="stat-caption">Biometric Attendance</span>
            <span className="stat-highlight">88.5%</span>
            <span className="stat-sub">Eligible for end-semester examinations</span>
          </div>

          <div className="card student-stat-card">
            <span className="stat-caption">Fee Clearance</span>
            <span className="stat-highlight text-emerald">Verified</span>
            <span className="stat-sub">Session 2026-27 Dues Cleared</span>
          </div>

          <div className="card student-stat-card">
            <span className="stat-caption">Hostel Accommodation</span>
            <span className="stat-highlight">Block B-204</span>
            <span className="stat-sub">Boys Hostel • Resident</span>
          </div>
        </div>

        <div className="grid-two-col" style={{ marginTop: '2rem' }}>
          {/* Column 1: Academic Downloads & Exam Schedule */}
          <div className="card student-action-card">
            <div className="action-card-header">
              <BookOpen size={20} className="header-icon" />
              <h3>Academic Credentials & Examination Desk</h3>
            </div>

            <div className="docs-list">
              <div className="doc-row">
                <div>
                  <h4>AKTU Even Semester Examination Admit Card</h4>
                  <p>Examination Center: ITM Gorakhpur Campus (Code: 120)</p>
                </div>
                <button
                  onClick={() => handleDownload('Admit Card')}
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} /> Download
                </button>
              </div>

              <div className="doc-row">
                <div>
                  <h4>Official Fee Receipt & Clearance Certificate</h4>
                  <p>Transaction ID: ITM-FEE-2026-9921</p>
                </div>
                <button
                  onClick={() => handleDownload('Fee Receipt')}
                  className="btn btn-outline btn-sm"
                >
                  <Download size={14} /> Receipt
                </button>
              </div>

              <div className="doc-row">
                <div>
                  <h4>Academic Syllabus & Lab Guidelines</h4>
                  <p>7th Semester CSE (AI & Data Science Stream)</p>
                </div>
                <button
                  onClick={() => handleDownload('Semester Curriculum')}
                  className="btn btn-outline btn-sm"
                >
                  <Download size={14} /> PDF
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: My Lodged Grievance Status */}
          <div className="card student-action-card">
            <div className="action-card-header">
              <ShieldAlert size={20} className="header-icon" />
              <h3>My Grievances & Status Timeline</h3>
            </div>

            <div className="student-grievance-list">
              {myGrievances.length > 0 ? (
                myGrievances.map((g) => (
                  <div key={g.id} className="student-gr-item">
                    <div className="gr-item-top">
                      <span className="font-mono font-bold">{g.id}</span>
                      <span className={`badge ${
                        g.status === 'Resolved' ? 'badge-success' :
                        g.status === 'In Review' ? 'badge-accent' : 'badge-rose'
                      }`}>
                        {g.status}
                      </span>
                    </div>

                    <h4 className="gr-item-title">{g.subject}</h4>
                    <p className="gr-item-category">{g.category} • Filed on {g.date}</p>

                    {g.response && (
                      <div className="gr-admin-response">
                        <strong>Redressal Remark:</strong>
                        <p>{g.response}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-grievance-box">
                  <CheckCircle2 size={32} className="text-emerald" />
                  <p>You have no active unresolved grievances.</p>
                </div>
              )}
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <Link to="/grievance" className="btn btn-outline btn-sm">
                Lodge a New Grievance with GRS &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
