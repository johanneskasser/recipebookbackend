const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const cors = require('cors')

app = express()

app.use(express.json())

app.use('/api', routes)

mongoose.connect("mongodb+srv://recipebookadmin:recipebookadmin@recipebookdb.pcimimp.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection
    .once("open", () => console.log("Connected to DB"))
    .on("error", error => {
        console.log("Error: ", error);
    })

app.listen(8000)