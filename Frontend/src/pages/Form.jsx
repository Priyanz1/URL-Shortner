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
        'http://localhost:5000/api/create',
        { longurl: longUrl },          
        { withCredentials: true }     
      );

      setShortUrl(`http://localhost:5000/${response.data.data.shortUrl}`);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          URL Shortener 🚀
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="url"
            placeholder="Enter your long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Generate Short URL
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-gray-700 mb-2">
              Short URL:{" "}
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {shortUrl}
              </a>
            </p>
            <div className="flex justify-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Copy
              </button>
              <button
                onClick={handleRefresh}
                className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
              >
                Refresh
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 font-semibold text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
