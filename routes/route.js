import express from 'express'
import mongoose from 'mongoose'
import ejs from 'express'

const route=express.Router()

const UserSchema=new mongoose.Schema({
    name:String,
    age:Number
})
const UserModel=mongoose.model("user",UserSchema)
route.get('/user',(req,res)=>{
    res.render('reg.ejs')
    })

// route.post('/create',(req,res))=>{
//     let inputData= req.body;
//     insertModel.createData(inputData, function(data){
//     res.render('reg.ejs')
//     })
    





export default route