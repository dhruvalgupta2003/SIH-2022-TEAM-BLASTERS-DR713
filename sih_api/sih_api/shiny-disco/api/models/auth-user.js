const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi'); //used for validation 
const passwordComplexity = require('joi-password-complexity'); 


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id},process.env.JWT_SEC,{expiresIn: "7d"});
    return token
};

const AuthUser = mongoose.model("authuser",userSchema);

// Adding validation

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
};

module.exports ={AuthUser , validate};