
/// promise
/*
let a = 10;
let b = 1;
 let waiting = new Promise((resolve , reject)=>
 {
setTimeout(() => {
    resolve(20);
}, 2000);

 })

 waiting.then((data)=>{
    b= data;
    console.log(a+b);
 })
 */
const os = require('os');
 console.log(os.userInfo());