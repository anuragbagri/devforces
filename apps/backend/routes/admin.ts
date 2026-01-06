import {  Router } from "express";

const adminRouter = Router();


adminRouter.post("/signin" , (req, res) => {
   const { email , password } =req.body;
});

adminRouter.post("/signup" , (req ,res) => {
    const { email , password  } = req.body;

});

export default adminRouter;