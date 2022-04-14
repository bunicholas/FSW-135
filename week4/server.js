const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

// Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

// Connect to db
mongoose.connect('mongodb://localhost:27017/moviesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/Climatedb')
    console.log("Connected to the DB")
    }


// Routes 
// app.use("/movies", require("./routes/movieRouter.js"))
// app.use("/tvshows", require("./routes/tvshowRouter.js"))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['R5256']}))
app.use('/User', require('./routes/UserRouter.js'))
app.use('/Issue', require('./routes/IssueRouter.js'))
app.use('/Comment', require('./routes/CommentRouter.js'))
app.use('/Auth', require('./routes/AuthRouter.js'))
// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})