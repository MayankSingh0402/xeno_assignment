const express = require('express')
const { default: mongoose } = require('mongoose')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "name is mandatory"],
        maxLength : [20,"length should be less than 20 characters"],
        minLength : [4,"length should be greater than 4 characters"],
        trim : true
    },
    email:{
        type : String,
        required : [true, "email is mandatory"],
        unique : true,
        unique : [true, "email is already exist"],
        lowercase : true
    },
    password:{
        type : String,
        // required : [true, "password is mandatory"],
        select : false
    },
},{
    timestamps : true
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    return next()
})
userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {id : this._id , email : this.email },
            process.env.SECRET,
            {expiresIn : '24h'}
        )
    }
}

module.exports = mongoose.model('user',userSchema);