import Register from "./pages/Register"
import Login from "./pages/Login"
import Form from "./pages/Form"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserWrapper from "./Wrapper/UserWrapper";


function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={
        <UserWrapper>
          <Form/>
        </UserWrapper>
        } />
    </Routes>
  );
}
 export default App;

