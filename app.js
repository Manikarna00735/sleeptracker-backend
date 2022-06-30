const express = require("express");
const app = express();
const {Client} = require("pg")

app.use(express.json());

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "newdatabase" 
})

client.connect();





const loginRouter = require("./Loginpage");
const signupRouter = require("./SignupPage");
const newentryRouter = require("./NewEntry");

app.use("/login",loginRouter);
app.use("/signup",signupRouter);
app.use("/newentry",newentryRouter);


module.exports = client;

const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));