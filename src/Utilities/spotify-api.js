import axios from 'axios';

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

const authenticate = async () => {
    const authUrl = `(https://accounts.spotify.com/authorize);
    const response = await axios.get(https://accounts.spotify.com/authorize);
    return response.data;
  };
  
const getAccessToken = async (code) => {
  const tokenUrl = `();
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const data = `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}`;
  const response = await axios.post(tokenUrl, data, { headers });
  return response.data.access_token;
};

export { authenticate, getAccessToken };