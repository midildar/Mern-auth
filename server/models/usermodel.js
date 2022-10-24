const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')
const { valid } = require('joi')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPass: {
        type: String,
        required: true
    },
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id},process.env.JWTPRIVATEKEY,{expiresIn: "60s"})
    return token
}

const userModel = mongoose.model("user",userSchema)

const validate  = (data) => {
    const schema = Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        userEmail:Joi.string().email().required().label("Email"),
        userPass:passwordComplexity().required().label("Password")
    })

    return schema.validate(data)
}

module.exports = {userModel,validate}