import nodemailer from 'nodemailer';
const sendEmail=async(message)=>{


    const  transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        service:process.env.SMPT_SERVICE,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        }
    });


    const mailOptions={
        from:process.env.SMPT_MAIL,
        to:"Fatimaaliforwork@gmail.com",
        subject:"options.subject",
        text:message,
    };

    await transporter.sendMail(mailOptions);
}


export default sendEmail;