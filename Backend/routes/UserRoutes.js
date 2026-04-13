
const express=require("express");
const { Login, Register } = require("../Controllers/AuthController");
const { body, validationResult } = require('express-validator');
const router=express.Router();

const registerValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const loginValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required')
];

router.post("/Register", registerValidation, Register);
router.post("/Login", loginValidation, Login);

module.exports = router;