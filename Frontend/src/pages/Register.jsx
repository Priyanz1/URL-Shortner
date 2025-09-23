// // src/Register.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css'; // CSS file import karna

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [error, setError] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage("");
//         setError(false);

//         try {
//             const response = await axios.post('http://localhost:3000/api/Register', {
//                 name,
//                 email,
//                 password
//             }, {
//                 withCredentials: true
//             });

//             setMessage(response.data.msg);
//             setError(false);

//         } catch (err) {
//             setError(true);
//             if (err.response && err.response.data) {
//                 setMessage(err.response.data.msg || "Registration failed");
//             } else {
//                 setMessage("Something went wrong");
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <h2>Register</h2>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     className="input"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     className="input"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="input"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit" className="button">Register</button>
//                 <a href="/api/Login">Login to your account</a>
//                 {message && (
//                     <div className={`message ${error ? 'error' : 'success'}`}>
//                         {message}
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default Register;












// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError(false);

        try {
            const response = await axios.post(
                'http://localhost:3000/api/Register',
                { name, email, password },
                { withCredentials: true }
            );

            setMessage(response.data.msg);
            setError(false);

            // ✅ successful register ke baad redirect to login
            navigate("/api/Login");
        } catch (err) {
            setError(true);
            if (err.response && err.response.data) {
                setMessage(err.response.data.msg || "Registration failed");
            } else {
                setMessage("Something went wrong");
            }
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="button">Register</button>
                
                <Link to="/api/Login">Login to your account</Link>

                {message && (
                    <div className={`message ${error ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
