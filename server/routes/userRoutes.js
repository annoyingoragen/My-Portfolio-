import express from "express";
import { 
    addworkExperience,
    deleteworkExperience,  
    login,
    logout,
    getUser,
    myProfile,
    contact,
    updateUser,
    addProject,
    deleteProject,
    addAbout,
    addSkill,
    deleteAbout,}
 from "../controllers/userController.js";
import  isAuthenticated  from "../middleware/auth.js";
export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated, addworkExperience);

userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/about/add").post(isAuthenticated, addAbout);

userRouter.route("/admin/skill/add").post(isAuthenticated, addSkill);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteworkExperience);

userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);


userRouter.route("/admin/about/:id").delete(isAuthenticated, deleteAbout);

userRouter.route("/contact").post(contact);


export default userRouter;