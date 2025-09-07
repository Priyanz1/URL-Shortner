const AuthenticateToken=(req,res,next)=>{
    const token=req.cookies.token;
      
    if (!token) {
        return res.json({ message: "No token provided" });
    }

    JsonWebTokenError.verify(token,`${process.env.JWT_SECRET}`,(err,user)=>{
  if(err){
    return res.json({msg:"invalid token"});
  }
  req.user=user;
  next();
    })
}


module.exports = AuthenticateToken;