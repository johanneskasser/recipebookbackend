const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

app = express()

app.use(express.json())

app.use('/api', routes)

mongoose.connect(process.env.MovieMatchDB_Connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection
    .once("open", () => console.log("Connected to DB"))
    .on("error", error => {
        console.log("Error: ", error);
    })

app.listen(process.env.PORT || 8000)