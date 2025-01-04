const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password Must be atleast 8 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast of 3 characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Number plate must be atleast of 3 characters'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity of vehicle must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle Type')
],
captainController.registerCaptain
);


router.get('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 8}).withMessage('Password must be of minimum length of 8 characters')
],
    captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;