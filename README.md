# Feedback Pin Application

This is a simple web application that allows users to place feedback pins on a UI canvas. Users can click anywhere on the page to add feedback, and click existing pins to view or update feedback. Feedback is persisted in a backend SQLite database.

---

## Features

- Click on canvas to add feedback pins with text, which can be configured.
- View and update feedback by clicking existing pins.
- Feedback saved and loaded from a backend API using SQLite.
- Responsive and interactive UI built with React and MUI.
- I added some default text for better visualization. If you have something else, try it in App.jsx

---

## Repository Structure

- `backend/` — Node.js Express backend server, SQLite database (`pins.db`)
- `frontend/` — React frontend application built with Vite and Material-UI

---

## Prerequisites

- Node.js (v18 or newer recommended)
- npm (comes with Node.js)
- Ports 8080 and 8081 should be free

---

## Setup and Run

### Backend

1. Navigate to the backend folder:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the backend server:

   ```
   node index.js
   ```

> The backend API will be running at: `http://localhost:8081`

---

### Frontend

1. Open a new terminal and navigate to the frontend folder:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the frontend development server (runs on port 8080):

   ```
   npm run dev
   ```

> The frontend will be available at: `http://localhost:8080`

---

## Usage

- Open `http://localhost:8080` in your browser.
- Click anywhere on the large canvas area to add a feedback pin.
- Enter your feedback in the pop-up form and save.
- Pins will appear at the location clicked.
- Click on any existing pin to view or edit the feedback.
- Refresh the page to see saved pins loaded from the backend.
- In App.jsx file, there is a function named handleCanvasClick, you can use this to define on which component or level you want this functionality.

---

## Environment Variables

Environment variables for API URLs are configured in:

- `frontend/.env` (for frontend)
- As there are no tokens used, the .env file will also be there if you want to add some tokens as well. Uncomment the .env file from the .gitignore file.
  
Example:
```
VITE_API_BASE_URL=http://localhost:8081
```

Modify as needed if you change the backend port or location.

---

## Notes

- No additional database setup required; SQLite DB file is included.
- Make sure ports 8080 and 8081 are available before running.
- For production builds, the frontend can be built with `npm run build` and served separately.
- The project uses React functional components with hooks and Material-UI for UI.

---

## Troubleshooting

- **403 or permission denied pushing code:**  
  Make sure Git is using your personal GitHub credentials.

- **Port conflicts:**  
  Change ports in `vite.config.js` (frontend) or backend server config if needed.

- **Backend not saving pins:**  
  Check if `pins.db` file is writable and the backend server is running properly.

---

## Contact

For questions or demo requests, reach out to amankushwaha2001@gmail.com.

---
