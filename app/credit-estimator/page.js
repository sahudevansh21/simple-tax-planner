"use client";

import { useState, useEffect } from 'react';

export default function CreditEstimatorPage() {
  const [dependents, setDependents] = useState(false);
  const [educationExpenses, setEducationExpenses] = useState(false);
  const [childcareExpenses, setChildcareExpenses] = useState(false);
  const [energyEfficientHome, setEnergyEfficientHome] = useState(false);
  const [retirementSavings, setRetirementSavings] = useState(false);
  const [evCredit, setEvCredit] = useState(false);

  const [potentialCredits, setPotentialCredits] = useState([]);

  useEffect(() => {
    const credits = [];
    if (dependents) {
      credits.push({ name: 'Child Tax Credit (CTC)', description: 'Up to $2,000 per qualifying child. Non-refundable portion may be refundable as Additional Child Tax Credit (ACTC).' });
    }
    if (educationExpenses) {
      credits.push({ name: 'American Opportunity Tax Credit (AOTC)', description: 'Up to $2,500 for qualified education expenses for the first four years of higher education. 40% is refundable.' });
      credits.push({ name: 'Lifetime Learning Credit (LLC)', description: 'Up to $2,000 for qualified education expenses for undergraduate, graduate, or professional degree courses. Non-refundable.' });
    }
    if (childcareExpenses) {
      credits.push({ name: 'Child and Dependent Care Credit', description: 'Up to $2,100 for two or more dependents, for expenses related to care for a qualifying individual to allow you to work or look for work.' });
    }
    if (energyEfficientHome) {
      credits.push({ name: 'Residential Clean Energy Credit', description: '30% of the cost of new, qualified clean energy property for your home (e.g., solar, geothermal).' });
      credits.push({ name: 'Energy Efficient Home Improvement Credit', description: 'Up to $3,200 annually for certain home energy efficiency improvements.' });
    }
    if (retirementSavings) {
      credits.push({ name: 'Retirement Savings Contributions Credit (Saver\'s Credit)', description: 'Up to $1,000 ($2,000 for joint filers) for contributions to IRAs or employer-sponsored retirement plans, based on income.' });
    }
    if (evCredit) {
      credits.push({ name: 'Clean Vehicle Credit', description: 'Up to $7,500 for new clean vehicles or up to $4,000 for used clean vehicles, subject to income and vehicle requirements.' });
    }
    setPotentialCredits(credits);
  }, [dependents, educationExpenses, childcareExpenses, energyEfficientHome, retirementSavings, evCredit]);

  return (
    <div className="glass-card">
      <h1>Credit Estimator</h1>
      <p className="text-center">
        Select the scenarios that apply to you to discover potential tax credits that could reduce your tax liability.
      </p>

      <div className="form-grid" style={{ marginTop: '2rem' }}>
        <div className="form-group">
          <label className="checkbox-group">
            <input
              type="checkbox"
              checked={dependents}
              onChange={(e) => setDependents(e.target.checked)}
            />
            <span>I have qualifying children or dependents.</span>
          </label>
        </div>
        <div className="form-group">
          <label className="checkbox-group">
            <input
              type="checkbox"
              checked={educationExpenses}
              onChange={(e) => setEducationExpenses(e.target.checked)}
            />
            <span>I or my dependents have higher education expenses (college, grad school, etc.).</span>
          </label>
        </div>
        <div className="form-group">
          <label className="checkbox-group">
            <input
              type="checkbox"
              checked={childcareExpenses}
              onChange={(e) => setChildcareExpenses(e.target.checked)}
            />
            <span>I pay for childcare or care for a dependent to allow me to work.</span>
          </label>
        </div>
        <div className="form-group">
          <label className="checkbox-group">
            <input
              type="checkbox"
              checked={energyEfficientHome}
              onChange={(e) => setEnergyEfficientHome(e.target.checked)}
            />
            <span>I made energy-efficient improvements to my home or installed clean energy property.</span>
          </label>
        </div>
        <div className="form-group">
          <label className="checkbox-group">
            <input
              type="checkbox"
              checked={retirementSavings}
              onChange={(e) => setRetirementSavings(e.target.checked)}
            />
            <span>I contribute to an IRA or employer-sponsored retirement plan.</span>
          </label>
        </div>
        <div className="form-group">
          <label className="checkbox-group">
            <input
              type="checkbox"
              checked={evCredit}
              onChange={(e) => setEvCredit(e.target.checked)}
            />
            <span>I purchased a new or used clean vehicle.</span>
          </label>
        </div>
      </div>

      <div className="results-card">
        <h3>Potential Tax Credits</h3>
        {potentialCredits.length > 0 ? (
          <ul>
            {potentialCredits.map((credit, index) => (
              <li key={index}>
                <div>
                  <strong>{credit.name}</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{credit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            Select options above to see potential credits.
          </p>
        )}
      </div>
    </div>
  );
}
