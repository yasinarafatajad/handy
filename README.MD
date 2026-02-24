# Project Name : HANDY | Project Task and Learning Management Application 

---

## Project Overview
HANDY is a full-stack task and learning management application designed to streamline personal productivity through structured project tracking, progress analytics, and streak-based motivation. It features a modern React + Vite client with a scalable Express and MongoDB backend for efficient data handling. The platform centralizes tasks, learning plans, and performance insights in a clean, dashboard-driven workflow.

---

## ⏱️ Timeline

- **Duration**: 14 days
- **Dead Line**: 22 February 2026 - 8 March 2026
- **Completed**: under Development

---

## GitHub Badges

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/yasinarafatajad/focusflow-dashboard)
![GitHub repo size](https://img.shields.io/github/repo-size/yasinarafatajad/focusflow-dashboard)

---

## Tech Stack
- **Framework**: React
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

---

<!-- ## Features

- Modern Hero Section
- Featured & New released Product
- Footer
- Reach Products List Page
- Product Details Page
- Not Found Page
- CI/CD for Cpanel Deployment
---

## Reminder

- no DataBase
- no login 
- no admin
- no checkout
- no order -->

<!-- ---

## 📁 Project Structure
```txt
src/
├── assets/        # Static assets (images, icons)
├── components/    # Reusable UI components
├── pages/         # Application pages/views
├── index.css/        # Global styles
├── App.jsx
└── main.jsx
```
--- -->

## 🏗️ System Architecture

```mermaid
flowchart TD

    A["Root package.json<br/>(concurrently)"] --> B["CLIENT<br/>(Vite + React + TS)"]
    A --> C["SERVER<br/>(Express 5 + Node)"]

    B --> D["App.tsx (Router)"]
    D --> E["DashboardLayout"]
    E --> F["AppSidebar"]
    E --> G["TopNavbar"]
    E --> H["Pages (8)"]

    H --> H1["Index ✅"]
    H --> H2["AddTask ✅"]
    H --> H3["Projects 🚧"]
    H --> H4["Learning 🚧"]
    H --> H5["Analytics 🚧"]
    H --> H6["Calendar 🚧"]
    H --> H7["Settings 🚧"]

    B --> I["Dashboard Components (5)"]
    I --> I1["StatCards"]
    I --> I2["Charts"]
    I --> I3["StreakBadges"]
    I --> I4["CalendarHeatmap"]
    I --> I5["AlertsFocus"]

    C --> J["src/index.js"]
    J --> K["routes/Task.js"]
    K --> L["controllers/"]
    J --> M["config/db.js (MongoDB)"]
```

---

## Deployed

this website is deployed to shared hosting.

---

## Deployed
this website is deployed to cpanel. also intigrated CI/CD model for automation and utilise time of deployment process in update and upgrade.

**Deployment flow:**

Developer
↓ (push to main)
GitHub Actions
↓ (install dependencies & build)
Static Build Artifacts
↓ (FTP upload)
cPanel Hosting
↓ (serve static files)
End User (Browser)

---

## Screenshots

| Name | Screenshot |
|------|------------|
| Home Page | ![Home Page](screenshots/Desktop/Home_Desktop.png) |
| Product Details Page | ![Product Details Page](screenshots/Desktop/ProductDetails_Desktop.png) |
| ProductList Page | ![ProductList Page](screenshots/Desktop/ProductList_Desktop.png) |
| NotFound_Desktop Page | ![NotFound Page](screenshots/Desktop/NotFound_Desktop.png) |

---

## Prerequisites
- **Node.js** >= 18
- **npm** >= 9

---

## Installations:

### [1]: Clone the munna repository

```bash
git clone git@github.com:yasinarafatajad/munna.git;
cd munna
```

### [2] Install pnpm
```bash
npm install -g pnpm

```

### [3] Packege install
Install the required packages:
```bash
pnpm install

```
### [4] Development
Start the development with hot module replacement:
```bash
pnpm dev

```

### [5] Build for Production
Start the production :
```bash
pnpm build
    
```

---

## 👤 Author
**Yasin Arafat Azad**  
Full-Stack Web Developer (MERN)

---

## 📄 License
This project is licensed under the **MIT License**.  
See the `LICENSE` file for details.

---
