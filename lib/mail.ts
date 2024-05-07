var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------//
export async function sendMail(subject: string, email: string, text: string) {
  const modifiedSubject = `Portfolyo iletişim: ${subject}`;
  const modifiedContent = `Portfolyondan yeni mesaj geldi! \n\nGönderen: ${email}\n\n${text}`;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PWD,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_FORWARD_EMAIL,
    subject: modifiedSubject,
    text: modifiedContent,
  };

  transporter.sendMail(mailOptions, function (error: Error, info: any) {
    if (error) {
      throw new Error(error.message);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
