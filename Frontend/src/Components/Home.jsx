import React from 'react';
import './Home.css';
import Form from '../pages/Form';

function Home() {
  return (
    <div className="home-container">
      <h1>URL Shortener</h1>
      <Form></Form>
    </div>
  );
}

export default Home;

