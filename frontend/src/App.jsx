import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data from FastAPI backend
    fetch('http://localhost:8000/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setMessage(data.message)
        setError(null)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setError('Failed to fetch data from API')
        setMessage('')
      })
  }, [])

  return (
    <div className="App">
      <h1>Camphand - React + FastAPI</h1>
      <div className="card">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <p className="message">{message}</p>
        )}
      </div>
      <p className="read-the-docs">
        The message above is fetched from the FastAPI backend
      </p>
    </div>
  )
}

export default App
