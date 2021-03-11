const express = require('express')
const animalsRouter = express.Router()

// Data
const animals = [
    {
        name: "cat",
        class: "mammal",
        diet: "carnivore"
    },
    {
        name: "dog",
        class: "mammal",
        diet: "omnivore"
    },
    {
        name: "pig",
        class: "mammal",
        diet: "omnivore"
    },
    {
        name: "iguana",
        class: "reptile",
        diet: "herbivore"
    },
    {
        name: "snake",
        class: "reptile",
        diet: "carnivore"
    },
    {
        name: "crow",
        class: "bird",
        diet: "omnivore"
    },
    {
        name: "cardinal",
        class: "bird",
        diet: "omnivore"
    },
    {
        name: "octopus",
        class: "invertebrate",
        diet: "carnivore"
    }
]

// Routes
    // get all
animalsRouter.route("/")
    .get((req, res) => {
        res.send(animals)
    })

    
animalsRouter.route("/search/class")
    .get((req,res,next) => {
        const animalClass = req.query.class
        const filteredAnimals = animals.filter(animal => animal.class === animalClass)
        if(filteredAnimals.length == 0){
            const error = new Error(`No animal found with the class of ${animalClass}`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(filteredAnimals)
    })

   
animalsRouter.route("/search/diet")
    .get((req,res,next) => {
        const diet = req.query.diet
        const filteredAnimals = animals.filter(animal => animal.diet === diet)
        if(filteredAnimals.length == 0){
            const error = new Error(`No animal found with the diet type ${diet}`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(filteredAnimals)
    })

   
animalsRouter.route("/search/name")
    .get((req,res,next) => {
        const name = req.query.name
        const filteredAnimals = animals.filter(animal => animal.name === name)
        if(filteredAnimals.length == 0){
            const error = new Error(`No animal found with the name ${name}`)
            res.status(500)
            return next(error)
        }
        res.status(200).send(filteredAnimals)
    })


module.exports = animalsRouter