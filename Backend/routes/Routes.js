const express =require("express");
const router = express.Router();
// const UrlModel = require("../models/UrlModel");
// const { nanoid } = require('nanoid');
const { Link, Load } = require("../service");


router.post("/api/create",Link); 
router.get("/:url",Load); 

module.exports = router; 
