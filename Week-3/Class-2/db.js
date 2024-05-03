const express = require("express")
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:Ishav%402002@cohort-2.sa2qatc.mongodb.net/userappnew")

const User = mongoose.model("Users", {name: String, email: String, password: String});

app.post("/signup", async function(req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({email: username});
    // CRUD - Create Read Update Delete
    if(existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name, 
        email: username, 
        password: password
    });
    
    user.save()
    res.json({
        msg: "User created successfully"
    })
})

app.listen(3000, () => {
    console.log("App listening to port 3000");
})