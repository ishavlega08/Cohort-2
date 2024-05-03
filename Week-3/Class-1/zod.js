const zod = require("zod")

// if this is an array of number with atleast 1 input, return true else return false

function validateInput(obj){

    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(arr);
    console.log(response);
}

// validateInput({
//     email: "ishav@gmail.com",
//     password: "12kadhjshdfkjasd"
// })

app.post("/login", function(req, res) {
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: "Your inputs are incorrect"
        })
        return;
    }
})