const db = require("../db/db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");

    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query(
      "insert into users(email, firstName, lastName, password) values ($1 , $2, $3, $4)",
      [email, firstName, lastName, hashedPassword]
    );

    return res.status(201).json({
      success: true,
      message: "The registration was successfull",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user;
  payload = {
    id: user.user_id,
    email: user.email,
  };

  try {
    const token = await sign(payload, SECRET);

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

// exports.forgotPassword = (req, res) => {
//   const {email} = req.body;

//   User.findOne({email}, (error, user) => {
//     if(err || !user) {
//       return res.status(400).json({error: 'User with this email does not exists.' })
//     }
//     const token = jwt.sign({_id: user.user_id},process.env.RESET_PASSWORD_KEY, {expiredIn:'20min'});
//     const data = {
//       from: 'noreply@askit.com',
//       to: email,
//       subject: 'Account Actiavtion Link',
//       html: `<h2>Please click on given link to reset your password</h2>
//       <p>${process.env.CLIENT_URL}/forgot-password/${token}</p>`
//     }

//     return user.updateOne({resetLink: token}, (err, success) => {
//       if(err) {
//         return res.status(400).json({error: 'Reset password link error.' })
//       } else{

//       }
//     })
//   })
// }

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
