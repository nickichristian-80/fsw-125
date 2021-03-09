const express = require("express");
const bountyRouter = require("./routes/bountyRouter.js");
const app = express()

app.use(express.json());

app.use("/bounty", require("./routes/bountyRouter.js"))


app.listen(5000, () => {
    console.log("The server is running on Port 5000")
})