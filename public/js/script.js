const loginMain = document.getElementById("loginMain");
const loginNav = document.getElementById("loginNav");

function printHello(){
    console.log("hello");
}

loginMain.addEventListener('click', printHello);
loginNav.addEventListener('click', printHello);