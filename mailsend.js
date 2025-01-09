const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(
    {
    secure:true,
    host:'smtp.gmail.com',
    post:465,
    auth:{
        user:'swarali.numetry@gmail.com',
        pass:'sxxvnfxsyoyxvaxk'
    }
}
);
function sendMail(to,sub,msg){
    transporter.sendMail({
        to:to,
        subject:sub,
        html:msg
    });
    console.log("Email sent");
    
}
sendMail('swarali.numetry.gmail.com','This is Subject','This is TEXT MSG')