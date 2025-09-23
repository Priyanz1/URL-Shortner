import React from 'react';
import './Home.css';
import Form from '../pages/Form';
// import Register from '../pages/Register';
// import Login from '../pages/Login';

function Home() {
  return (
    <div className="home-container">
      <h1>URL Shortener</h1>
      <Form></Form>
    </div>
    // <Register/>
    // <Login></Login>
    // <div>hello welcome to the page</div>
  );
}

export default Home;

