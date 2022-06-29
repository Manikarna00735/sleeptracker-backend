const express = require("express");
const app = express();

app.use(express.json());

const loginRouter = require("./Loginpage");
const signupRouter = require("./SignupPage");
const newentryRouter = require("./NewEntry");

app.use("/login",loginRouter);
app.use("/signup",signupRouter);
app.use("/newentry",newentryRouter);




const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));