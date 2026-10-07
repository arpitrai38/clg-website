import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Search, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronRight,
  GraduationCap, 
  Menu, 
  X, 
  User,
  ShieldAlert,
  Calendar,
  BookOpen,
  LogIn,
  Sparkles
} from 'lucide-react';
import { useData } from '../context/DataContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useData();
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSub, setMobileExpandedSub] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSub(null);
  }, [location.pathname]);

  const navMenuItems = [
    {
      label: 'Home',
      path: '/',
      hasSub: true,
      subItems: [
        { label: 'Campus Main Overview', path: '/' },
        { label: 'Admissions 2026-27 Highlights', path: '/admissions' },
        { label: 'Placements & Corporate Drives', path: '/placements' }
      ]
    },
    {
      label: 'About ITM',
      path: '/about',
      hasSub: true,
      subItems: [
        { label: 'Institutional Profile & Legacy', path: '/about' },
        { label: 'Vision, Mission & Core Values', path: '/about' },
        { label: 'Director & Leadership Message', path: '/about' },
        { label: 'Statutory Affiliations (AKTU/PCI)', path: '/about' },
        { label: '25-Year Silver Jubilee Milestones', path: '/about' }
      ]
    },
    {
      label: 'Academics',
      path: '/academics',
      hasSub: true,
      subItems: [
        { label: 'All Curricula & Programs', path: '/academics' },
        { label: 'B.Tech - Computer Science & AI', path: '/academics?cat=Engineering' },
        { label: 'B.Tech - Mechanical & Civil', path: '/academics?cat=Engineering' },
        { label: 'Bachelor of Pharmacy (B.Pharm)', path: '/academics?cat=Pharmacy' },
        { label: 'Master of Business Admin (MBA)', path: '/academics?cat=Management' },
        { label: 'BCA & MCA Computing Sandbox', path: '/academics?cat=Computer Applications' },
        { label: 'Polytechnic Diploma Engineering', path: '/academics?cat=Diploma' }
      ]
    },
    {
      label: 'Apply Online',
      path: '/admissions',
      hasSub: true,
      subItems: [
        { label: '✍ Online Application Form 2026-27', path: '/admissions#apply-online-form' },
        { label: '💰 Interactive Fee & Scholarship Estimator', path: '/admissions' },
        { label: '📋 Eligibility Criteria & Seat Matrix', path: '/admissions' },
        { label: '🎓 Merit Scholarships & Fee Waivers', path: '/admissions' }
      ]
    },
    {
      label: 'Placements',
      path: '/placements',
      hasSub: true,
      subItems: [
        { label: 'Placement Records & ₹18.5 LPA CTC', path: '/placements' },
        { label: 'Top 120+ Recruiting Partners', path: '/placements' },
        { label: '4-Year Training & Bootcamps', path: '/placements' },
        { label: 'Contact T&P Cell Desk', path: '/placements' }
      ]
    },
    {
      label: 'Campus Life',
      path: '/campus-life',
      hasSub: true,
      subItems: [
        { label: '15-Acre GIDA Campus Tour', path: '/campus-life' },
        { label: 'DELNET Central High-Tech Library', path: '/campus-life' },
        { label: 'Boys & Girls Residential Hostels', path: '/campus-life' },
        { label: 'Clubs, Tech-Fests & Sports Meet', path: '/campus-life' }
      ]
    },
    {
      label: 'Notices',
      path: '/notices',
      hasSub: false
    },
    {
      label: 'Others',
      path: '/governance',
      hasSub: true,
      subItems: [
        { label: 'Grievance', path: '/grievance' },
        { label: 'Innovation Cell', path: '/innovation-cell' },
        { label: 'AICTE Approval Letter', path: '/aicte-approvals' },
        { label: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
        { label: 'Payment', path: '/payment' },
        { label: 'Service Book', path: '/service-book' },
        { label: 'Audit Report', path: '/audit-report' },
        { label: 'BOG', path: '/bog' },
        { label: 'Feedback Form', path: '/feedback' }
      ]
    },
    {
      label: 'Contact',
      path: '/contact',
      hasSub: false
    }
  ];

  const toggleMobileSub = (idx) => {
    setMobileExpandedSub(prev => prev === idx ? null : idx);
  };

  return (
    <header className="eudaimonia-header">
      {/* =========================================================================
          1. HEADER TOP (Deep Wine Background #641320)
          ========================================================================= */}
      <div className="header-top second-header">
        <div className="container header-container">
          <div className="header-top-inner">
            {/* Left Quick Links */}
            <div className="header-cta left-cta">
              <ul>
                <li>
                  <Link to="/notices">
                    <Calendar size={13} className="header-top-icon inline-icon" />
                    <span>Academic Calendar</span>
                  </Link>
                </li>
                <li>
                  <Link to="/placements">Careers & Placements</Link>
                </li>
                <li>
                  <Link to="/grievance">
                    <ShieldAlert size={13} className="header-top-icon inline-icon" />
                    <span>GRS Grievance</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admissions#apply-online-form" className="top-apply-badge-link">
                    <span className="live-pulse-dot"></span>
                    <span>Apply Online 2026</span>
                  </Link>
                </li>
                <li>
                  <span className="aktu-code-tag">AKTU Code: 120</span>
                </li>
              </ul>
            </div>

            {/* Right Call & Email & Portal Link */}
            <div className="header-cta right-cta">
              <ul>
                <li>
                  <div className="call-box">
                    <Phone size={13} className="header-top-icon" />
                    <a href="tel:+919415210052">+91 94152 10052</a>
                  </div>
                </li>
                <li>
                  <div className="call-box">
                    <Mail size={13} className="header-top-icon" />
                    <a href="mailto:info@itmgkp.edu.in">info@itmgkp.edu.in</a>
                  </div>
                </li>
                <li>
                  {user ? (
                    <Link
                      to={user.role === 'admin' ? '/admin' : '/student'}
                      className="top-portal-pill"
                    >
                      <User size={13} />
                      <span>{user.role === 'admin' ? 'Admin Portal' : 'Student Portal'}</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="top-portal-pill">
                      <LogIn size={13} />
                      <span>Student / Staff Login</span>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. MENU AREA (Sticky Header with Pure Light University Styling)
          ========================================================================= */}
      <div id="header-sticky" className={`menu-area ${isSticky ? 'sticky-menu' : ''}`}>
        <div className="container header-container">
          <div className="menu-area-inner">
            {/* Logo */}
            <div className="logo">
              <Link to="/" className="brand-logo-link">
                <div className="eudaimonia-logo-crest">
                  <GraduationCap size={26} />
                </div>
                <div className="logo-text-group">
                  <span className="logo-main-name">ITM GORAKHPUR</span>
                  <span className="logo-tagline">Institute of Technology & Management</span>
                </div>
              </Link>
            </div>

            {/* Main Menu Links */}
            <div className="main-menu">
              <nav id="mobile-menu">
                <ul>
                  {navMenuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`${item.hasSub ? 'has-sub' : ''} ${location.pathname === item.path ? 'active' : ''}`}
                      onMouseEnter={() => item.hasSub && setActiveDropdown(idx)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link to={item.path}>
                        <span>{item.label}</span>
                        {item.hasSub && <ChevronDown size={12} className="menu-arrow-icon" />}
                      </Link>

                      {item.hasSub && activeDropdown === idx && (
                        <ul className="sub-menu">
                          {item.subItems.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link to={sub.path}>{sub.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Tools: Search + Admission Open Button (.btn2) */}
            <div className="header-right-action">
              <div className="login">
                <ul>
                  <li>
                    <button
                      onClick={() => setSearchOpen(!searchOpen)}
                      className="menu-tigger"
                      aria-label="Open search dialog"
                      title="Quick Search"
                    >
                      <Search size={18} />
                    </button>
                  </li>

                  <li>
                    <div className="second-header-btn">
                      <Link to="/admissions#apply-online-form" className="btn-header-apply">
                        <Sparkles size={13} className="sparkle-icon" />
                        <span>APPLY ONLINE</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-toggle-btn"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flyout Search Bar */}
      {searchOpen && (
        <div className="eudaimonia-search-flyout">
          <div className="container header-container search-flyout-box">
            <Search size={20} className="flyout-icon" />
            <input
              type="text"
              autoFocus
              placeholder="Search engineering courses, fees, syllabus, circulars, faculty..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="flyout-input"
            />
            <Link
              to={`/academics?q=${encodeURIComponent(searchWord)}`}
              onClick={() => setSearchOpen(false)}
              className="btn btn-sm"
            >
              Search
            </Link>
            <button onClick={() => setSearchOpen(false)} className="close-search-btn" aria-label="Close search">
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer (Displays ALL Contents with Interactive Accordion) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="drawer-logo">
                <GraduationCap size={24} color="#9D2235" />
                <span>ITM GORAKHPUR</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="close-drawer-btn" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            {/* Quick Portals inside Mobile Drawer */}
            <div className="mobile-quick-actions">
              <Link to="/admissions" className="btn btn-sm" style={{ width: '100%', marginBottom: '0.5rem', textAlign: 'center' }}>
                Admission Open 2026-27 ↗
              </Link>
              <Link to="/login" className="mobile-portal-btn">
                <LogIn size={15} />
                <span>{user ? 'My Dashboard' : 'Student & Staff Login'}</span>
              </Link>
            </div>

            <div className="mobile-drawer-links">
              {navMenuItems.map((item, idx) => (
                <div key={idx} className="mobile-nav-block">
                  <div className="mobile-nav-item-header">
                    <Link to={item.path} className="mobile-link-row">
                      {item.label}
                    </Link>
                    {item.hasSub && (
                      <button 
                        type="button" 
                        onClick={() => toggleMobileSub(idx)} 
                        className="mobile-expand-btn"
                        aria-label="Expand submenu"
                      >
                        <ChevronDown 
                          size={16} 
                          className={`expand-caret ${mobileExpandedSub === idx ? 'expanded' : ''}`} 
                        />
                      </button>
                    )}
                  </div>

                  {item.hasSub && mobileExpandedSub === idx && (
                    <div className="mobile-sub-accordion">
                      {item.subItems.map((sub, sIdx) => (
                        <Link key={sIdx} to={sub.path} className="mobile-sub-link">
                          <ChevronRight size={13} className="sub-arrow" />
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact details in drawer */}
            <div className="mobile-drawer-footer">
              <p><strong>AKTU Code:</strong> 120 (Gorakhpur)</p>
              <p><strong>Phone:</strong> +91 94152 10052</p>
              <p><strong>Email:</strong> info@itmgkp.edu.in</p>
            </div>
          </div>
        </div>
      )}
      {/* Floating Always-Visible Apply Online Badge */}
      <Link 
        to="/admissions#apply-online-form" 
        className="floating-apply-badge"
        title="Apply Online for Admissions 2026-27"
      >
        <span className="live-pulse-dot"></span>
        <span className="floating-text">APPLY ONLINE 2026</span>
        <ArrowUpRight size={15} />
      </Link>
    </header>
  );
}
