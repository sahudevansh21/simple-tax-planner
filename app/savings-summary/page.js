"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SavingsSummaryPage() {
  const [loading, setLoading] = useState(true);
  const [summaryMessage, setSummaryMessage] = useState('');

  useEffect(() => {
    // Simulate loading/calculation
    const timer = setTimeout(() => {
      setLoading(false);
      setSummaryMessage(
        "Your estimated potential tax savings are based on your inputs in the Deduction Calculator and Credit Estimator." 
      );
    }, 1500); // Simulate a 1.5 second loading time

    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  // For this example, we'll use placeholder values since state isn't passed between pages without a shared context/storage
  // In a real application, you might use global state management or local storage to persist inputs.
  const estimatedDeductionBenefit = 3500; // Example placeholder
  const estimatedCreditBenefit = 2000;   // Example placeholder
  const totalPotentialSavings = estimatedDeductionBenefit + estimatedCreditBenefit;

  return (
    <div className="glass-card">
      <h1>Your Potential Savings Summary</h1>
      <p className="text-center">
        This summary provides a high-level overview of potential tax benefits based on common scenarios.
        For detailed estimates, please use the dedicated calculators.
      </p>

      {loading ? (
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <div className="loading-spinner"></div>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Calculating your potential benefits...</p>
        </div>
      ) : (
        <div className="results-card">
          <h3>Estimated Potential Benefits</h3>
          <div className="summary-item">
            <span>Potential Benefit from Deductions:</span>
            <strong>{formatCurrency(estimatedDeductionBenefit)}</strong>
          </div>
          <div className="summary-item">
            <span>Potential Benefit from Credits:</span>
            <strong>{formatCurrency(estimatedCreditBenefit)}</strong>
          </div>
          <div className="summary-total">
            <span>Total Estimated Potential Savings:</span>
            <span>{formatCurrency(totalPotentialSavings)}</span>
          </div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            {summaryMessage} Please remember this is an estimate and not financial or tax advice.
            Actual savings depend on your specific financial situation and tax regulations.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/deduction-calculator" className="button button-secondary">Re-calculate Deductions</Link>
            <Link href="/credit-estimator" className="button button-secondary">Re-estimate Credits</Link>
          </div>
        </div>
      )}
    </div>
  );
}
