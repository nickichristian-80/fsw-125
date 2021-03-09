const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid")

const bounty =[
    
    { name: "Cad Bane", living: "yes", bounty: 6000, Type: "sith", _id: uuid.v4()},
    { name: "Boba Fett", living: "unknown", bounty: 20000 , Type: "Mandolorian" , _id: uuid.v4()},
    { name: "IG-88", living: "dead", bounty: 3000, Type:"Sith" , _id: uuid.v4()}
    
]    

bountyRouter.get("/bounty", (req, res) => {
    res.send(bounty)
})

bountyRouter.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounty.push(newBounty)
    res.send(`Your ${newBounty.title} has been added!`)
   
})

bountyRouter.delete("/:bountyId", (res, req) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send("Bounty was deleted!")

})

bountyRouter.put("/:bountyId", (res, req) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], updateObject)
    res.send(updatedBounty)
})

module.exports = bountyRouter