const express =require("express");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const Routes = require("./routes/Routes");  
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./connection/config/db");
connectDB();
// const Routes = require("./routes/Routes");
app.use("/",Routes);
app.listen(3000,()=>{
console.log("Server is running on http://localhost:3000")
})