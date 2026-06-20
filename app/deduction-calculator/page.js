"use client";

import { useState, useEffect } from 'react';

export default function DeductionCalculatorPage() {
  const [income, setIncome] = useState('');
  const [medicalExpenses, setMedicalExpenses] = useState('');
  const [stateLocalTaxes, setStateLocalTaxes] = useState('');
  const [mortgageInterest, setMortgageInterest] = useState('');
  const [charitableContributions, setCharitableContributions] = useState('');
  const [otherItemized, setOtherItemized] = useState('');
  const [filingStatus, setFilingStatus] = useState('single'); // single, married_filing_jointly, married_filing_separately, head_of_household

  const [standardDeduction, setStandardDeduction] = useState(0);
  const [totalItemizedDeductions, setTotalItemizedDeductions] = useState(0);
  const [recommendedDeduction, setRecommendedDeduction] = useState({ type: 'Standard', amount: 0 });

  // Standard deduction values (simplified for example, varies by year and age)
  const standardDeductions = {
    single: 13850,
    married_filing_jointly: 27700,
    married_filing_separately: 13850,
    head_of_household: 20800,
  };

  useEffect(() => {
    // Calculate total itemized deductions
    const medExp = parseFloat(medicalExpenses) || 0;
    const stateLocal = parseFloat(stateLocalTaxes) || 0; // SALT cap of $10,000
    const mortgageInt = parseFloat(mortgageInterest) || 0;
    const charitable = parseFloat(charitableContributions) || 0;
    const other = parseFloat(otherItemized) || 0;

    // Simplified calculation for SALT cap (hypothetical for example)
    const effectiveStateLocal = Math.min(stateLocal, 10000); 

    const calculatedItemized = medExp + effectiveStateLocal + mortgageInt + charitable + other;
    setTotalItemizedDeductions(calculatedItemized);

    // Set standard deduction based on filing status
    const currentStandard = standardDeductions[filingStatus] || 0;
    setStandardDeduction(currentStandard);

    // Determine recommended deduction
    if (calculatedItemized > currentStandard) {
      setRecommendedDeduction({ type: 'Itemized', amount: calculatedItemized });
    } else {
      setRecommendedDeduction({ type: 'Standard', amount: currentStandard });
    }
  }, [income, medicalExpenses, stateLocalTaxes, mortgageInterest, charitableContributions, otherItemized, filingStatus]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="glass-card">
      <h1>Deduction Calculator</h1>
      <p className="text-center">
        Enter your estimated income and common expenses to see whether a standard or itemized deduction
        might be more beneficial for your situation.
      </p>

      <div className="form-grid grid-2-cols" style={{ marginTop: '2rem' }}>
        <div className="form-group">
          <label htmlFor="income">Estimated Annual Income ($)</label>
          <input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g., 75000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="filingStatus">Filing Status</label>
          <select
            id="filingStatus"
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
          >
            <option value="single">Single</option>
            <option value="married_filing_jointly">Married Filing Jointly</option>
            <option value="married_filing_separately">Married Filing Separately</option>
            <option value="head_of_household">Head of Household</option>
          </select>
        </div>
      </div>

      <h2 style={{ marginTop: '2rem', textAlign: 'center' }}>Itemized Expenses (Estimates)</h2>
      <div className="form-grid grid-2-cols">
        <div className="form-group">
          <label htmlFor="medicalExpenses">Medical & Dental Expenses (over 7.5% AGI) ($)</label>
          <input
            id="medicalExpenses"
            type="number"
            value={medicalExpenses}
            onChange={(e) => setMedicalExpenses(e.target.value)}
            placeholder="e.g., 5000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stateLocalTaxes">State & Local Taxes (SALT) ($)</label>
          <input
            id="stateLocalTaxes"
            type="number"
            value={stateLocalTaxes}
            onChange={(e) => setStateLocalTaxes(e.target.value)}
            placeholder="e.g., 12000 (capped)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mortgageInterest">Home Mortgage Interest ($)</label>
          <input
            id="mortgageInterest"
            type="number"
            value={mortgageInterest}
            onChange={(e) => setMortgageInterest(e.target.value)}
            placeholder="e.g., 8000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="charitableContributions">Cash Charitable Contributions ($)</label>
          <input
            id="charitableContributions"
            type="number"
            value={charitableContributions}
            onChange={(e) => setCharitableContributions(e.target.value)}
            placeholder="e.g., 2000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherItemized">Other Itemized Deductions ($)</label>
          <input
            id="otherItemized"
            type="number"
            value={otherItemized}
            onChange={(e) => setOtherItemized(e.target.value)}
            placeholder="e.g., 500"
          />
        </div>
      </div>

      <div className="results-card">
        <h3>Deduction Summary</h3>
        <div className="summary-item">
          <span>Your Standard Deduction ({filingStatus === 'single' ? 'Single' : filingStatus === 'married_filing_jointly' ? 'Married Jointly' : filingStatus === 'married_filing_separately' ? 'Married Separately' : 'Head of Household'}):</span>
          <strong>{formatCurrency(standardDeduction)}</strong>
        </div>
        <div className="summary-item">
          <span>Your Estimated Itemized Deductions:</span>
          <strong>{formatCurrency(totalItemizedDeductions)}</strong>
        </div>
        <div className="summary-total">
          <span>Recommended Deduction Type: <strong>{recommendedDeduction.type}</strong></span>
          <span>Estimated Deduction Amount: <strong>{formatCurrency(recommendedDeduction.amount)}</strong></span>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          *Note: Medical expense deduction is typically only for amounts exceeding 7.5% of Adjusted Gross Income (AGI).
          State and Local Tax (SALT) deductions are capped at $10,000 for most taxpayers.
          These calculations are simplified estimates.
        </p>
      </div>
    </div>
  );
}
