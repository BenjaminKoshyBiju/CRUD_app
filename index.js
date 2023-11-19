import express from 'express'
import mongoose from 'mongoose'
import route from './routes/route.js'

const app=express()
const port=3000

const mongoConnect=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/user")
        console.log("DB Connection Successs!")

        
    }
    catch(error){
        console.log(error)
    }
};

app.use(route)
app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})
export default mongoConnect