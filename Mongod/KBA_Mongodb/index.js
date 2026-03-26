import express, { json } from 'express'
import dotenv from 'dotenv'
import { route } from './Route/userroute.js'

dotenv.config()

const app=express()
app.use(json())
app.use("/user",route)

app.listen(process.env.port,()=>{
    console.log(`Server is running at ${process.env.port}`);
    
});