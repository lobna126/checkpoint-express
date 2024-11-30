const express=require('express')
const pageRoutes=require("./public/routes/pageRoutes");
const app=express();
const timeMid=require("./middlewares/timeMiddleware")

app.use(express.static(__dirname+"/public"))
app.use(timeMid,pageRoutes);
app.set("view engine", "ejs")
app.set('views', __dirname+"/views");

I

app.listen(5000,()=>console.log('Running'));