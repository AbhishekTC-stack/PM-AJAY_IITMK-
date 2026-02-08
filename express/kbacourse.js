import { Router } from "express";
const router=Router();

router.get("/home",(req,res)=>{
    res.send("Welcome to kba Courses")
});
//login page
router.post("/login",(req,res)=>{
    try{
        const{email,password}=req.body;
        console.log(email);
        console.log(password);
        res.status(201).send("Login Succesfully");
    }
    catch{res.send("error")}
});

//Signup
router.post("/Signup",(req,res)=>{
    try{
        const{email,password,price}=req.body;
        console.log(email);
        console.log(password);
        console.log(price);

        res.status(201).send("Sign Up Succesfully");
    }
    catch{res.send("error")}
});

//addcourse
router.post("/Add course",(req,res)=>{
    try{
        const{courseid,coursename,coursetype,description,price}=req.body;
        console.log(courseid);
        console.log(coursename);
        console.log(coursetype);
        console.log(description);
        console.log(price);



        res.status(201).send("Added course Succesfully");
    }
    catch{res.send("error")}
});

//updatecourse
router.post("/Update course",(req,res)=>{
    try{
        const{coursename,coursetype,description,price}=req.body;
        console.log(coursename);
        console.log(coursetype);
        console.log(description);
        console.log(price);



        res.status(201).send("Updated course Succesfully");
    }
    catch{res.send("error")}
});

export{router};

