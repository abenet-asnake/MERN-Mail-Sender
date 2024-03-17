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

const name="Abel";

// route
app.post('/api/sendemail', async (req, res) => {
  
    const {email} = req.body;

    try {
        const send_to=email;
        const sent_from= process.env.EMAIL_USERNAME;
        const replay_to=email;
        const subject="This Test Email WellCome";
        const message=`<h2> Hello ${name} </h2>
                          <p>Thank you for your register</p> 
                          <p>Regrads...</p>`

    await sendEmail(subject, message,send_to,sent_from,replay_to);
    res.status(200).send({success:true, message:"Email sent successfully"});
        
    } catch (error) {
        res.status(500).json(error.message);
    }

});

 const port=process.env.PORT_NUMBER||3000;

 app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
 });