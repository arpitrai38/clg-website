import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Bell, 
  ShieldAlert, 
  CheckCircle2, 
  PlusCircle, 
  Trash2, 
  LogOut, 
  Calendar, 
  Search, 
  Eye, 
  Send,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const { 
    user, 
    logout, 
    inquiries, 
    updateInquiryStatus, 
    notices, 
    addNotice, 
    deleteNotice, 
    grievances, 
    updateGrievanceStatus 
  } = useData();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries', 'notices', 'grievances'

  // New Notice Form State
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Academic',
    summary: '',
    isUrgent: false
  });
  const [noticeSuccess, setNoticeSuccess] = useState('');

  // Selected Grievance for Resolution
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [resolutionStatus, setResolutionStatus] = useState('Resolved');
  const [resolutionNote, setResolutionNote] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleCreateNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title) return;
    addNotice(newNotice);
    setNoticeSuccess('Circular published successfully!');
    setNewNotice({ title: '', category: 'Academic', summary: '', isUrgent: false });
    setTimeout(() => setNoticeSuccess(''), 3000);
  };

  const handleSaveResolution = (e) => {
    e.preventDefault();
    if (!selectedGrievance) return;
    updateGrievanceStatus(selectedGrievance.id, resolutionStatus, resolutionNote);
    setSelectedGrievance(null);
    setResolutionNote('');
  };

  return (
    <div className="admin-dashboard-page">
      {/* Top Admin Header Bar */}
      <div className="admin-topbar">
        <div className="container admin-topbar-inner">
          <div className="admin-branding">
            <span className="badge badge-accent">ADMIN DESK</span>
            <h2>ITM Gorakhpur Administration Portal</h2>
          </div>
          <div className="admin-user-info">
            <div className="admin-avatar">A</div>
            <div>
              <span className="admin-name">{user?.name || 'Administrator'}</span>
              <span className="admin-role">Registrar & IT Officer</span>
            </div>
            <button onClick={handleLogout} className="btn btn-outline btn-sm logout-btn">
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="container admin-main-container">
        {/* KPI Metric Overview */}
        <div className="admin-kpi-grid">
          <div className="card admin-kpi-card" onClick={() => setActiveTab('inquiries')}>
            <div className="kpi-icon-wrap blue">
              <Users size={24} />
            </div>
            <div>
              <span className="kpi-number">{inquiries.length}</span>
              <span className="kpi-label">Admission Applications</span>
            </div>
          </div>

          <div className="card admin-kpi-card" onClick={() => setActiveTab('notices')}>
            <div className="kpi-icon-wrap amber">
              <Bell size={24} />
            </div>
            <div>
              <span className="kpi-number">{notices.length}</span>
              <span className="kpi-label">Published Circulars</span>
            </div>
          </div>

          <div className="card admin-kpi-card" onClick={() => setActiveTab('grievances')}>
            <div className="kpi-icon-wrap rose">
              <ShieldAlert size={24} />
            </div>
            <div>
              <span className="kpi-number">
                {grievances.filter(g => g.status !== 'Resolved').length}
              </span>
              <span className="kpi-label">Pending Grievances</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="admin-nav-tabs">
          <button
            className={`admin-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <Users size={16} /> Admission Enquiries ({inquiries.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'notices' ? 'active' : ''}`}
            onClick={() => setActiveTab('notices')}
          >
            <Bell size={16} /> Notice Publisher ({notices.length})
          </button>
          <button
            className={`admin-tab-btn ${activeTab === 'grievances' ? 'active' : ''}`}
            onClick={() => setActiveTab('grievances')}
          >
            <ShieldAlert size={16} /> Grievance Redressal Board ({grievances.length})
          </button>
        </div>

        {/* TAB 1: ADMISSION INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="admin-tab-content">
            <div className="content-box-header">
              <div>
                <h3>Student Admission Leads & Applications</h3>
                <p>Manage prospective students who applied through the online portal</p>
              </div>
            </div>

            <div className="table-responsive card">
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Candidate</th>
                    <th>Course Applied</th>
                    <th>Qualification</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq) => (
                    <tr key={inq.id}>
                      <td className="font-mono">{inq.id}</td>
                      <td>
                        <div className="applicant-cell">
                          <strong>{inq.fullName}</strong>
                          <span className="sub-text">{inq.email} | {inq.phone}</span>
                        </div>
                      </td>
                      <td>{inq.courseName || inq.course}</td>
                      <td>{inq.qualification}</td>
                      <td>{inq.date}</td>
                      <td>
                        <span className={`badge ${
                          inq.status === 'Verified' ? 'badge-success' :
                          inq.status === 'Contacted' ? 'badge-primary' : 'badge-accent'
                        }`}>
                          {inq.status}
                        </span>
                      </td>
                      <td>
                        <select
                          value={inq.status}
                          onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                          className="status-selector-sm"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Verified">Verified</option>
                          <option value="Enrolled">Enrolled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: NOTICE PUBLISHER */}
        {activeTab === 'notices' && (
          <div className="admin-tab-content">
            <div className="grid-two-col">
              {/* Add New Notice Form */}
              <div className="card publish-notice-card">
                <h3>Publish Academic Circular</h3>
                <p>This will be immediately visible to all students on the public Notice Board</p>

                {noticeSuccess && (
                  <div className="alert-notice glass-panel" style={{ margin: '1rem 0' }}>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>{noticeSuccess}</span>
                  </div>
                )}

                <form onSubmit={handleCreateNotice} style={{ marginTop: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Notice Subject / Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., AKTU Odd Semester Practical Exams Timetable"
                      value={newNotice.title}
                      onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                      value={newNotice.category}
                      onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                      className="form-select"
                    >
                      <option value="Academic">Academic</option>
                      <option value="Examination">Examination</option>
                      <option value="Placement">Placement</option>
                      <option value="Scholarship">Scholarship</option>
                      <option value="Events">Events</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Detailed Summary *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Brief description and student instructions..."
                      value={newNotice.summary}
                      onChange={(e) => setNewNotice({ ...newNotice, summary: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={newNotice.isUrgent}
                        onChange={(e) => setNewNotice({ ...newNotice, isUrgent: e.target.checked })}
                      />
                      <span>Mark as Urgent Circular (Pulsing Red Tag)</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <PlusCircle size={16} /> Publish Circular Now
                  </button>
                </form>
              </div>

              {/* Active Notices List */}
              <div className="card active-notices-admin-card">
                <h3>Current Active Circulars ({notices.length})</h3>
                <div className="admin-notices-scroll">
                  {notices.map((n) => (
                    <div key={n.id} className="admin-notice-item">
                      <div className="notice-item-top">
                        <span className="badge badge-primary">{n.category}</span>
                        {n.isUrgent && <span className="badge badge-rose">Urgent</span>}
                        <span className="notice-item-date">{n.date}</span>
                      </div>
                      <h4 className="notice-item-title">{n.title}</h4>
                      <p className="notice-item-desc">{n.summary}</p>
                      <div className="notice-item-actions">
                        <button
                          onClick={() => deleteNotice(n.id)}
                          className="delete-notice-btn"
                          title="Delete notice"
                        >
                          <Trash2 size={14} /> Remove Circular
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GRIEVANCE REDRESSAL DESK */}
        {activeTab === 'grievances' && (
          <div className="admin-tab-content">
            <div className="content-box-header">
              <div>
                <h3>Student Grievance Redressal Board</h3>
                <p>Inspect grievances lodged by students and update resolution findings</p>
              </div>
            </div>

            <div className="table-responsive card">
              <table className="admin-data-table">
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Student & Roll</th>
                    <th>Category</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {grievances.map((gr) => (
                    <tr key={gr.id}>
                      <td className="font-mono font-bold">{gr.id}</td>
                      <td>
                        <strong>{gr.studentName}</strong>
                        <div className="sub-text">{gr.rollNo} • {gr.department}</div>
                      </td>
                      <td>{gr.category}</td>
                      <td>{gr.subject}</td>
                      <td>{gr.date}</td>
                      <td>
                        <span className={`badge ${
                          gr.status === 'Resolved' ? 'badge-success' :
                          gr.status === 'In Review' ? 'badge-accent' : 'badge-rose'
                        }`}>
                          {gr.status}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            setSelectedGrievance(gr);
                            setResolutionStatus(gr.status);
                            setResolutionNote(gr.response || '');
                          }}
                          className="btn btn-outline btn-sm"
                        >
                          Inspect & Resolve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Resolution Modal */}
            {selectedGrievance && (
              <div className="modal-overlay" onClick={() => setSelectedGrievance(null)}>
                <div className="card modal-content-box" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-body-padding">
                    <span className="badge badge-accent">Ticket: {selectedGrievance.id}</span>
                    <h3 className="modal-title">{selectedGrievance.subject}</h3>
                    
                    <div className="ticket-meta-grid" style={{ margin: '1rem 0' }}>
                      <div>
                        <span className="meta-lbl">Student:</span>
                        <span className="meta-val">{selectedGrievance.studentName} ({selectedGrievance.rollNo})</span>
                      </div>
                      <div>
                        <span className="meta-lbl">Department:</span>
                        <span className="meta-val">{selectedGrievance.department}</span>
                      </div>
                    </div>

                    <div className="ticket-desc-box" style={{ marginBottom: '1.25rem' }}>
                      <strong>Issue Details:</strong>
                      <p>{selectedGrievance.description}</p>
                    </div>

                    <form onSubmit={handleSaveResolution}>
                      <div className="form-group">
                        <label className="form-label">Update Grievance Status:</label>
                        <select
                          value={resolutionStatus}
                          onChange={(e) => setResolutionStatus(e.target.value)}
                          className="form-select"
                        >
                          <option value="In Review">In Review (Under Investigation)</option>
                          <option value="Resolved">Resolved (Action Finalized)</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Official Committee Response / Resolution Remarks:</label>
                        <textarea
                          rows={3}
                          required
                          value={resolutionNote}
                          onChange={(e) => setResolutionNote(e.target.value)}
                          placeholder="State actions taken by Proctorial / Departmental Board..."
                          className="form-textarea"
                        />
                      </div>

                      <div className="modal-footer-btns">
                        <button
                          type="button"
                          onClick={() => setSelectedGrievance(null)}
                          className="btn btn-outline"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Update Redressal Record
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
