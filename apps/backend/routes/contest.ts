import { Router } from "express";

const contestRouter = Router();

contestRouter.get("/active" , (req,res) => {
   const {offset ,  pages } = req.body;
});

contestRouter.get("/finished" ,(req, res)=> {
  const {offset , pages } = req.body;
})

contestRouter.get("/:contestId",(req,res) => {
    const contestId  = req.query ;
});

contestRouter.get("/:contestId/:challengeId" ,(req, res) => {
    const challengeId = req.query;
})

// one route for leaderboard
contestRouter.get("/:leaderboard/:challengeId" , (req, res) => {

});

// one request for submitting the data 
contestRouter.post("/:submit/:challengeId" , (req, res) => {
    

});



export default contestRouter;