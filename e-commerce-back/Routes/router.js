const express=require('express')

const productController=require('../controllers/productController')

const userController=require('../controllers/userController')

const router=new express.Router()

router.get('/products/all',productController.getAllProductcontrollers)

router.get('/product/view/:id',productController.getAproduct)

// register

router.post('/user/register',userController.registerController)

// login using post

router.post('/user/login',userController.loginController)

module.exports=router