
# Playwright Assignment 2 – Multi-Browser Parallel Execution (C Sarath)

## Overview
This assignment implements a Playwright test suite that runs across multiple browsers and multiple user roles.  
The suite executes tests in parallel workers to speed up test execution and generates consolidated reports.

## Features
- Runs tests simultaneously on Chromium, Firefox, and WebKit.
- Tests multiple user roles: Admin, Customer, Guest.
- Executes tests in parallel workers for faster execution.
- Generates consolidated per-browser pass/fail reports.
- Supports modular and maintainable test scripts.
1. Clone the repository:
```bash
git clone https://github.com/yourusername/playwright-assignment-2.git
cd playwright-assignment-2

Install dependencies:
npm install

Run tests:
npm run test

Open reports:
npx playwright show-report

