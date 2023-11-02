const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
const User=require("../src/model/userSchema");
dotenv.config({path:'./.env'});


const authenticate=async(req,res,next)=>{
    

        try{
                const token=req.cookies.jwt;
                const verifyToken=jwt.verify(token,process.env.SECREAT_KEY);
                const rootuser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
                

            if(!rootuser){
                console.log("USER NOT FOUND");
            }else{
                req.token=token;
                req.rootuser=rootuser;
                req.userId=rootuser._id;

                console.log(req.userId);

                next();
            }

        }catch(e){
            console.log(e);
            res.status(401).send(e);
        }

}


module.exports=authenticate;