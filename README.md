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
