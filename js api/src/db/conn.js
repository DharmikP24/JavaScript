const monogoose  = require('mongoose');

monogoose.connect('mongodb://localhost:27017/olympic',{
 userCreateIndex: true,
 useNewUrlParser: true,
 useUnifiedTopology: true 
} ).then(() =>{
    console.log("connection successful");

}).catch(() =>{
    console.log("connection failed");
})