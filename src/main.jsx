import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

  ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

const fetchTracks = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      {
        headers: {
          Authorization: 'BQATYhb6aXd3xhaCouXdoaEUee_WT_DK04aL7BKJzX7YHUHsI9LatYQRW8qkozw6ClqL7i6SAUqv18QJwudp6lrTOThU9_wZ3jl971-DJaGSJxH9_luCJagifOg0uKcMcyHVHi7kO1Ptght78L__ntx7xh67lIKJPz858rnFgDqk5TMgA8cMbPgSYQLicSDi8P8sz--LwHf2nQ',
        },
      }
    );

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    if (data.tracks.items.length === 0) {
      setErrorMessage('No tracks found. Please try a different search.');
    } else {
      setTracks(data.tracks.items);
      setErrorMessage('');
    }
  } catch (error) {
    setErrorMessage('An error occurred while fetching tracks. Please try again.');
    console.error(error);
  }
};


