import { resolve } from "bun";
import {  Router } from "express";

const userRouter = Router();

userRouter.post("/signin" , (req, res) => {
   // simple auth logic using email and opt
});

userRouter.post("/signup" , (req ,res) => {
   //  signup route 
});

export default userRouter;
