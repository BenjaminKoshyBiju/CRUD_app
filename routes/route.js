import express from 'express'
import mongoose from 'mongoose'

const route=express.Router()

const UserSchema=new mongoose.Schema({
    name:String,
    age:Number
})
const UserModel=mongoose.model("users",UserSchema)
route.get('/',(req,res)=>{
    
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(error){
        console.log(error)
    })
    })




export default route