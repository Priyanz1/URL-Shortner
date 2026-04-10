const express =require("express");
const router = express.Router();
const { Link, Load } = require("../service");
const { body, validationResult } = require('express-validator');
const middleware = require("../middleware/Middleware");

const createValidation = [
    body('longurl').isURL().withMessage('Invalid URL')
];

router.post("/api/create", middleware, createValidation, Link);
router.get("/api/create", middleware, (req, res) => {
    res.json({ msg: "token valid", user: req.user });
});
router.get("/:url", Load);

module.exports = router; 
