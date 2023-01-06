import jwt from'jsonwebtoken';
import {User} from '../models/userModel.js';

const isAuthenticated =async(req,res,next)=>{
    try {
        // console.log(req.cookies);
        const {token}=req.cookies;
        console.log(`token ${token}`);
        if(!token){
            return next( res.status(400).json({
                success:false,
                message:'Please Login to access this resource'}));
        }
        // console.log("s")
        const decodedData=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decodedData)
        req.user=await User.findById(decodedData._id);
        // console.log(req.user);
        next();
        
    } catch (error) {
        console.log(`token finding error ${error}`);
        return res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}

export default isAuthenticated ;