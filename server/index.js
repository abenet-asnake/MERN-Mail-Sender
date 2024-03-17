const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
               require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());

 const port=3200;

 app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
 });