// import nodemailer module
const nodemailer = require('nodemailer');

// create transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply.PetConnect@gmail.com',
    pass: process.env.MAIL_PW
  }
});

// template for mail options
const mailOptions = {
  from: 'noreply.PetConnect@gmail.com',
  to: 'user.email@email.com',
  subject: 'Email Subject',
  text: 'Email Body'
};

// mailer object
const mailer = {
  sendMail(mailOptions) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

module.exports = mailer;