const { Router } = require("express");
const newRouter = Router();
const asyncHandler = require("express-async-handler");

const db = require("../db");


newRouter.get('/',(req,res)=>{
    res.render('form',{title: 'New Message'});
});
newRouter.post('/',(req,res)=>{
    let message = req.body.message;
    let author = req.body.author;
    // messages.push({ text: message, user: author, added: new Date() });
    db.addMessages(message,author);
    res.redirect("/");
})
module.exports = newRouter;

