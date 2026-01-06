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
  // get the leaderboard info 

});

// one request for submitting the data 
contestRouter.post("/submit/:challengeId" , (req, res) => {
    // have rate limiting 
    // maximum 20 request  oer person 
    // forward the request to gpt 
    // store the response in sorted set and db .. 


});



export default contestRouter;