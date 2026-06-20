import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Simple Tax Deduction Planner',
  description: 'Navigate tax deductions and credits with ease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <nav className="nav-container">
            <Link href="/" className="nav-brand">Tax Planner</Link>
            <div className="nav-links">
              <Link href="/deduction-calculator" className="nav-item">Deduction Calculator</Link>
              <Link href="/credit-estimator" className="nav-item">Credit Estimator</Link>
              <Link href="/savings-summary" className="nav-item">Savings Summary</Link>
            </div>
          </nav>
        </header>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2023 Simple Tax Deduction Planner. All rights reserved.</p>
          <p>Disclaimer: This tool provides estimates only and is not tax advice. Consult a professional.</p>
        </footer>
      </body>
    </html>
  );
}
