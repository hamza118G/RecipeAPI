const express = require('express')
const dotenv = require('dotenv').config()
const colors = require ('colors')
const {errorHandler} = require ('./middleware/Errormiddleware')
const connectDB = require('./config/db')
var cors = require('cors')
const port = process.env.PORT || 5000

connectDB()

   
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/recipe', require('./routes/RecipeRoutes'))
app.use('/User', require('./routes/UserRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))

//NODE_ENV = developement
//PORT = 5000
//MONGO_URI = mongodb+srv://hamza:Hamza@cluster0.nrctqny.mongodb.net/?retryWrites=true&w=majority
//JWT_SECRET = abc123