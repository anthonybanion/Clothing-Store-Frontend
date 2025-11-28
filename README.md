# Clothing Store - E-commerce Web Application

A modern, responsive e-commerce web application built with React, featuring a complete CRUD system for managing clothing products and categories.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF)
![React Router](https://img.shields.io/badge/React_Router-7.9.5-CA4245)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- Features
- Technologies Used
- Project Structure
- Installation
- Environment Variables
- Available Scripts
- Database Schema
- Contributors
- License

## ✨ Features

### 🔐 Authentication

- User registration and login system
- Protected routes and session management
- Form validation and error handling

### 🛍️ Product Management (CRUD)

- Create: Add new clothing products to the catalog
- Read: Browse and view product details with pagination
- Update: Modify existing product information
- Delete: Remove products from the catalog
- Pagination: Efficient browsing of product listings

### 🏷️ Category Management

- Complete CRUD operations for product categories
- Category-based product filtering
- Organized product catalog structure

### 🎯 User Experience

- Single Page Application (SPA) with React Router
- Responsive design for all devices
- Modern UI with Tailwind CSS
- Interactive icons with React Icons
- Toast notifications for user feedback

### 🛠 Technologies Used

- Frontend Framework: React 19.1.1
- Build Tool: Vite 7.1.7
- Styling: Tailwind CSS 4.1.14
- Routing: React Router DOM 7.9.5
- Icons: React Icons 5.5.0
- Notifications: React Toastify 11.0.5
- Language: JavaScript (ES6+)
- Linting: ESLint

## Structure Folder

```text
src/
├─ assets/                # Static assets: images, icons, fonts
│  ├─ images/             # All image files
│  ├─ icons/              # SVG or icon files
│  └─ fonts/              # Custom fonts
├─ components/            # UI components organized by Atomic Design
│  ├─ atoms/              # Basic, indivisible components (Button, Input)
│  │  └─  Button/
│  ├─ molecules/          # Combinations of atoms (Card, FormField)
│  │  └─ Card/
│  ├─ organisms/          # Groups of molecules and atoms (Navbar, Footer)
│  │  └─ Navbar/
│  └─ templates/          # Page layouts (MainLayout, DashboardLayout)
│     └─ MainLayout/
├─ pages/                 # Final pages that use templates and organisms
│  └─ Home/
├─ hooks/                 # Custom React hooks for reusable logic
├─ context/               # React Context API providers and state
├─ routes/                # React Router setup and route definitions
├─ services/              # API calls, business logic, external services
│  └─ api.js
├─ utils/                 # Utility functions and helpers
├─ styles/                # Global styles, Tailwind config, CSS variables
│ └─ index.css
├─ App.jsx                # Main App component
└─ main.jsx               # React DOM render / entry point
```

## 🚀 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Steps to Run Locally

1. Clone the repository

```bash

git clone https://github.com/your-username/clothing-store.git
cd clothing-store
```

2. Install dependencies

```bash

npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory and configure the following variables:
   env

```bash
VITE_API_URL=your_api_url_here
VITE_STATIC_URL=your_static_files_url_here
VITE_PORT=5173
VITE_APP_NAME=Clothing-Store
VITE_NODE_ENV=development
```

4. Start the development server

```bash

npm run dev
```

5. Open your browser
   Navigate to http://localhost:5173 (or the port specified in your environment variables)

## ⚙️ Environment Variables

The application uses the following environment variables for configuration:

| Variable        | Description                 | Example                       |
| --------------- | --------------------------- | ----------------------------- |
| VITE_API_URL    | Backend API base URL        | http://localhost:5000/api     |
| VITE_STATIC_URL | URL for static file uploads | http://localhost:5000/uploads |
| VITE_PORT       | Development server port     | 5173                          |
| VITE_APP_NAME   | Application name            | Clothing-Store                |
| VITE_NODE_ENV   | Environment mode            | development                   |

## 📜 Available Scripts

- npm run dev - Starts the development server
- npm run build - Builds the app for production
- npm run lint - Runs ESLint to check code quality
- npm run preview - Previews the production build locally

## 🗃️ Database Schema

### Products Entity

- id - Unique identifier
- name - Product name
- description - Product description
- price - Product price
- category - Product category
- image - Product image URL
- stock - Available quantity
- createdAt - Creation timestamp

### Categories Entity

- id - Unique identifier
- name - Category name
- description - Category description
- image - Category image URL
- isActive - Category status

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
