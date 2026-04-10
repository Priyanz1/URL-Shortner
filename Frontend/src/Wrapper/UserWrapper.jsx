import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserWrapper({children}) {
    const token=localStorage.getItem('token');
    const [isloading,setisloading]=useState(true);
    const { user, setuser } = useContext(UserDataContext);
    const navigate=useNavigate();
   useEffect(()=>{
    if(!token){
      navigate("/api/Login");
      // return;
  }

  axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/create`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
      if (response.status === 200) {
        setuser(response.data); 
        setisloading(false);   
      }
    }).catch((err) => {
      console.error(err);
      localStorage.removeItem('token');
      navigate('/api/Login');
    });
   }, [token]);


   if(isloading){
    return(
      <div>is loading...</div>
    )
   }
  return (
   <>
   {children}
   </>
  )
}

export default UserWrapper;
