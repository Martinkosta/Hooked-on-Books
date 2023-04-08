const User = require("../models/User");
const {hash,compare}=require('bcrypt');
const jwt=require('jsonwebtoken')

const secret='hgchgag';

async function register(email,username,password){

      const existing= await User.findOne({email}).collation({locale:'en',strength:2});

      if(existing){
            throw new Error('Email is taken')
      }
            const user=await User.create({
                  username,
                  email,
                  hashedPassword: await hash(password,10),
            })
         

            return creatToken(user);

}
async function login(email,password){
      const user= await User.findOne({email}).collation({locale:'en',strength:2});
      if(!user){
            throw new Error('Invalid email or password');
      }

      const match =await compare(password,user.hashedPassword);

      if(!match){
            throw new Error('Invalid email or password');
      }

      return creatToken(user);

}

function creatToken(user){
      const payload={
            _id:user._id,
            email:user.email,
            username:user.username,
      }

      return {
            _id:user._id,
            email:user.email,
            username:user.username,
            accessToken:jwt.sign(payload,secret)
      }
}
function parseToken(token){
      return jwt.verify(token, secret);
}

module.exports={
      register,
      login,
      parseToken,
}