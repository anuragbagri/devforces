import express from "express";
import adminRouter from "./routes/admin"
import userRouter from "./routes/user";
import contestRouter from "./routes/contest";
const app = express();


// parse all incomming requests 
app.use(express.json()); 

app.use("/home" , userRouter);
app.use("/contest" , contestRouter);
app.use("/admin" , adminRouter);

app.listen(5173 , ()=>{
    console.log("listening on the port 5173")
});


