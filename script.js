
let input = document.getElementById("input");
let button = document.getElementById("go");
let cardBody = document.getElementById("cards")
button.addEventListener("click",(e)=>{
    let num = input.value
    getData(num);
});

function getData(num){
    fetch(`https://thronesapi.com/api/v2/Characters/${num}`)
.then((response)=>response.json())
.then((data)=>createCards(data))
.catch((err)=>console.log("error:",err));
}

function createCards(data){
    console.log(data)
cardBody.innerHTML =`
<img src="${data.imageUrl}" width="400px" height="170px" alt="check the number"/>
<p class="name">NAME:${data.fullName}</P>
<p class="title">TITLE:${data.title}</P>
<p class="house">HOUSE:${data.family}</P>
`
}