require('dotenv').config();
const express =require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");

const Routes = require("./routes/Routes");  
const UserRoutes = require("./routes/UserRoutes");
const app = express();
app.use(cookieParser());

app.use(cors({
    origin: true,  // Allow all origins for deployed app
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", UserRoutes);
app.use("/", Routes);

module.exports=app;