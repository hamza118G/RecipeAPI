const express = require('express')
const dotenv = require('dotenv').config()
const colors = require ('colors')
const {errorHandler} = require ('./middleware/Errormiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/recipe', require('./routes/RecipeRoutes'))
app.use('/User', require('./routes/UserRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))