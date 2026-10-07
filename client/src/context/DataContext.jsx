import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialNotices, coursesData } from '../utils/mockData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Notices state with localStorage persistence
  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('itm_notices');
    return saved ? JSON.parse(saved) : initialNotices;
  });

  // Admission inquiries & applications state
  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('itm_inquiries');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 'INQ-1001',
            fullName: 'Aryan Verma',
            email: 'aryan.verma@example.com',
            phone: '+91 9876543210',
            course: 'btech-cse',
            courseName: 'B.Tech - Computer Science & Engineering',
            qualification: '10+2 PCM (86%)',
            status: 'Verified',
            date: '2026-10-06'
          },
          {
            id: 'INQ-1002',
            fullName: 'Simran Singh',
            email: 'simran.s@example.com',
            phone: '+91 9832104567',
            course: 'mba',
            courseName: 'Master of Business Administration (MBA)',
            qualification: 'B.Com (74%)',
            status: 'Pending',
            date: '2026-10-05'
          }
        ];
  });

  // Grievance / Complaints state (GRS)
  const [grievances, setGrievances] = useState(() => {
    const saved = localStorage.getItem('itm_grievances');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 'GRS-2026-089',
            studentName: 'Rahul Tiwari',
            rollNo: '220120010045',
            department: 'Computer Science',
            category: 'Academic & Lab Support',
            subject: 'Additional GPU lab access hours for AI Capstone projects',
            description: 'Final year CSE-AI students need extended evening hours in the GPU computing center for project training.',
            status: 'Resolved',
            date: '2026-09-28',
            response: 'Lab timings have been extended till 8:00 PM with lab technician on duty.'
          },
          {
            id: 'GRS-2026-092',
            studentName: 'Ananya Gupta',
            rollNo: '230120020018',
            department: 'Pharmacy',
            category: 'Central Library',
            subject: 'Request for recent edition pharmacology reference journals',
            description: 'Need access to latest 2026 editions of Indian Pharmacopoeia volumes in the reading hall.',
            status: 'In Review',
            date: '2026-10-04',
            response: 'Librarian has placed the order with distributor, expected arrival this week.'
          }
        ];
  });

  // Auth state: can be null, or { role: 'admin' | 'student', name: '...', email: '...' }
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('itm_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('itm_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('itm_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('itm_grievances', JSON.stringify(grievances));
  }, [grievances]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('itm_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('itm_user');
    }
  }, [user]);

  // Methods
  const addInquiry = (data) => {
    const newInquiry = {
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      ...data
    };
    setInquiries(prev => [newInquiry, ...prev]);
    return newInquiry;
  };

  const updateInquiryStatus = (id, newStatus) => {
    setInquiries(prev =>
      prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const addNotice = (noticeData) => {
    const newNotice = {
      id: `not-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      ...noticeData
    };
    setNotices(prev => [newNotice, ...prev]);
    return newNotice;
  };

  const deleteNotice = (id) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  const addGrievance = (grievanceData) => {
    const newGrievance = {
      id: `GRS-2026-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      response: 'Your grievance has been registered and assigned to the relevant department committee.',
      ...grievanceData
    };
    setGrievances(prev => [newGrievance, ...prev]);
    return newGrievance;
  };

  const updateGrievanceStatus = (id, status, responseMsg) => {
    setGrievances(prev =>
      prev.map(g =>
        g.id === id
          ? {
              ...g,
              status,
              response: responseMsg || g.response
            }
          : g
      )
    );
  };

  const login = (role, customData = {}) => {
    const userData =
      role === 'admin'
        ? {
            role: 'admin',
            name: 'Dr. Administrative Officer',
            email: 'admin@itmgkp.edu.in',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
            ...customData
          }
        : {
            role: 'student',
            name: 'Rahul Tiwari',
            rollNo: '220120010045',
            email: 'rahul.t@itmgkp.edu.in',
            department: 'B.Tech CSE - 4th Year',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
            ...customData
          };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <DataContext.Provider
      value={{
        notices,
        addNotice,
        deleteNotice,
        inquiries,
        addInquiry,
        updateInquiryStatus,
        grievances,
        addGrievance,
        updateGrievanceStatus,
        user,
        login,
        logout,
        courses: coursesData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
