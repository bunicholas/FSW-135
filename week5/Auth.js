require(‘dotenv’).config()
const expressJwt = require(‘express-jwt’)

app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['RS256'] }))
app.use('/api/todo ...

if(err.name === “Unauthorized Error”){
   res.status(err.status)
}
