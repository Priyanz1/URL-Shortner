const jwt = require("jsonwebtoken"); 

const AuthenticateToken = (req, res, next) => {
    let token = req.cookies.token;

    if (!token && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.slice(7);
        }
    }

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ msg: "Invalid token" });
        }
        req.user = user;
        next();
    });
};

module.exports = AuthenticateToken;