const { Router } = require('express');
const indexRouter = Router();
const db = require("../db");


// const messages = [
//     {
//       text: "Hi there!",
//       user: "Amando",
//       added: new Date()
//     },
//     {
//       text: "Hello World!",
//       user: "Charles",
//       added: new Date()
//     }
//   ];
  
  indexRouter.get('',(req,res)=>{
    res.render("index", {messages : db.messages});
  })

  indexRouter.get('/message/:user',(req,res)=>{
    let user = req.params.user;
    let messageFull;
    for(let j=0;j<db.messages.length;j++){
        if(db.messages[j].user==user){
            messageFull = db.messages[j];
        }
    }
    res.render("individual", {message: messageFull});
  })

  module.exports = indexRouter;
