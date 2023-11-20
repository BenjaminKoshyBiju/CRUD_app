import express from 'express'
import mongoConnect from './db/database.js'
import route from './routes/route.js'
import mongoose from 'mongoose'
import main from './db/database.js'

const app=express()
const port=3000


// const db =
//   "mongodb://localhost:27017/user";

// console.log(db);
// mongoose
//   .connect(db)
//   .then(() => {
//     console.log("connection successful");
//   })
//   .catch((err) => console.log(err))
//   app.use(express.json());

const TestSchema=new mongoose.Schema({
  name:String,
  age:Number
})


app.use(main)
// app.use(route)
app.listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})
