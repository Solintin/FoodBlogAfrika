const sendMail = require("./sendEmail");
const sendVerificationMail = require("./sendVerificationMail");
const sendResetPassword = require("./sendResetPassword");
const { createJWT } = require("./jwt");

module.exports = {
  createJWT,
  sendMail,
  sendVerificationMail,
  sendResetPassword,
};
