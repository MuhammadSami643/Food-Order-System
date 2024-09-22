const userModel = require("../Models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();

module.exports = {
  loginUser: async (req, res) => {},

  registerUser: async (req, res) => {
    const createToken = (id) => {
      return jwt.sign({ id }, process.env.jwt_secret);
    };

    const { name, email, password } = req.body;
    try {
      //Checking that is user  alreadt exists on this email
      const exists = await userModel.findOne({ email });
      if (exists) {
        return res.send({
          success: false,
          message: "User already exists on this email, Please sign In",
        });
      }

      // Validate email format and strong password
      if (!validator.isEmail(email)) {
        return res.send({
          success: false,
          message: "Enter valid email ",
        });
      }

      //For strong Password

      if (password.length < 8) {
        return res.send({
          success: false,
          message: "Choose a Strong password ",
        });
      }

      //Hashing user password with the help of bcrypt package

      const hash = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, hash);

      //Password is hashed and we have to create a new user with the help of name,email and hashed password

      const newUser = new userModel({
        name: name,
        email,
        email,
        password: hashedPassword,
      });

      //New user is created and we have to save it in the data base model

      const user = await newUser.save(); //User is saved in dataBase and we store it in a varibale named user

      //Now we have to create token for users

      const token = createToken(user._id);

      return res.send({
        success: true,
        token,
      });
    } catch (error) {
      console.log(error);

      return res.send({
        success: false,
        message: "Error",
      });
    }
  },

  //We take user id and based on user id and create token
};
