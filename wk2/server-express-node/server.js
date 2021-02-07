const express = require("express")
const app = express()


const users =[    
    { name: "Joe", age: 20 },
    { name: "Moe", age: 64 },
    { name: "Betty", age: 42 },
    { name: "Sarah", age: 31 },
    { name: "Mike", age: 29 }
]
app.get("/users", (req, res) => {
    res.send(users)

})


const movies =[    
    { name: "The Matrix", age: 12 },
    { name: "Sweet Home Alabama", age: 9 },
    { name: "Hackers", age: 26 },
    { name: "Shawshank Redemption", age: 27}    
]
app.get("/movies", (req, res) => {
    res.send(movies)

})


const cartoons =[    
    { name: "Animaniacs", age: 28 },
    { name: "Ren & Stimpy", age: 30 },
    { name: "Amazing World of Gumball", age: 10 },
    { name: "Tom & Jerry", age: 81 }   
]
app.get("/cartoons", (req, res) => {
    res.send(cartoons)

})


app. listen(4000, () => {
    console.log("The server is running on Port 4000")
} )
