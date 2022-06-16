const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    async register (req, res) {

        const duplicate = await User.findOne({
            $or: [
                {email: req.body.email},
                {username: req.body.username}
            ]
        })
        if(duplicate) {
            res.status(403).send({
                message: 'User already exists'
            })
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPW = await bcrypt.hash(req.body.password, salt)

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPW,
            })
            const result = await user.save()

            const {password, ...data} = await result.toJSON()      //Deconstruct the data to exclude password

            res.send(data)
        }
    },
    async login(req, res) {
        const user = await User.findOne({email: req.body.email})

        if(!user) {
            return res.status(404).send({
                message: 'user not found'
            })
        }


        if (!await bcrypt.compare(req.body.password, user.password)){
            return res.status(400).send({
                message: 'invalid credentials'
            })
        }

        const token = jwt.sign({_id: user._id}, process.env.USER_SECRET_TOKEN)
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 //1 Day
        })

        res.status(200).send(user)
    },
    async logout(res, req) {
        res.cookie('jwt', '', {maxAge: 0})
        res.send({
            message: "Success"
        })
    }
}