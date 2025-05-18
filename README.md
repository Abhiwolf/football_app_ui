# football_app_ui
Football app ui using react, typescript and vite
# Football Explorer Frontend

A React-based frontend app built using Vite + TypeScript + Tailwind CSS to explore football teams, matches, players, and areas.

## Features
- List teams with stadium and founding year
- List matches filtered by area
- Player detail page
- Interactive filtering by area

## Tech Stack
- React + TypeScript
- Vite for fast builds
- Tailwind CSS for styling
- Axios for API communication
- React Router for navigation

## Project Structure
```
frontend/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── tsconfig.json
└── package.json
```

## Setup Instructions

### 1. Install dependencies
```bash
cd root project
npm install
```

### 2. Run the app
```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

Ensure your backend API is running at [http://localhost:8000](http://localhost:8000) for data to load.

## 🧪 Run Linting
```bash
npm run lint
```

---