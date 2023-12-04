const { transporter } = require("../libs/emailConfig");

const SendEmail = async (userEmail, subject, html) => {
  try {
    const mailOptions = {
      from: transporter.senderEmail,
      to: userEmail,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
  }
};
function TemplateEmail(email, details, token, url = "confirmacion_correo/") {
  return `
  <head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    #email___content {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin-bottom: 20px;
    }

    h2 {
      color: #333;
    }

    a {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007BFF;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>

<body>
  <div id="email___content">
    <img src="*" alt="Rc service Logo">
    <h2>Hola <span style="font-weight: bold">${email}</span></h2>
    <p>${details}</p>
    <a target="_blank" href="http://localhost:5173/${url}${token}">Haz clic aquí para continuar</a>
  </div>
</body>
    `;
}

module.exports = { SendEmail, TemplateEmail };
