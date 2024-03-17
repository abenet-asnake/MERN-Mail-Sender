const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// route
app.get('/',(req, res) => {
    res.send("This Test For Emailing You");

});

 const port=process.env.PORT_NUMBER||3000;

 app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
 });