import jwt from "jsonwebtoken"

function authentication(req,res,next){
    const cookie= req.headers.cookie;
    console.log(req.headers.cookie);

    if(cookie){
        const [name,token]=cookie.trim().split('=')
        console.log("name",name);
        console.log("token",token);

        if (name=='authToken'){
            const decode= jwt.verify(token,process.env.Secret_Key)
            console.log(decode);
            req.name=decode.UserName;
            req.role=decode.UserRole;
            next();
            
        }
        
        else{
            res.status(401).json({msg:"Unauthorised Access"})
        }
    }
    
}

export {authentication}