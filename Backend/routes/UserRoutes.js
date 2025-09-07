// const express=require("express");
// const router=express.Router();
// const UserModel = require("../models/UserModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// router.post("/api/Register",async(req,res)=>{
//        const {name,email,password}= req.body;
//        const hash = await bcrypt.hash(password, 10);
//        const User =await UserModel.create({
//         name,
//         email,
//         password:hash
//        });
//        res.json({ msg: "User registered successfully", User });
// })

// router.post("/api/Login",async(req,res)=>{
//     const {email,password}= req.body;
//     const user=await UserModel.findOne({email:email});
//     if(!user){
//        return res.json({msg:"user not found"});
//     }
//     const isMatch = await bcrypt.compare(password,user.password);
   
//     if(!isMatch){
//         return res.json({msg:"password is wrong"});
//     }
//     const token=jwt.sign({id:user._id},"secretkey");
//     res.cookie("token", token, {
//         httpOnly: true,   
//         secure: false,    
//         sameSite: "strict"
//       });
//       res.json({msg:"Login successful"})
   
// })

// module.exports = router;




const express=require("express");
const { Login, Register } = require("../Controllers/AuthController");
const router=express.Router();
router.post("/api/Register",Register)

router.post("/api/Login",Login)

module.exports = router;