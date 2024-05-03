const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "ishav@gmail.com",
        password: "123",
        name: "Ishav Singh"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman Singh"
    },
    {
        username: "rahul@gmail.com",
        password: "123321",
        name: "Rahul Singh"
    }
];

function userExists(username, password){
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    // hard todo - try to use the find function in js
    let userExists = false;

    for(let i=0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }

    return userExists;
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,  password)) {
        return res.status(403).json({
            msg: "User doesnt exists in our in memory db",
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter(function(value) {
                if(value.username == username){
                    return false;
                } else {
                    return true;
                }
            })
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid Token",
        });
    }
});

app.listen(3000, () => {
    console.log("App listening to port 3000");
})