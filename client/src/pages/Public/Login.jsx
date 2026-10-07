import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ShieldCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  User, 
  Key, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './Login.css';

export default function Login() {
  const { login, user } = useData();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('student'); // 'student' or 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'admin') {
      login('admin', { email: email || 'admin@itmgkp.edu.in' });
      navigate('/admin');
    } else {
      login('student', { 
        email: email || 'student@itmgkp.edu.in',
        rollNo: rollNo || '220120010045'
      });
      navigate('/student');
    }
  };

  const handleQuickDemoLogin = (role) => {
    login(role);
    navigate(role === 'admin' ? '/admin' : '/student');
  };

  return (
    <div className="login-page">
      <div className="container login-container">
        <div className="card login-card">
          <div className="login-header">
            <div className="login-brand-crest">
              <GraduationCap size={32} />
            </div>
            <h2>ITM Campus Portal</h2>
            <p>Access your academic records, notices, and institutional dashboards</p>
          </div>

          {/* Quick Demo Access Bar */}
          <div className="demo-credentials-banner">
            <span className="demo-badge">
              <Sparkles size={13} /> ONE-CLICK TEST LOGINS
            </span>
            <div className="demo-buttons-row">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('admin')}
                className="btn btn-primary btn-sm demo-btn"
              >
                <ShieldCheck size={14} /> Login as Administrator
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('student')}
                className="btn btn-outline btn-sm demo-btn"
              >
                <User size={14} /> Login as Student
              </button>
            </div>
          </div>

          <div className="login-tab-switcher">
            <button
              className={`login-tab ${activeTab === 'student' ? 'active' : ''}`}
              onClick={() => setActiveTab('student')}
            >
              <User size={16} /> Student Portal
            </button>
            <button
              className={`login-tab ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
            >
              <ShieldCheck size={16} /> Administrative Portal
            </button>
          </div>

          <form onSubmit={handleManualSubmit} className="login-form">
            {activeTab === 'student' ? (
              <>
                <div className="form-group">
                  <label className="form-label">AKTU Roll Number / Student ID</label>
                  <div className="input-with-icon">
                    <User size={18} className="field-icon" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., 220120010045"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Portal Password / DOB</label>
                  <div className="input-with-icon">
                    <Lock size={18} className="field-icon" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label">Official ITM Email</label>
                  <div className="input-with-icon">
                    <Mail size={18} className="field-icon" />
                    <input
                      type="email"
                      required
                      placeholder="admin@itmgkp.edu.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Admin Security Key / Password</label>
                  <div className="input-with-icon">
                    <Key size={18} className="field-icon" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="btn btn-accent btn-lg login-submit-btn">
              <span>Sign In to {activeTab === 'admin' ? 'Admin Desk' : 'Student Desk'}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="login-footer-info">
            <p>Protected by AKTU Central Identity Governance.</p>
            <Link to="/grievance" className="login-help-link">
              Trouble logging in? Contact GRS Helpline &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
