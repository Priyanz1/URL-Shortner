

import Register from "./pages/Register"
import Login from "./pages/Login"
import Form from "./pages/Form"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/Login" element={<Login />} />
      <Route path="/api/Register" element={<Register />} />
      <Route path="/api/create" element={<Form/>} />
    </Routes>
  );
}
 export default App;

