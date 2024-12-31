const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const Port = 3456;
const assetsPath = path.join(__dirname,"public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).sendFile(path.join(__dirname,"static","404.html"));
});

app.listen(Port,()=>{
    console.log("Listening at: http://localhost:"+Port+"/");
});