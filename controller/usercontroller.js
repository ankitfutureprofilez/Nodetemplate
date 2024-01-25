const Users = require("../Model/user");
var jwt = require('jsonwebtoken');
require('dotenv').config()

exports.signup = async (req, res) => {
  try {
    const { name, email, password, username } = req.body
    const lastuserid = await Users.findOne({}, "userId").sort({ userId: -1 });
    const newUserId = lastuserid ? lastuserid.userId + 1 : 1;
    let isAlready = await Users.findOne({ username: username });
    if (isAlready) {
      return res.status(400).json({
        msg: "That user already exisits!",
        status: true
      });
    }

    let user = new Users({
      username: username,
      userId: newUserId,
      name: name,
      email: email,
      password: password
    });
    const results = await user.save();
    if (results) {
      return res.json({
        msg: "Successfully created !!",
        user: results,
        status: 200
      });
    }
  } catch (error) {
    console.log(error)
    res.json(error)
  }
};

exports.Login = (async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await Users.findOne({ username: username });
    const isPassword = await Users.findOne({ password: password });
    if (!user || !isPassword) {
      res.json({
        status: false,
        msg: "Invalid login or password"
      });
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    res.json({
      status: true,
      user: user,
      msg: "Login successfully !!",
      token: token
    });
  } catch (error) {
    console.log(error)
    res.json({
      error: error,
      msg: "Not Login",
      status: false
    });
  }
})


exports.userList = async (req, res) => {
  try {
    const record = await Users.find();
    res.json({
      result: record,
      msg: "Successfully fetched user list",
      status: true
    });
  } catch (error) {
    res.json({
      error: error,
      msg: "Error fetching user list",
      status: false
    });
  }
};