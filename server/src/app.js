const express=require("express");
const app=express();
require("./db/conn");
const cookieParser=require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
// const User=require('./model/userSchema');

app.use(require('./router/auth'));

const port=process.env.PORT || 5000;


// app.get("/",(req,res)=>{
//     res.send("hello pathak")
// });


app.listen(port,()=>{
    console.log(`Server is Running on the Port no ${port}`);
})