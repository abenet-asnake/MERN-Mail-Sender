const nodemailer= require('nodemailer');

const sendEmail= async  (subject, message, send_to, sent_from,replay_to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: "587",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },


        tls:{
            rejectUnauthorized: false,
        }
      });
      
     const options={
        from:sent_from,
        to:send_to,
        subject:subject,
        html:message
     }

     // send Email

     transporter.sendMail(options, function(err,info){
        if (err) {
            console.log(err);
        }
        else{
            console.log(info)
        }
     })

};


module.exports =sendEmail;