const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))


app.use("/animals", require("./animalsRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => console.log("App is running on port 7000!"))