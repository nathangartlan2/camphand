# camphand

A full-stack application with a React frontend (built with Vite) and a Python FastAPI backend.

## Project Structure

```
camphand/
├── backend/          # Python FastAPI backend
│   ├── main.py      # FastAPI application
│   └── requirements.txt
├── frontend/         # React frontend with Vite
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Features

- React frontend with Vite development server
- Python FastAPI backend with CORS support
- GET API endpoint that returns "Hello API"
- Frontend fetches and displays the API response

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install npm dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## Running the Application (For Development)

1. **Start the Backend** (in one terminal):

   ```bash
   cd backend
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start the Frontend** (in another terminal):

   ```bash
   cd frontend
   npm run dev -- --mode dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

You should see "Hello API" displayed on the page, which is fetched from the FastAPI backend.

## API Endpoints

- `GET /api` - Returns a JSON response with a message: `{"message": "Hello API"}`

## Technologies Used

- **Frontend**: React 18, Vite 6
- **Backend**: FastAPI 0.115.0, Uvicorn 0.31.0
- **CORS**: Configured to allow requests from the Vite dev server (port 5173)
