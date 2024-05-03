const express = require("express")
// zod => used for input validation 
// zod is a library to do input validation in right way
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

// {
//     email: string => email
//     password: atleast 8 letters
//     country: "IN", "US"
// }
const schema2 = zod.objectUtil({
    email: zod.string(),
    password: zod.string(),
    country: zod.ZodLiteral("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.use(express.json());

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            response
        })
    }
});

// app.get("/health-checkup", function(req, res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "ishav" || password != "pass"){
//         res.status(400).json({"msg": "Somethings up with your inputs"})
//         return
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({"msg": "Somethings up with your inputs"})
//         return
//     }

//     // do something with kidney here
//     res.json({
//         msg: "Your kidney is fine!"
//     })
// })

// global catches
// Error-handling middleware
// app.use(function(err, req, res, next) {
//     res.json({
//         msg: "Sorry something is up with our server"
//     })
// })

app.listen(3000);