import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="glass-card text-center">
      <h1>Welcome to the Simple Tax Deduction Planner</h1>
      <p>
        Many individuals find navigating tax deductions and credits confusing, often missing out on potential savings.
        This planner simplifies the process by guiding you through common expenses and life events that can impact your tax liability.
      </p>
      <p>
        Discover potential deductions, estimate credits, and get a simplified overview of your potential tax benefits – all without
        requiring any personal tax data or external lookups.
      </p>
      <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/deduction-calculator" className="button">Start Planning Deductions</Link>
        <Link href="/credit-estimator" className="button button-secondary">Estimate Credits</Link>
      </div>
    </div>
  );
}
