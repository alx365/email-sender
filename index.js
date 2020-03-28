// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');
// eslint-disable-next-line no-undef
const process = require('process');

var to;
var subject;
var body;

to = process.argv[2]
subject = process.argv[3]
body = process.argv[4]

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '--',
    pass: '--' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'fyou8575@gmail.com',
  to: to,
  subject: subject,
  text: body
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});