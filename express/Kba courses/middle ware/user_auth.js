import jwt from "jsonwebtoken";

function user_middleware(req, res, next) {
    const token = req.cookies.kba_token;

    if (!token) {
        return res.status(401).json({ msg: "Token not found" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const role = decode.role;
        const email = decode.email
        if(role == "user"){
            next();
        }else{
            return res.status(401).json({msg: "no user access"})
        }
    } catch (err) {
        console.log("Invalid token");
        return res.status(401).json({ msg: "Invalid token" });
    }
}

export default user_middleware;