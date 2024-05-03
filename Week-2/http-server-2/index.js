// creating an http server
// express
// node default library => no

// create an in memory hospital
// you need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

// edge cases
// 1. what should happen if they try to delete when there are no kidneys
// 2. what should happen if they try to make a kidney healthy when all are already healthy

const express = require("express")
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    // write logic
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++ ;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()){
        for(let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    } else {
        res.status(411).json({
            msg: "There are no unhealthy kidneys"
        })
    }
    
})

// removing all the unhalthy kidneys
app.delete("/", function(req, res) {
    // you should return a 411 => wrong request
    // only if atleast one unhealthy kidney is there do this, else return 411

    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    } else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }

    return atleastOneUnhealthyKidney;
}

app.listen(3000);