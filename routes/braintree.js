const express = require('express')
const router = express.Router();
const {requireSignin, isAuth,isAdmin}=require('../controllers/auth');
const { userById } = require('../controllers/user');
const {generateToken,processPayment} = require('../controllers/braintree')
router.get('/braintree/getToken/:userID',requireSignin,generateToken)
router.post('/braintree/payment/:userID',requireSignin,processPayment)
router.param('userId',userById)
module.exports = router;