import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import  sendEmail  from "../utils/sendEmail.js";
import cloudinary from "cloudinary";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged In Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged Out Successfully",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    console.log("getting user");
    const user = await User.findOne().select("-password -email");
    console.log(user)
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    const userMessage = `Hey, I am ${username}. My email is ${email}. My message is ${message}.`;

    await sendEmail(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const { name, email, password,  } = req.body;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addworkExperience = async (req, res) => {
  try {
    const { title,company, description, date } = req.body;

    const user = await User.findById(req.user._id);

    user.timeline.unshift({
      title,
      company,
      description,
      date,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Timline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const { projectLink, title, codeLink,image, description, techStack } = req.body;
    console.log(req.body)
    const user = await User.findById(req.user._id);

    // const myCloud = await cloudinary.v2.uploader.upload(image, {
    //   folder: "portfolio",
    // });
    user.projects.unshift({
      projectLink,
      title,
      codeLink,
      description,
      techStack,
      image
      // image: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addAbout = async (req, res) => {
  try {

    const {  title, imgUrl, description,  } = req.body;

    const user = await User.findById(req.user._id);

    // const myCloud = await cloudinary.v2.uploader.upload(image, {
    //   folder: "portfolio",
    // });
    user.about.unshift({
      title,

      description,
      imgUrl
      // image: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To About",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addSkill = async (req, res) => {
  try {

    const {  name, bgColor,  icon  } = req.body;

    const user = await User.findById(req.user._id);

    // const myCloud = await cloudinary.v2.uploader.upload(image, {
    //   folder: "portfolio",
    // });
    user.skills.unshift({
      name, bgColor,  icon
      // image: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added To Skills",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteAbout = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const about = user.about.find((item) => item._id == id);

    // await cloudinary.v2.uploader.destroy(about.imgUrl.public_id);

    user.about = user.about.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Abouts",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteworkExperience = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    user.workExperience = user.workExperience.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Timline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const project = user.projects.find((item) => item._id == id);

    await cloudinary.v2.uploader.destroy(project.image.public_id);

    user.projects = user.projects.filter((item) => item._id != id);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Projects",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};