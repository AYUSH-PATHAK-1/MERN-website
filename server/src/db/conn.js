const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config({path:'./.env'});

const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log('Connection Successfull');
}).catch((e)=>{
    console.log('Connection Error',e);
})