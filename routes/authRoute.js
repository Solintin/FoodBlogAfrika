const express = require("express");
const router = express.Router();

const {
  Register,
  Verify,
  Login,
  forgetPassword,
  resetPassword,
  resetNewPassword
} = require("../controllers/authController");
const requestTest = require("../controllers/testrequest");

router.post("/register", Register);
router.post("/login", Login);
router.post("/verify", Verify);
router.post("/forgetpassword", forgetPassword);
router.post("/resetpassword", resetPassword);
router.post("/resetNewPassword", resetNewPassword);
router.post("/requestTest", requestTest);

module.exports = router;
