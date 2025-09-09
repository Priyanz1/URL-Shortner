import React from 'react';
import './Home.css';
import Form from '../pages/Form';
import Register from '../pages/Register';

function Home() {
  return (
    <div className="home-container">
      <h1>URL Shortener</h1>
      <Form></Form>
    </div>
    // <Register/>
  );
}

export default Home;

