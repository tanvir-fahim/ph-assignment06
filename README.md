# 🛠️ DigiTools | Premium Marketplace for Creators

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**DigiTools** is a high-performance, fully responsive digital product marketplace. Designed for creators and professionals, it features a seamless product discovery experience, dynamic cart management, and a modern UI powered by DaisyUI.

---

## 🚀 Core Features

### 1. Dynamic Product Explorer
Toggle effortlessly between the **Product Gallery** and your **Shopping Cart**. The main section uses a state-driven navigation system that allows users to browse 10+ premium tools without page reloads, providing a smooth, app-like experience.

### 2. Smart Cart Management
A fully functional shopping ecosystem where users can add products, view real-time item counts in the **Navbar**, and manage selections. The checkout process is streamlined with a "one-click" clear function to simulate a professional purchase flow.

### 3. Responsive 3-Column Layout
Built with a mobile-first approach, the marketplace adapts from a detailed 3-column grid on desktops to a clear, stacked view on mobile devices. Every card includes dynamic tags (Popular, New, Best Seller) and detailed feature lists to drive user engagement.

---

## 🛠️ Technology Stack

The project is built using a modern frontend stack focused on performance and developer efficiency:

* **Core Framework:** [React.js](https://reactjs.org/) (Functional Components & Hooks)
* **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
* **Logic:** JavaScript (ES6+)
* **Icons:** [Lucide React](https://lucide.dev/) for crisp, scalable vector graphics
* **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/introduction) for real-time user feedback
* **Data Handling:** Local JSON architecture for product attributes and features

---

## 📦 Product Data Structure
The application consumes a structured JSON format to render product cards dynamically:

```json
{
  "id": "dt-001",
  "name": "Pro Designer Suite",
  "description": "The ultimate toolkit for modern UI/UX designers.",
  "price": 49,
  "period": "monthly",
  "tag": "Best Seller",
  "tagType": "popular",
  "features": ["100+ templates", "ATS optimization", "Export to PDF"],
  "icon": "Palette"
}