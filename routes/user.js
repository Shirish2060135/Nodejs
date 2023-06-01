const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//User module
const User = require('../models/Users')
//login page
router.get('/login',(req,res)=> res.render('login'));
//register page
router.get('/register',(req,res)=> res.render('Register'));

// Register Handel
router.post('/register',(req,res) =>{
    const {name, email, password, password2}= req.body;
    let errors =[];
    // check required field 
    if(!name|| !email || !password|| !password2 ){
        errors.push({msg:'Please fill in all fields'});
    }
    //check Password match
    if(password !== password2){
        errors.push({msg:'Password does not match'});
    }
    //check password length
    if(password.length<6){
        errors.push({msg:'Password should be at least 6 character'});
    }
    if(errors.length>0){
        res.render('register',{
         errors,
         name,
         email,
         password,
         password2
        });
    }
    else{
        //Validation Passed
        User.findOne({email:email}).then(user =>{
            if(user){
                //user exist
                errors.push({msg:'Email is already registered'})
                res.render('register',{
                    errors,
                    name,
                    email,
                    password,
                    password2});

            }else{
                const newUser = new User({
                    name,
                    email,
                    password
                });
                console.log (newUser)
                res.send('Hello')
            }
        });
    
    }

    }); 

module.exports = router;