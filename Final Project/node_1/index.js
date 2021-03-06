require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')

try {
    mongoose.connect(process.env.DB_URL, {
        authSource: "admin",
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connect to DB !')
} catch (error) {
    console.log("Error DB connection: ", error)
}

const todoRouter = require('./routes/todoRoute')
const messageRouter = require('./routes/messageRoute')
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')

const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: (process.env.SESSION_SECURE === 'true') ? true : false,
        httpOnly: true
    }
}))

app.use(morgan('dev'))
app.use(express.json())

app.get('/', function (request, response) {
    return response.status(200).send('It works !')
})

app.post('/test', (request, response) => {
    const { name } = request.body

    if (!name && name == "") {
        return response.status(500).json('You have to give a name')
    }

    return response.status(200).json(`My name is ${name}`)
})

app.get('/test', (request, response) => {
    return response.status(200).json('It works on /test !')
})

app.use('/todos', todoRouter)
app.use('/messages', messageRouter)
app.use('/', authRouter)
app.use('/users', userRouter)

const PORT = 4500
app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT)
})