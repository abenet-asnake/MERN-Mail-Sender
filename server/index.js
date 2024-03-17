const express= require('express');
const dotenv=require('dotenv').config();

const app = express();

 const port=3200;

 app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
 });