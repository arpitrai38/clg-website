import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  Calendar, 
  FileText, 
  Download, 
  ExternalLink, 
  AlertCircle,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './Notices.css';

export default function Notices() {
  const { notices } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadMsg, setDownloadMsg] = useState('');

  const categories = ['All', 'Academic', 'Examination', 'Placement', 'Scholarship', 'Events'];

  const filteredNotices = notices.filter((n) => {
    const matchesCat = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesQuery = 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleDownload = (title) => {
    setDownloadMsg(`Official circular for "${title}" downloaded.`);
    setTimeout(() => setDownloadMsg(''), 3000);
  };

  return (
    <div className="notices-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><Bell size={14} /> Official Circulars</span>
          <h1 className="page-header-title">Notice Board & Academic Bulletins</h1>
          <p className="page-header-desc">
            Stay updated with real-time notifications on AKTU university examinations, 
            placement drives, state scholarships, and campus events.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Circulars & Notices</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {downloadMsg && (
            <div className="alert-notice glass-panel" style={{ marginBottom: '1.5rem' }}>
              <CheckCircle2 size={18} className="text-emerald" />
              <span>{downloadMsg}</span>
            </div>
          )}

          {/* Search & Filter Bar */}
          <div className="notices-filter-bar">
            <div className="notices-search">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search circulars by subject, keyword, or datesheet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="notices-input"
              />
            </div>

            <div className="notices-pills">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`notice-pill ${selectedCategory === c ? 'active' : ''}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Notices List */}
          <div className="notices-list-container">
            {filteredNotices.map((notice) => (
              <div key={notice.id} className="card notice-row-card">
                <div className="notice-row-left">
                  <div className="notice-date-badge">
                    <Calendar size={14} />
                    <span>{notice.date}</span>
                  </div>
                  <div className="notice-tags-row">
                    <span className="badge badge-primary">{notice.category}</span>
                    {notice.isUrgent && (
                      <span className="badge badge-rose">
                        <AlertCircle size={12} /> Urgent Circular
                      </span>
                    )}
                  </div>
                </div>

                <div className="notice-row-content">
                  <h3 className="notice-row-title">{notice.title}</h3>
                  <p className="notice-row-summary">{notice.summary}</p>
                </div>

                <div className="notice-row-action">
                  <button
                    onClick={() => handleDownload(notice.title)}
                    className="btn btn-outline btn-sm"
                  >
                    <Download size={14} /> Download PDF
                  </button>
                </div>
              </div>
            ))}

            {filteredNotices.length === 0 && (
              <div className="glass-panel no-notices-card">
                <Bell size={40} className="empty-icon" />
                <h3>No circulars matching your filter</h3>
                <p>Try resetting the category filter or searching with different keywords.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="btn btn-primary btn-sm"
                >
                  Reset Notice Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
