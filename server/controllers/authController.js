const { register, login } = require('../services/userServices');

const authController=require('express').Router();

authController.post('/register', async (req,res)=>{
      try {
           
           const result=await register(req.body.email,req.body.username,req.body.password);
           res.json(result)
      } catch (error) {
            res.status(400).json({
                  message:error.message,
            })
      }
})
authController.post('/login',async (req,res)=>{
      try {
            const result=await login(req.body.email,req.body.password);
            res.json(result);
      } catch (error) {
            res.status(401).json({
                  message:error.message,
            })
      }
})

module.exports=authController;