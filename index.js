const express = require('express')
const app = express()
const port = 3000

// const { User } = require("./models/User");

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Kim:skdms4122l@cluster0.6o6xf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('``` mongoDB is connected'))
  .catch(err => console.log('``` mongoDB is not connected', err))

app.get('/', (req, res) => {
  res.send('Hello World!!!!!')
})


app.post('/register', (req, res) => {
    // get information for signup, and save to database

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
