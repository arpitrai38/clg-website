// API Client for ITM Gorakhpur Full-Stack Portal

const API_BASE_URL = 'http://localhost:5000/api';

export const apiClient = {
  // Notices
  getNotices: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/notices`);
      return await res.json();
    } catch (err) {
      console.warn('Backend offline, using local data:', err);
      return null;
    }
  },

  createNotice: async (noticeData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/notices`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noticeData)
      });
      return await res.json();
    } catch (err) {
      console.warn('Backend offline:', err);
      return null;
    }
  },

  deleteNotice: async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/notices/${id}`, {
        method: 'DELETE'
      });
      return await res.json();
    } catch (err) {
      console.warn('Backend offline:', err);
      return null;
    }
  },

  // Admissions
  submitInquiry: async (inquiryData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/admissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      });
      return await res.json();
    } catch (err) {
      console.warn('Backend offline:', err);
      return null;
    }
  },

  // Grievances
  trackGrievance: async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/grievances/track/${id}`);
      return await res.json();
    } catch (err) {
      console.warn('Backend offline:', err);
      return null;
    }
  },

  submitGrievance: async (data) => {
    try {
      const res = await fetch(`${API_BASE_URL}/grievances`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (err) {
      console.warn('Backend offline:', err);
      return null;
    }
  }
};
