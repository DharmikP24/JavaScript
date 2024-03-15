const  express = require('express');
require("../src/db/conn");
const MenRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT  || 3000;

app.get ( "/" ,(req , res) =>{
    res.send("hello ")
})


app.post  





app.listen(port , () =>{
    console.log("conection is live ${port}");
})