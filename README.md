# OrangeHRM Playwright Automation Framework

## Automated Functional Testing of OrangeHRM Using Playwright and TypeScript

A comprehensive End-to-End web automation testing framework developed using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This project automates the functional testing of the OrangeHRM Demo Application by validating major user workflows, improving test maintainability, and demonstrating industry-standard automation testing practices.

---

## Project Overview

This project was developed as part of an Automation Testing assignment to demonstrate modern web automation techniques using Microsoft's Playwright framework.

The framework validates the core functionalities of the OrangeHRM application through reusable page objects, structured test data management, and modular test cases.

The implementation follows software engineering best practices including:

* Page Object Model (POM)
* Modular framework architecture
* Data-driven testing
* Reusable utility functions
* Organized project structure
* Maintainable and scalable automation design

---

## Application Under Test

**Application:** OrangeHRM Demo

**URL**

https://opensource-demo.orangehrmlive.com/

---

## Technology Stack

| Technology         | Version |
| ------------------ | ------- |
| Playwright         | 1.61.1  |
| TypeScript         | 6.0.3   |
| Node.js            | 24.14.0 |
| npm                | 11.9.0  |
| Visual Studio Code | 1.101+  |

---

## Framework Architecture

```
orangehrm-playwright-automation
│
├── pages
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── MyInfoPage.ts
│   └── PIMPage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── dashboard.spec.ts
│   ├── myInfo.spec.ts
│   ├── pim.spec.ts
│   └── e2e.spec.ts
│
├── test-data
│   ├── credentials.ts
│   ├── PersonalData.ts
│   └── PIMData.ts
│
├── utils
│   └── screenshotHelper.ts
│
├── screenshots
│
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

# Implemented Modules

## Authentication Module

* Verify successful login
* Verify invalid username
* Verify invalid password
* Verify invalid credentials
* Verify empty username validation
* Verify empty password validation
* Verify empty credentials validation

---

## Dashboard Module

* Verify dashboard navigation
* Verify dashboard components
* Verify My Info navigation
* Verify user dropdown
* Verify logout functionality

---

## My Info Module

* Verify My Info navigation
* Verify Personal Details page
* Update Personal Details
* Save Personal Details
* Verify success message
* Verify updated data persistence

---

## Personnel Information Management (PIM) Module

* Verify PIM navigation
* Verify Employee Information page
* Search employee by name
* Search employee by employee ID
* Reset search filters
* Verify search results table

---

## End-to-End Workflow

The complete business workflow validates:

```
Launch Application
        │
        ▼
Login
        │
        ▼
Dashboard
        │
        ▼
Navigate to My Info
        │
        ▼
Update Personal Details
        │
        ▼
Save Changes
        │
        ▼
Verify Success Message
        │
        ▼
Logout
```

---

# Design Pattern

The framework follows the **Page Object Model (POM)**.

Advantages include:

* Improved code readability
* High maintainability
* Reduced code duplication
* Better scalability
* Reusable page methods
* Easy test maintenance

---

# Features

* Functional UI Automation
* Modular Framework
* Page Object Model
* Data-driven Testing
* Reusable Test Utilities
* TypeScript Implementation
* Cross-browser Support
* Sequential Test Execution
* Screenshot Capture
* End-to-End Workflow Validation

---

# Test Execution

## Clone Repository

```bash
git clone https://github.com/minahil-murtaza/orangehrm-playwright-automation.git
```

Navigate into the project.

```bash
cd orangehrm-playwright-automation
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

or

```bash
npx playwright install chromium
```

---

## Verify Installation

Check Node.js version.

```bash
node -v
```

Check npm version.

```bash
npm -v
```

Check Playwright version.

```bash
npx playwright --version
```

---

# Running Tests

## Run Authentication Module

```bash
npm run test:login
```

---

## Run Dashboard Module

```bash
npm run test:dashboard
```

---

## Run My Info Module

```bash
npm run test:myInfo
```

---

## Run PIM Module

```bash
npm run test:pim
```

---

## Run End-to-End Test

```bash
npm run test:e2e
```

---

## Run Complete Test Suite

```bash
npx playwright test
```

---

## Run Specific Test

```bash
npx playwright test tests/login.spec.ts
```

---

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

## Run Individual Test Cases

The following commands can be used to execute a specific test case instead of running the complete module.

### Authentication Module

| Test Case    | Command                                                     |
| ------------ | ----------------------------------------------------------- |
| TC_Login_001 | `npx playwright test tests/login.spec.ts -g "TC_Login_001"` |
| TC_Login_002 | `npx playwright test tests/login.spec.ts -g "TC_Login_002"` |
| TC_Login_003 | `npx playwright test tests/login.spec.ts -g "TC_Login_003"` |
| TC_Login_004 | `npx playwright test tests/login.spec.ts -g "TC_Login_004"` |
| TC_Login_005 | `npx playwright test tests/login.spec.ts -g "TC_Login_005"` |
| TC_Login_006 | `npx playwright test tests/login.spec.ts -g "TC_Login_006"` |
| TC_Login_007 | `npx playwright test tests/login.spec.ts -g "TC_Login_007"` |

### Dashboard Module

| Test Case        | Command                                                             |
| ---------------- | ------------------------------------------------------------------- |
| TC_Dashboard_001 | `npx playwright test tests/dashboard.spec.ts -g "TC_Dashboard_001"` |
| TC_Dashboard_002 | `npx playwright test tests/dashboard.spec.ts -g "TC_Dashboard_002"` |
| TC_Dashboard_003 | `npx playwright test tests/dashboard.spec.ts -g "TC_Dashboard_003"` |
| TC_Dashboard_004 | `npx playwright test tests/dashboard.spec.ts -g "TC_Dashboard_004"` |
| TC_Dashboard_005 | `npx playwright test tests/dashboard.spec.ts -g "TC_Dashboard_005"` |

### My Info Module

| Test Case     | Command                                                       |
| ------------- | ------------------------------------------------------------- |
| TC_MyInfo_001 | `npx playwright test tests/myInfo.spec.ts -g "TC_MyInfo_001"` |
| TC_MyInfo_002 | `npx playwright test tests/myInfo.spec.ts -g "TC_MyInfo_002"` |
| TC_MyInfo_003 | `npx playwright test tests/myInfo.spec.ts -g "TC_MyInfo_003"` |
| TC_MyInfo_004 | `npx playwright test tests/myInfo.spec.ts -g "TC_MyInfo_004"` |
| TC_MyInfo_005 | `npx playwright test tests/myInfo.spec.ts -g "TC_MyInfo_005"` |
| TC_MyInfo_006 | `npx playwright test tests/myInfo.spec.ts -g "TC_MyInfo_006"` |

### Personnel Information Management (PIM) Module

| Test Case  | Command                                                 |
| ---------- | ------------------------------------------------------- |
| TC_PIM_001 | `npx playwright test tests/pim.spec.ts -g "TC_PIM_001"` |
| TC_PIM_002 | `npx playwright test tests/pim.spec.ts -g "TC_PIM_002"` |
| TC_PIM_003 | `npx playwright test tests/pim.spec.ts -g "TC_PIM_003"` |
| TC_PIM_004 | `npx playwright test tests/pim.spec.ts -g "TC_PIM_004"` |
| TC_PIM_005 | `npx playwright test tests/pim.spec.ts -g "TC_PIM_005"` |
| TC_PIM_006 | `npx playwright test tests/pim.spec.ts -g "TC_PIM_006"` |

### End-to-End Workflow

| Test Case  | Command                                                 |
| ---------- | ------------------------------------------------------- |
| TC_E2E_001 | `npx playwright test tests/e2e.spec.ts -g "TC_E2E_001"` |


## Debug Tests

```bash
npx playwright test --debug
```

---

## Generate Code Using Playwright Recorder

```bash
npx playwright codegen https://opensource-demo.orangehrmlive.com/
```

---

# Configuration

The project uses a centralized Playwright configuration through:

```
playwright.config.ts
```

Key configurations include:

* Base URL
* Browser configuration
* Sequential execution
* Action timeout
* Navigation timeout
* Screenshot settings
* Reporter configuration

---

# Project Highlights

* Developed using Playwright with TypeScript
* Implements Page Object Model architecture
* Modular and reusable automation framework
* Covers authentication, dashboard, profile management, PIM, and end-to-end workflow
* Structured test data management
* Easy to extend with additional modules

---

# Future Enhancements

Possible improvements include:

* Cross-browser execution (Firefox, WebKit)
* Parallel execution
* Data-driven testing using JSON or Excel
* API testing integration
* CI/CD integration with GitHub Actions
* Docker support
* Allure Reporting
* Jenkins integration
* Performance testing
* Visual regression testing

---

# Author

**Minahil Murtaza**

BS Software Engineering

University of Management and Technology (UMT)

Lahore, Pakistan

GitHub

https://github.com/minahil-murtaza

LinkedIn

https://www.linkedin.com/in/minahil-murtaza-784460336/

---

# License

This project is developed solely for educational, learning, and portfolio purposes.
