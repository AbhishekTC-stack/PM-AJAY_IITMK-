import {Router} from 'express'
import bcrypt from 'bcrypt'

const route=Router()
const user=new Map()

route.get("/homepage",(req,res)=>{
    res.send("Welcome to home page")
})

route.get("/contactus",(req,res)=>{
    res.send("Welcome to Contact page")
})

route.get("/courses",(req,res)=>{
    res.send("Welcome to Course page")
})

route.get("/learnmore",(req,res)=>{
    res.send("Welcome to Learmore page")
})

route.post("/addcourse",(req,res)=>{
    try{
        const {coursename,courseid,coursetype,description,price}=req.body
        console.log(coursename);
        console.log(courseid);
        console.log(coursetype);
        console.log(description);
        console.log(price);
        res.send("Course Added")  
    }
    catch{
        res.send(error);
        
    }
})


route.post("/signup",async(req,res)=>{


    try{
         const {name,email,password,price}=req.body

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(price);
    

    try{
        const newpassword=await bcrypt.hash(password,10)
        console.log(newpassword);

        const result=user.get(email)
        if(result){
            res.json({msg:"User already exists"})
        }
        else{
            user.set(email,{name,newpassword,price})
            res.status(201).json({msg:"User Created"})
        }
        
    }
    catch{
        res.status(400).json({msg:"Something went wrong"})
    }
    }
   catch{
            res.status(404).json({msg:"Server Error"})

   }
    
    
})

route.post("/login",async(req,res)=>{
    
        const {email,password}=req.body

        console.log(email);
        console.log(password);

    const result=user.get(email)
    if(!result){
        res.json({msg:"User Not Found"})
    }
    const valid= await bcrypt.compare(password, result.newpassword)
    console.log(valid);
    if(valid){
        res.status(200).json({msg:"SignedUp succesfully"})
    }
    else{
        res.status(400).json({msg:"Incorrect Password"})

    }

    
})

route.post("/updatecourse",(req,res)=>{
    try{
        const {coursename,coursetype,description,price}=req.body
        console.log(coursename);
        console.log(coursetype);
        console.log(description);
        console.log(price);
        res.send("Course Updated")  
    }
    catch{
        res.send(error);
        
    }
})
export {route}