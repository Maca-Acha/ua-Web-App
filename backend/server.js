require('dotenv').config()

const Router = require('./routes/routes')
const passport = require('passport')
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize());
app.use('/api', Router)


app.listen(4000,() => {console.log("Server listening on port 4000")})