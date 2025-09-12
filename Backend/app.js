const express =require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require("cookie-parser");

dotenv.config();

const Routes = require("./routes/Routes");  
const UserRoutes = require("./routes/UserRoutes");
const app = express();
app.use(cookieParser());
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',   // frontend ka address
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./connection/config/db");
connectDB();
// const Routes = require("./routes/Routes");
app.use("/",UserRoutes);
app.use("/",Routes);
app.listen(3000,()=>{
console.log("Server is running on http://localhost:3000")
})