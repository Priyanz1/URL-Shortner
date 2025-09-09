const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const Register=async(req,res)=>{
    const {name,email,password}= req.body;
    const hash =await bcrypt.hash(password, 10);
    const User =await UserModel.create({
     name,
     email,
     password:hash,
    });
    res.json({ msg: "User registered successfully", User });
}

const Login=async(req,res)=>{
    const {email,password}= req.body;
    const user=await UserModel.findOne({email:email});
    if(!user){
       return res.json({msg:"user not found"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
   
    if(!isMatch){
        return res.json({msg:"password is wrong"});
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.cookie("token", token, {
        httpOnly: true,   
        secure: false,    
        sameSite: "lax"
      });
      res.json({msg:"Login successful"})
   
}

 module.exports = {Register,Login};