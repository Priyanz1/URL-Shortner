// // import axios from 'axios';
// // import React, { useState } from 'react'

// // function Login() {
// //   const [email,setemail] = useState();
// //   const [password,setpassword] = useState();
// //   const [message, setMessage] = useState("");
// //   const handleSubmit =(e)=>{
// //     e.preventDefault();

// //     const response = axios.post('http://localhost:3000/api/Login', {
// //                 email,
// //                 password
// //             }, {
// //                 withCredentials: true
// //             });
// //             setMessage(response.data.msg);
// //   }
    
// //   return (
// //     <div>
// //   <form onSubmit={(e)=>{handleSubmit(e)}}>
// //     <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder='Type Email' />
// //     <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Type Password' />
// //     <button type='submit'>Click me</button>
// //     {message && (
// //                     <div className={`message ${error ? 'error' : 'success'}`}>
// //                         {message}
// //                     </div>
// //                 )}
// //   </form>
// //     </div>
// //   )
// // }

// // export default Login






// import axios from 'axios';
// import React, { useState } from 'react';
// import './Login.css';


// function Login() {
//   const [email, setEmail] = useState('');           // initialize as empty string
//   const [password, setPassword] = useState('');     // initialize as empty string
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState(false);        // add error state

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setError(false);

//     try {
//       const response = await axios.post(
//         'http://localhost:3000/api/Login',
//         { email, password },
//         { withCredentials: true }   // allow cookies
//       );

//       setMessage(response.data.msg);
//       setError(false);
//     } catch (err) {
//       setError(true);
//       if (err.response && err.response.data) {
//         setMessage(err.response.data.msg || 'Login failed');
//       } else if (err.request) {
//         setMessage('No response from server. Check CORS or server status.');
//       } else {
//         setMessage(err.message || 'Something went wrong');
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Type Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Type Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>

//         {message && (
//           <div className={`message ${error ? 'error' : 'success'}`}>
//             {message}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default Login;

