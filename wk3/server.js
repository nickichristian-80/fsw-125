const express = require("express")
const app = express()
const uuid = require("uuid")

app.use(express.json())


const bounty =[
    
    { name: "Cad Bane", living: "yes", bounty: 6000, Type: "sith", _id: uuid.v4()},
    { name: "Boba Fett", living: "unknown", bounty: 20000 , Type: "Mandolorian" , _id: uuid.v4()},
    { name: "IG-88", living: "dead", bounty: 3000, Type:"Sith" , _id: uuid.v4()}
    
]



    

app.get("/bounty", (req, res) => {
    res.send(bounty)
})

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounty.push(newBounty)
    res.send("Your ${newBounty.title} has been added!")
    //for some reason when I use the $ to add in info it does not work//
})

app.listen(5000, () => {
    console.log("The server is running on Port 5000")
})

