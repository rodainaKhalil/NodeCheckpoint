//Installed npm
var nodemailer = require('nodemailer');

//Creating Transporter
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword',
    }
});

//Email Content
var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'youremail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
};

//Sending The Email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

