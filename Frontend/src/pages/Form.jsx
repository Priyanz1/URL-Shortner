

import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    if (!longUrl) return;

    try {
      

      const response = await axios.post(
        'http://localhost:3000/api/create',
        { longurl: longUrl },          
        { withCredentials: true }     
      );

      setShortUrl(`http://localhost:3000/${response.data.data.shortUrl}`);

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };
  const handleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl)
      .then(() => alert("Short URL copied to clipboard!"))
      .catch(() => alert("Failed to copy URL."));
  };


  const handleRefresh = () => {
    setLongUrl("");
    setShortUrl("");
    setError("");
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit">Generate Short URL</button>
      </form>

      {shortUrl && (
        <div className="result">
          Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          <button onClick={handleCopy} style={{ marginLeft: '10px' }}>Copy</button>
          <button onClick={handleRefresh} style={{ marginLeft: '5px' }}>Refresh</button>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Form;