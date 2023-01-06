import mongoose from "mongoose"; 

const skillSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter name"],
        trim:true
    },
    bgColor:{
        type:String,
    },

    icon:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },

});



export default mongoose.model("Skill",skillSchema);

