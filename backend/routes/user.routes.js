const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password Must be atleast 8 characters long')
],
    userController.registerUser
);

router.get('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 8}).withMessage('Password must be of minimum length of 8 characters')
],
    userController.loginUser
);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;