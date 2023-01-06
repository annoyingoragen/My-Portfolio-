import mongoose from "mongoose"; 

const workExperienceSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter name"],
        trim:true
    },
    company:{
        type:String,
        required: [true,"Please Company name"]
    },

    desc:{
        type:String,
        required: [true,"Please enter description name"]
    },

});



export default mongoose.model("workExperience",workExperienceSchema);

