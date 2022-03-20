const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db");
const { PORT, CLIENT_URL } = require("./constants");
const cookieParser = require("cookie-parser");
const passport = require("passport");

//middleware
// app.use(cors());
const corsOptions = {
  origin: CLIENT_URL,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); //req.body

//AUTH

//import routes
const authRoutes = require("./routes/auth");

//import passport middleware
require("./middlewares/passport-middleware");

//initialize middleware
app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

//initialize routes
app.use("/api", authRoutes);

//ROUTES

//create a question

app.post("/questions", async (req, res) => {
  try {
    const { description } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO question (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newQuestion.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all questions
app.get("/questions", async (req, res) => {
  try {
    const allQuestions = await pool.query("SELECT * FROM question");
    res.json(allQuestions.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get a question
app.get("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const question = await pool.query(
      "SELECT * FROM question WHERE question_id=$1",
      [id]
    );

    res.json(question.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update a question
app.put("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateQuestion = await pool.query(
      "UPDATE question SET description = $1 WHERE question_id = $2",
      [description, id]
    );

    res.json("Question was updated!");
  } catch (error) {
    console.error(error.message);
  }
});

//delete a question
app.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await pool.query(
      "DELETE FROM question WHERE question_id = $1",
      [id]
    );

    res.json("Question was deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
