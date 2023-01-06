import mongoose from "mongoose"; 

const testimonialSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter name"],
        trim:true
    },
    company:{
        type:String,
        required: [true,"Please Company name"]
    },

    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    feedback:{
        type:String,
        required:[true,"Please Enter Feedback"]
    },
    //    user:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:"User",
    //     required:true,
    // },
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // }
});



export default mongoose.model("Testimonial",testimonialSchema);

