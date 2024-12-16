"use strict"
// event object

const firstButton = document.querySelector("#one");
firstButton.addEventListener("click", function(event){
    console.log(event);
})

// jabbhi bhi kisi element pe eventlistener add hoga
// humare(browser) pass js engine hota hai jo line by line execute krta hai 
// lekin broswer k pass js engine k saath extra features bhi hai.
// jese ki js engine and  webApis 

// browser sees when the user will click on the event listener, jese hi click krega. so jese hi browser ko pta chala hi user ne event perform kia jo hum listen kr rhe the, toh browser sbse phele callback function dega js engine ko execute krne k lie and secondly call back function k saath, uski information bhi dega.
// and woh information browser object ke form me dega



function hello(anything){
 console.log(anything);
}

hello({firstKey: 'valueone', secondkey: "valuetwo"});

console.log(" ");

const allBtns = document.querySelectorAll(".myButtons Button");
for (let button of allBtns){
    button.addEventListener("click", (e)=>{
        console.log(e.target)
        console.log(e.currentTarget)
    })
}


// target means ki element ne event ko trigger kia
// currenTarget means ki kiss element pe humne eventListener attach kia tha