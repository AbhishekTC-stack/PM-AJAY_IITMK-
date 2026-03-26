import { Router } from "express"
import { course_data } from "./adminroute";


const course_router=Router()



//   user.get("/getCourseByName",(req,res)=>{
//     try{
//         console.log(req.query);
//         const key= req.query.CourseName;
//         try{
//         const result =course.get(key)
//         if(result){
//             res.status(200).json({result})
//         }
//         else{
//             res.status(404).json({msg:"Course Not Found"})
//         }
//     }
//     catch{
//         res.status(400).json({msg:"Something went wrong"})
//     }
//     }
//     catch{
//         res.status(400).json({msg:"Something went wrong"})
//     }
//   })

//using params
course_router.get("/getCourseByName/:CourseName",(req,res)=>{
    try{
        console.log(req.params);
        const key= req.params.CourseName;
        console.log(key)

        try{
        const result =course_data.get(key)
        console.log(result);
        
        if(result){
            res.status(200).json({result})
        }

        else{
            res.status(404).json({msg:"Course Not Found"})
        }
    }
    catch{
        res.status(400).json({msg:"Something went wrong"})
    }
    }
    catch{
        res.status(400).json({msg:"Something went wrong"})
    }
  })

  
export default course_router