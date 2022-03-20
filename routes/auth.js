const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req,res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        console.log("request",req.body);
        
        const newUser = new User();
        newUser.username = username;
        newUser.email = email;
        newUser.password = hashedPassword;
        
        await newUser.save();
        res.send('registering done successfuly')
    } catch (err){
        res.status(500).json(err)
    }
})

// login

router.post('/login' , async (req,res) =>{
    try {
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;