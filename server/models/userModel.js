import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "Please Enter Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        select: false,
    },

    skills: [{
    name:{
        type:String,
        trim:true
    },
    bgColor:{
        type:String,
    },

    icon:{
        public_id: String,
        url: String,
    },

    }],

    projects: [
    {
      projectLink: String,
      title: String,
      codeLink:String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: [
        {type:String}],
    },
    ],

    about:[ {
        title: String,
        description: String,
        imgUrl: {
        public_id: String,
        url: String,
        },
    }],

     workExperience:[{
        title:{
            type:'string'
        },
        company: {
            type:'string'
        },
        description: {
            type:'string'
        },
        date: Date,
    }],

    testimonials:[{
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
    }]
});

export const User = mongoose.model("User", userSchema);