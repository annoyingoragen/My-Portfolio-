import express  from "express";
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary';
import fileUpload from "express-fileupload";
import path from 'path';

const __dirname = path.resolve();



const app=express();
dotenv.config();

app.use(bodyParser.json({limit:'50mb',extended:true}));

app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
const corsOptions ={
  origin:'https://fatimaaliportfolio.web.app', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(fileUpload());



const PORT=process.env.PORT ||5000;
app.get('/',(req,res)=>{
  res.send('APP IS RUNNING');
})
app.use('/',userRoutes);



// app.use(express.static(path.join(__dirname,"../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname ,"../client/build/index.html"));
//   });

// app.use(errHandler);




mongoose.connect(process.env.CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology: true,
 
})
.then(()=>app.listen(PORT,()=>{console.log(`server running ${PORT}`)}))
.catch((error)=>console.log(`main error ${error.message}`));

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})

// process.on("unhandledRejection",err=>{
//   console.log(`Error: ${err.message}`);
// })