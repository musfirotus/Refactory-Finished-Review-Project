const { authors } = require("../models") // Models
const { registerValidation, loginValidation } = require("../../validation") // Validasi
const bcrypt = require("bcryptjs") // Generate hash password
const jwt = require('jsonwebtoken') // Mengambil token
const nodemailer = require('nodemailer') // Mengirim email
const cron = require('node-cron') // Task queue
const handlebars = require('handlebars') // Element replace
const fs = require('fs') // Untuk readfile
const response = {
  status: false,
  message: "",
  data: [],
};

class LoginController {

  static async login(req, res) {
    const { username, password } = req.body;

    // validasi login author
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    // Cek apakah username sudah ada
    const author = await authors.findOne({ where: { username: username } })
    if (!author) return res.status(400).json('Username is not found!')

    // Membuat token dan dikirim ke response
    const token = jwt.sign({ id: author.id }, process.env.TOKEN_SECRET);

    // Validasi password
    const validPass = await bcrypt.compare(password, author.password)

    if(author.password == password) return res.header('auth-token', token).send(token)
    if (!validPass) return res.status(400).send('invalid password!')
  }

  static async register(req, res) {
    const { username, password, email } = req.body;

    // validate before become author
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    // Check if it existing author's email
    const emailExist = await authors.findOne({ where: { email: email } })

    // Check if it existing author's username
    const usernameExist = await authors.findOne({ where: { username: username } })

    // Hash passwords
    const salted = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salted);

    var readHTMLFile = function(path, callback) {
      fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
          if (err) {
              throw err;
              callback(err);
          }
          else {
              callback(null, html);
          }
      });
    };
  

    // For Nodemailer
    try {
      if (usernameExist) return res.status(404).json('Username already exists')
      else if (emailExist) return res.status(404).send('Email already exists')
      else {
        const savedAuthor = await authors.create({
          username, password: hashedPassword, email
        });
        cron.schedule('33 * * * *', () => {
          // create reusable transporter object using the default SMTP transport
          const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            secure: false,
            auth: {
              user: "40631470262799",
              pass: "a4642864c658c4"
            }
          });
          readHTMLFile(__dirname + '../../email.html', function(err, html) {
            const template = handlebars.compile(html);
            const replacements = {
                 username: "John Doe"
            };
            const htmlToSend = template(replacements);
            const msg = {
              from: '"Express Email Sender" <nodemailer@mail.ac.id>', // sender address
              to: `${email}`, // list of receivers
              subject: "Konfirmasi Registrasi ✔", // Subject line
              html: htmlToSend, // html body
              attachments: [
                {
                  filename: 'test.txt',
                  path: __dirname + '../../../test.txt' // stream this file
                }
              ]
            }
            transporter.sendMail(msg, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
                response.data = {
                  "Username": savedAuthor.username,
                  "Salted Password": savedAuthor.password,
                  "Email": savedAuthor.email,
                  "Message Sent": info.messageId
                };
                response.status = true;
                response.message = "Berhasil register! Silakan cek email Anda!"
                res.status(201).json(response);
              }
            });
          });
        });
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = LoginController;