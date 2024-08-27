const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "carreirassenai@gmail.com",
        pass: "guze ddfq pbwn fqfd",
    },
});

exports.enviarCodigo = (req, res) => {
    const { email } = req.body;

    var codigo = '';

    for (let i = 0; i < 6; i++) {
        let random;
        random = Math.floor(Math.random() * 10);
        codigo += random.toString();
    }

    req.session.redefinicao = {
        email: email,
        codigo: codigo
    }

    const corpo =
        `
    <div style="font-family: Arial, Helvetica, sans-serif;">
        <!-- <img style="width: 200px; margin: 10px;" src="http://localhost:3000/src/assets/logo.png"> -->
        <h1>Carreiras  🐝</h1>
        <strong>Olá, Tudo bem? <br> <br></strong>
        Foi solicitado uma redefinição de senha para este endereço de e-mail. <br> <br>
        O código para redefinição é <strong>${codigo}</strong> <br> <br>
        Caso você não tenha feito a solicitação, desconsidere este e-mail. <br> <br>
        Atenciosamente, Carreiras.<br> <br>
        <small><a href="https://www.carreiras.com.br" target="_blank">www.carreiras.com.br</a></small> <br> <br>
        <img src="https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/ogEA4yO0ABAAmo65FJIBCfhgZDzn2XATBNuqNE~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1737834910&x-signature=4Q6YZ0H6WjN7HLqEDXUGxNGr%2Fq0%3D">
    </div>
    `;

    async function main() {
        const info = await transporter.sendMail({
            from: '"Carreiras" <carreirassenai@gmail.com>',
            to: email,
            subject: "Redefinição de Senha",
            html: corpo
        });

        console.log("Message sent:", info.accepted);
    }
    main().catch(console.error);

    res.json({ codido: codigo });
}

exports.validarCodigo = (req, res) => {
    const dados = {
        email: req.body.email,
        codigo: req.body.codigo
    }

    console.log(req.session.redefinicao)
    console.log(dados)

    if (dados.email === req.session.redefinicao.email && dados.codigo === req.session.redefinicao.codigo) {
        return res.json({ success: true })
    } else {
        return res.status(404).json({ error: 'Código incorreto!' })
    }
}