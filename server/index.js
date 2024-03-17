const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./email/sendEmail');
const dotenv=require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// route
app.get('/api/sendemail', async (req, res) => {
    res.send("This Test For Emailing You");
    const {email} = req.body;

    try {
        sendEmail
        
    } catch (error) {
        
    }

});

 const port=process.env.PORT_NUMBER||3000;

 app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
 });