# Simple Tax Deduction Planner

Welcome to the Simple Tax Deduction Planner! This Next.js 14 App Router application provides a straightforward way for individuals to understand potential tax deductions and credits. By guiding users through an interactive questionnaire about their income and typical expenditures, it dynamically calculates an estimated potential standard vs. itemized deduction and highlights common credits. This tool offers a clear, simplified overview of potential tax benefits without requiring any personal tax data or external lookups, all client-side.

## Features

*   **Interactive Questionnaire**: Input your income and various expenses.
*   **Deduction Calculation**: Estimate whether standard or itemized deductions might be more beneficial for you.
*   **Credit Estimator**: Identify common tax credits you might be eligible for based on simple criteria.
*   **Savings Summary**: Get a clear overview of potential tax benefits.
*   **Stunning UI**: A dark-themed, glassmorphic design with vibrant gradients and smooth animations.
*   **Client-side Only**: No external APIs or databases used, ensuring privacy and ease of use.

## Pages

1.  **Home**: Overview and introduction to the planner.
2.  **Deduction Calculator**: Input expenses to compare standard vs. itemized deductions.
3.  **Credit Estimator**: Check eligibility for common tax credits.
4.  **Savings Summary**: View a comprehensive summary of potential benefits.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/simple-tax-planner.git
    cd simple-tax-planner
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will create an optimized build of your application in the `.next` directory.

### Running in Production Mode

To start the built application:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
.
├── app/
│   ├── deduction-calculator/  # Deduction calculator page
│   │   └── page.js
│   ├── credit-estimator/      # Credit estimator page
│   │   └── page.js
│   ├── savings-summary/       # Savings summary page
│   │   └── page.js
│   ├── globals.css            # Global styles (no Tailwind/CSS Modules)
│   ├── layout.js              # Root layout and navigation
│   └── page.js                # Home page
├── next.config.js             # Next.js configuration
├── package.json               # Project dependencies and scripts
├── README.md                  # This README file
└── .gitignore                 # Files and directories to ignore
```

## Technologies Used

*   **Next.js 14**: React framework for production.
*   **React 18**: JavaScript library for building user interfaces.
*   **CSS**: For styling, adhering to a dark, glassmorphic design without external frameworks.

## Disclaimer

This tool is for informational and educational purposes only and should not be considered as professional tax advice. Tax laws are complex and can change. For accurate tax planning and advice, please consult with a qualified tax professional. The calculations provided are estimates based on simplified assumptions and do not account for all possible tax scenarios or individual circumstances.
