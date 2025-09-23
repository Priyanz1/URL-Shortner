const express =require("express");
const router = express.Router();
// const UrlModel = require("../models/UrlModel");
// const { nanoid } = require('nanoid');
const { Link, Load } = require("../service");
const middleware = require("../middleware/Middleware");


// router.post("/api/create",middleware,Link); 
// router.get("/:url",middleware,Load); 

router.post("/api/create",Link); 
router.get("/:url",Load); 

module.exports = router; 
