const express= require('express');
               require('dotenv').config();

const app = express();

 const port=3200;

 app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
 });