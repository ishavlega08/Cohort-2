const jwt = require("jsonwebtoken")

// decode, verify, generate

const value = {
  name: "ishav",
  password: 123321
}

// sign and not generate
const token = jwt.sign(value, "secret");
// console.log(token);

// this token has been generated using secret, and hence this token can only verified by this secret

// this is your checkbook 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNoYXYiLCJwYXNzd29yZCI6MTIzMzIxLCJpYXQiOjE3MTI5NDI3MDl9.Lmv_be50exR7YESKjOI-uY80lzywuRamvg60X4SID8s

// verification
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNoYXYiLCJwYXNzd29yZCI6MTIzMzIxLCJpYXQiOjE3MTI5NDI3MDl9.Lmv_be50exR7YESKjOI-uY80lzywuRamvg60X4SID8s", "secret")
console.log(verifiedValue);