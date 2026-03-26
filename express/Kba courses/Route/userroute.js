import { Router } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const user= new Map()

const userroute=Router()

userroute.get("/",(req,res)=>{
    res.send("Routing")
})

userroute.get("/aboutus",(req,res)=>{
    res.send("About us")

})

userroute.get("/contact",(req,res)=>{
    res.send("Contact us")
})

userroute.post("/signup",async(req,res)=>{
    try{
        const {FirstName,LastName,UserName,Password,UserRole}=req.body
        console.log(UserName);

        try{
            const newPassword= await bcrypt.hash(Password,10)
            console.log(newPassword);

            const result= user.get(UserName)
            if(result){
                res.status(400).json({msg:"User Already exists"})
            }
            else{
                user.set(UserName,{FirstName,LastName,newPassword,UserRole})
            }
            res.status(200).json({msg:"Signup Successful"});
            
        }

        catch{
                res.status(404).json({msg:"Something went wrong"})
        }
        
    }
    catch{
        res.status(500).send(error)
    }
})

// route.post("/signup",(req,res)=>{
//     try{
//         const{username, password, emailid}= req.body

//         console.log(username);
//         console.log(password);
//         console.log(emailid);
//         res.status(201).send("Sign Up Successful")
        
//     }
//     catch{
//         res.send(error)
//     }
// })

userroute.post("/login",async(req,res)=>{
    const {UserName,Password}=req.body
    const result= user.get(UserName);
    if(!result){
        res.status(404).json({msg:"This user does not exist"})
    }
    const valid= await bcrypt.compare(Password,result.newPassword)
    console.log(valid);

    if(valid){
        const token= jwt.sign({UserName,UserRole:result.UserRole},process.env.Secret_Key,{expiresIn:'1h'});
        console.log(token);

        if(token){
            res.cookie('authToken',token,{
                httpOnly:true
            })
            res.status(201).json({msg:"Login Successfull"})
        }
        else{
            res.status(400).json({msg:"Something went wrong in token generation"})
        }
        
    }
    else{
        res.status(400).json({msg:"Incorrect Password"})
    }

})



// route.post("/login",(req,res)=>{
//     try{
//         const{username,password}=req.body

//         console.log(username);
//         console.log(password);
//         res.status(200).send("Login Successful!!")
//     }
//     catch{
//         res.send(error)
//     }
        
    
// })




export default userroute