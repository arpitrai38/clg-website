import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  QrCode, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  AlertCircle, 
  Printer, 
  ArrowRight, 
  Download,
  Lock,
  Wallet,
  Smartphone,
  Landmark,
  FileText
} from 'lucide-react';
import { collegeInfo } from '../../utils/mockData';
import './Payment.css';

export default function Payment() {
  const [feeCategory, setFeeCategory] = useState('tuition');
  const [paymentMode, setPaymentMode] = useState('upi');
  const [formData, setFormData] = useState({
    rollNumber: '',
    studentName: '',
    course: 'B.Tech - Computer Science & Engineering',
    semester: 'Semester 4',
    amount: '89500',
    contactNumber: '',
    parentEmail: ''
  });

  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' or null
  const [receiptDetails, setReceiptDetails] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const feeCategoryAmounts = {
    tuition: '89500',
    hostel: '55000',
    exam: '8200',
    transport: '18000',
    misc: '5000'
  };

  const handleCategoryChange = (cat) => {
    setFeeCategory(cat);
    setFormData(prev => ({
      ...prev,
      amount: feeCategoryAmounts[cat] || '89500'
    }));
  };

  const handlePaySubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.rollNumber) {
      alert('Please fill student roll number and name');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const txnId = 'ITM' + Math.floor(100000000 + Math.random() * 900000000);
      setReceiptDetails({
        txnId,
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        studentName: formData.studentName,
        rollNumber: formData.rollNumber.toUpperCase(),
        course: formData.course,
        semester: formData.semester,
        category: feeCategory.toUpperCase() + ' FEE',
        amount: formData.amount,
        mode: paymentMode.toUpperCase()
      });
      setPaymentStatus('success');
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="payment-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><CreditCard size={14} /> Secured College Gateway</span>
          <h1 className="page-header-title">Online Fee Payment Portal</h1>
          <p className="page-header-desc">
            Pay semester tuition, hostel, university exam, and bus transport fees seamlessly via instant UPI, 
            Net Banking, Debit/Credit Card, or generate official NEFT/RTGS challans.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Fee Payment</span>
          </div>
        </div>
      </section>

      {/* Main Payment Section */}
      <section className="section payment-main-section">
        <div className="container">
          {paymentStatus === 'success' && receiptDetails ? (
            <div className="card receipt-card print-receipt-view">
              <div className="receipt-header">
                <div className="receipt-crest">
                  <Building2 size={36} color="#9D2235" />
                </div>
                <div className="receipt-college-info">
                  <h2>INSTITUTE OF TECHNOLOGY & MANAGEMENT</h2>
                  <p>AL-1, Sector-7, GIDA, Gorakhpur - 273209 (U.P.) | AKTU Code: 120</p>
                  <span className="receipt-official-tag">OFFICIAL E-FEE RECEIPT (2026-27)</span>
                </div>
              </div>

              <div className="receipt-status-ribbon">
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                  <h4>Payment Successful & Verified</h4>
                  <p>Transaction Reference: <strong>{receiptDetails.txnId}</strong></p>
                </div>
              </div>

              <div className="receipt-data-grid">
                <div className="receipt-cell">
                  <span className="r-label">Student Name:</span>
                  <span className="r-val">{receiptDetails.studentName}</span>
                </div>
                <div className="receipt-cell">
                  <span className="r-label">Roll / Enrollment No:</span>
                  <span className="r-val">{receiptDetails.rollNumber}</span>
                </div>
                <div className="receipt-cell">
                  <span className="r-label">Academic Program:</span>
                  <span className="r-val">{receiptDetails.course}</span>
                </div>
                <div className="receipt-cell">
                  <span className="r-label">Term / Semester:</span>
                  <span className="r-val">{receiptDetails.semester}</span>
                </div>
                <div className="receipt-cell">
                  <span className="r-label">Payment Category:</span>
                  <span className="r-val">{receiptDetails.category}</span>
                </div>
                <div className="receipt-cell">
                  <span className="r-label">Payment Channel:</span>
                  <span className="r-val">{receiptDetails.mode}</span>
                </div>
                <div className="receipt-cell">
                  <span className="r-label">Payment Timestamp:</span>
                  <span className="r-val">{receiptDetails.date} at {receiptDetails.time}</span>
                </div>
                <div className="receipt-cell highlight-cell">
                  <span className="r-label">Total Amount Paid:</span>
                  <span className="r-val amount-val">₹{Number(receiptDetails.amount).toLocaleString('en-IN')}.00</span>
                </div>
              </div>

              <div className="receipt-footer-notes">
                <p>• This is a computer-generated e-receipt and does not require physical signature.</p>
                <p>• The paid amount has been credited to ITM Gorakhpur designated accounts with AKTU Code 120.</p>
              </div>

              <div className="receipt-actions no-print">
                <button onClick={handlePrint} className="btn ss-btn">
                  <Printer size={16} />
                  <span>Print Fee Receipt</span>
                </button>
                <button onClick={() => setPaymentStatus(null)} className="btn btn-outline">
                  <span>Make Another Payment</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="payment-grid-layout">
              {/* Left Column: Form & Category Selection */}
              <div className="payment-form-col">
                {/* 1. Category Selector */}
                <div className="card category-selector-card">
                  <h3 className="card-box-title">1. Select Payment Category</h3>
                  <div className="category-pills-row">
                    <button 
                      type="button"
                      onClick={() => handleCategoryChange('tuition')}
                      className={`cat-pill-btn ${feeCategory === 'tuition' ? 'active' : ''}`}
                    >
                      Tuition Fee
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleCategoryChange('hostel')}
                      className={`cat-pill-btn ${feeCategory === 'hostel' ? 'active' : ''}`}
                    >
                      Hostel & Mess
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleCategoryChange('exam')}
                      className={`cat-pill-btn ${feeCategory === 'exam' ? 'active' : ''}`}
                    >
                      AKTU Exam Fee
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleCategoryChange('transport')}
                      className={`cat-pill-btn ${feeCategory === 'transport' ? 'active' : ''}`}
                    >
                      Bus Transport
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleCategoryChange('misc')}
                      className={`cat-pill-btn ${feeCategory === 'misc' ? 'active' : ''}`}
                    >
                      Misc / Other
                    </button>
                  </div>
                </div>

                {/* 2. Student Details Form */}
                <div className="card student-details-card">
                  <h3 className="card-box-title">2. Student & Academic Information</h3>
                  <form onSubmit={handlePaySubmit} id="fee-pay-form">
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">College Roll No. / Enrollment No. *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. 210120010045"
                          value={formData.rollNumber}
                          onChange={(e) => setFormData({...formData, rollNumber: e.target.value})}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Student Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Rahul Verma"
                          value={formData.studentName}
                          onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Course & Branch *</label>
                        <select 
                          value={formData.course} 
                          onChange={(e) => setFormData({...formData, course: e.target.value})}
                          className="form-select"
                        >
                          <option>B.Tech - Computer Science & Engineering</option>
                          <option>B.Tech - Artificial Intelligence & ML</option>
                          <option>B.Tech - Mechanical Engineering</option>
                          <option>B.Tech - Civil Engineering</option>
                          <option>Bachelor of Pharmacy (B.Pharm)</option>
                          <option>Diploma in Pharmacy (D.Pharm)</option>
                          <option>Master of Business Administration (MBA)</option>
                          <option>Polytechnic Diploma Engineering</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Semester / Academic Year *</label>
                        <select 
                          value={formData.semester} 
                          onChange={(e) => setFormData({...formData, semester: e.target.value})}
                          className="form-select"
                        >
                          <option>1st Year (Semester 1 & 2)</option>
                          <option>2nd Year (Semester 3 & 4)</option>
                          <option>3rd Year (Semester 5 & 6)</option>
                          <option>4th Year (Semester 7 & 8)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Mobile Number (For Receipt SMS) *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+91 9876543210"
                          value={formData.contactNumber}
                          onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Fee Amount (₹ INR) *</label>
                        <input 
                          type="number" 
                          required 
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                          className="form-input amount-highlight-input"
                        />
                      </div>
                    </div>

                    {/* 3. Payment Mode Selection */}
                    <div className="payment-channel-box">
                      <label className="form-label" style={{ marginBottom: '0.75rem' }}>
                        3. Choose Payment Mode:
                      </label>
                      <div className="channel-options-grid">
                        <label className={`channel-pill ${paymentMode === 'upi' ? 'selected' : ''}`}>
                          <input 
                            type="radio" 
                            name="paymode" 
                            value="upi" 
                            checked={paymentMode === 'upi'}
                            onChange={() => setPaymentMode('upi')}
                          />
                          <Smartphone size={18} />
                          <span>UPI / QR Scan</span>
                        </label>
                        <label className={`channel-pill ${paymentMode === 'card' ? 'selected' : ''}`}>
                          <input 
                            type="radio" 
                            name="paymode" 
                            value="card" 
                            checked={paymentMode === 'card'}
                            onChange={() => setPaymentMode('card')}
                          />
                          <CreditCard size={18} />
                          <span>Credit / Debit Card</span>
                        </label>
                        <label className={`channel-pill ${paymentMode === 'netbanking' ? 'selected' : ''}`}>
                          <input 
                            type="radio" 
                            name="paymode" 
                            value="netbanking" 
                            checked={paymentMode === 'netbanking'}
                            onChange={() => setPaymentMode('netbanking')}
                          />
                          <Landmark size={18} />
                          <span>Net Banking</span>
                        </label>
                        <label className={`channel-pill ${paymentMode === 'neft' ? 'selected' : ''}`}>
                          <input 
                            type="radio" 
                            name="paymode" 
                            value="neft" 
                            checked={paymentMode === 'neft'}
                            onChange={() => setPaymentMode('neft')}
                          />
                          <FileText size={18} />
                          <span>NEFT / RTGS Challan</span>
                        </label>
                      </div>
                    </div>

                    <div className="payment-security-notice">
                      <Lock size={15} color="#10b981" />
                      <span>256-Bit SSL Encrypted. Verified by HDFC Bank & Razorpay Payment Gateway.</span>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="btn ss-btn btn-lg pay-submit-btn"
                    >
                      {isProcessing ? 'Processing Transaction...' : `Proceed to Pay ₹${Number(formData.amount).toLocaleString('en-IN')}`}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Bank Details & Instructions */}
              <div className="payment-info-col">
                <div className="card bank-accounts-card">
                  <h3 className="card-box-title">Official College Bank Account</h3>
                  <p className="bank-card-sub">For direct NEFT / RTGS / IMPS bank transfers:</p>
                  
                  <div className="bank-meta-table">
                    <div className="bank-row">
                      <span>Account Name:</span>
                      <strong>INSTITUTE OF TECHNOLOGY & MANAGEMENT</strong>
                    </div>
                    <div className="bank-row">
                      <span>Bank Name:</span>
                      <strong>State Bank of India (SBI)</strong>
                    </div>
                    <div className="bank-row">
                      <span>Branch:</span>
                      <strong>GIDA Sector-7 Branch, Gorakhpur</strong>
                    </div>
                    <div className="bank-row">
                      <span>Account Number:</span>
                      <strong className="code-font">382910482910</strong>
                    </div>
                    <div className="bank-row">
                      <span>IFSC Code:</span>
                      <strong className="code-font">SBIN0011245</strong>
                    </div>
                    <div className="bank-row">
                      <span>College AKTU Code:</span>
                      <strong>120</strong>
                    </div>
                  </div>

                  <div className="qr-box-mock">
                    <QrCode size={110} color="#641320" />
                    <p>Scan with any UPI App (GPay / PhonePe / Paytm / BHIM)</p>
                    <span className="upi-id-tag">UPI ID: itmgorakhpur@sbi</span>
                  </div>
                </div>

                <div className="card payment-faq-card">
                  <h4>Important Guidelines</h4>
                  <ul className="guidelines-list">
                    <li>• Always verify your Student Roll Number before completing payment.</li>
                    <li>• Download and keep the e-receipt for semester registration verification.</li>
                    <li>• In case of any deduction without receipt, contact Accounts Section at <strong>+91 94152 10052</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
