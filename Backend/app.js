// require('dotenv').config();
const express =require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
// require('dotenv').config(); 

const Routes = require("./routes/Routes");  
const UserRoutes = require("./routes/UserRoutes");
const app = express();
app.use(cookieParser());

app.use(cors({
    origin: 'https://url-shortner-frontend-nine-zeta.vercel.app',
    // credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UserRoutes);
app.use("/api", Routes);


module.exports=app;