let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector(".btn");

let turn0 = 0;

const winpatterns = [

[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        box.innerText = "button was clicked";
        if(turn0){
            box.innerText="0";
            turn0= false;
        }

        else{
            box.innerText="1";
           turn0= true;
        }
    box.disable= true;

    checkwiner();
    });
});

const checkwiner = () =>{
    for(let pattern of winpatterns){
        console.log(pattern);
    }
};