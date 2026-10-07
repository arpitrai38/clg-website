import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Star, 
  CheckCircle2, 
  GraduationCap, 
  UserCheck, 
  Briefcase, 
  HeartHandshake, 
  Send, 
  Sparkles,
  Award,
  HelpCircle
} from 'lucide-react';
import './Feedback.css';

export default function Feedback() {
  const [stakeholder, setStakeholder] = useState('student');
  const [ratings, setRatings] = useState({
    academics: 5,
    infrastructure: 5,
    facultySupport: 5,
    placementAssistance: 5,
    overallExperience: 5
  });

  const [formData, setFormData] = useState({
    fullName: '',
    emailOrRoll: '',
    department: 'Computer Science & Engineering',
    batchOrYear: '2022-2026',
    suggestions: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [feedbackId, setFeedbackId] = useState('');

  const stakeholderTabs = [
    { id: 'student', label: 'Student Feedback', icon: GraduationCap, desc: 'Curriculum delivery, labs & campus facilities' },
    { id: 'faculty', label: 'Faculty Feedback', icon: UserCheck, desc: 'Academic ambiance, research & governance' },
    { id: 'alumni', label: 'Alumni Feedback', icon: HeartHandshake, desc: 'Career readiness & industry relevance' },
    { id: 'employer', label: 'Employer / Parent', icon: Briefcase, desc: 'Graduate attributes & technical skills' }
  ];

  const ratingCriteria = [
    { key: 'academics', label: 'Quality of Curriculum & Academic Rigor' },
    { key: 'infrastructure', label: 'Laboratories, Library & Smart Classroom Facilities' },
    { key: 'facultySupport', label: 'Mentorship, Faculty Guidance & Accessibility' },
    { key: 'placementAssistance', label: 'Placement Cell & Professional Skill Training' },
    { key: 'overallExperience', label: 'Overall Institutional Satisfaction & Campus Environment' }
  ];

  const handleRatingChange = (key, val) => {
    setRatings(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 'ITM-FB-' + Math.floor(10000 + Math.random() * 90000);
    setFeedbackId(id);
    setSubmitted(true);
  };

  return (
    <div className="feedback-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><MessageSquare size={14} /> Quality Assurance & IQAC</span>
          <h1 className="page-header-title">Institutional Stakeholder Feedback</h1>
          <p className="page-header-desc">
            Your constructive feedback powers continuous academic excellence at ITM Gorakhpur. 
            All submissions are reviewed confidentially by the Internal Quality Assurance Cell (IQAC).
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Feedback Form</span>
          </div>
        </div>
      </section>

      {/* Main Feedback Section */}
      <section className="section feedback-main-section">
        <div className="container">
          {submitted ? (
            <div className="card feedback-success-card">
              <div className="success-icon-wrap">
                <CheckCircle2 size={56} color="#10b981" />
              </div>
              <h2>Thank You for Your Valuable Feedback!</h2>
              <p className="success-sub">
                Your input has been recorded and submitted to the <strong>Internal Quality Assurance Cell (IQAC)</strong> for strategic curriculum and campus enhancement.
              </p>
              <div className="fb-ref-box">
                <span>Feedback Reference Token:</span>
                <strong className="fb-token">{feedbackId}</strong>
              </div>
              <div className="success-actions">
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      emailOrRoll: '',
                      department: 'Computer Science & Engineering',
                      batchOrYear: '2022-2026',
                      suggestions: ''
                    });
                  }} 
                  className="btn ss-btn"
                >
                  Submit Another Feedback
                </button>
                <Link to="/" className="btn btn-outline">Return to Home</Link>
              </div>
            </div>
          ) : (
            <div className="feedback-container-card card">
              {/* Stakeholder Selector */}
              <div className="stakeholder-selector-grid">
                {stakeholderTabs.map(tab => {
                  const Icon = tab.icon;
                  const isActive = stakeholder === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setStakeholder(tab.id)}
                      className={`stakeholder-tab-btn ${isActive ? 'active' : ''}`}
                    >
                      <div className="tab-icon-row">
                        <Icon size={22} />
                        <span className="tab-title">{tab.label}</span>
                      </div>
                      <span className="tab-desc">{tab.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Form */}
              <form onSubmit={handleSubmit} className="fb-form-wrapper">
                <div className="fb-form-header">
                  <h3>Evaluation for {stakeholderTabs.find(t => t.id === stakeholder)?.label}</h3>
                  <p>Please rate each attribute on a scale of 1 to 5 stars (1 = Needs Improvement, 5 = Excellent)</p>
                </div>

                {/* Rating Criteria */}
                <div className="rating-matrix-card">
                  {ratingCriteria.map(item => (
                    <div key={item.key} className="rating-item-row">
                      <span className="criteria-label">{item.label}</span>
                      <div className="stars-row">
                        {[1, 2, 3, 4, 5].map(starNum => (
                          <button
                            type="button"
                            key={starNum}
                            className={`star-btn ${ratings[item.key] >= starNum ? 'filled' : ''}`}
                            onClick={() => handleRatingChange(item.key, starNum)}
                          >
                            <Star size={22} />
                          </button>
                        ))}
                        <span className="rating-score-text">({ratings[item.key]}/5)</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Personal & Department Info */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Priyanshu Srivastava"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      {stakeholder === 'student' ? 'Roll No. or University Roll No. *' : 'Email Address / Contact *'}
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder={stakeholder === 'student' ? 'e.g. 210120010023' : 'e.g. priyanshu@gmail.com'}
                      value={formData.emailOrRoll}
                      onChange={(e) => setFormData({...formData, emailOrRoll: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Department / Branch *</label>
                    <select 
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="form-select"
                    >
                      <option>Computer Science & Engineering</option>
                      <option>Artificial Intelligence & ML</option>
                      <option>Mechanical Engineering</option>
                      <option>Civil Engineering</option>
                      <option>Pharmacy (B.Pharm / D.Pharm)</option>
                      <option>Management Studies (MBA)</option>
                      <option>Applied Science & Humanities</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Academic Year / Batch</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2023-2027 or 2026 Graduating"
                      value={formData.batchOrYear}
                      onChange={(e) => setFormData({...formData, batchOrYear: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <label className="form-label">Detailed Suggestions & Feedback</label>
                  <textarea 
                    rows="4" 
                    placeholder="Share specific suggestions, areas of improvement, or commendable highlights regarding academics, labs, faculty support, or campus amenities..."
                    value={formData.suggestions}
                    onChange={(e) => setFormData({...formData, suggestions: e.target.value})}
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                <div className="fb-submit-row">
                  <button type="submit" className="btn ss-btn btn-lg">
                    <Send size={18} />
                    <span>Submit Official Feedback</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
