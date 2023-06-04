const addToCartButtons= document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let buzz = 0;
let iron = 0;
let c3po = 0;
var buzzPrice = 5;
var buzzValue = document.getElementById("js--buzz-price").innerHTML ="€" + buzzPrice;
var buzzTotal = document.getElementById("js--total-buzz");

var ironPrice = 5;
var ironValue = document.getElementById("js--iron-price").innerHTML ="€" + ironPrice;
var ironTotal = document.getElementById("js--total-iron");

var c3poPrice = 6;
var c3poValue = document.getElementById("js--c3po-price").innerHTML ="€" + c3poPrice;
var c3poTotal = document.getElementById("js--total-c3po");

console.log(buzzValue);

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
                case "buzz":
                buzz += 1;
                buzzTotal.innerHTML = "€" + buzzPrice * buzz;
                break;
                case "ironman":
                iron += 1;
                ironTotal.innerHTML = "€" + ironPrice * iron;
                break;
                case "C3PO":
                c3po += 1;
                c3poTotal.innerHTML = "€" + c3poPrice * c3po;
                break;       
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
             shoppingModal.style.display = "none";
             modalIsOpen = false;
            },2000);   
        }

        
    }
}

const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
shoppingBack = document.getElementById("js--shoppingBack");
shoppingBack.style.display="none"
shoppingLogo = document.getElementById("js--shoppingLogo");
let checkoutIsOpen = false;
checkoutButton.onclick = function(){
    if(checkoutIsOpen === false){
        document.querySelector("main").style.display ="none";
        shoppingLogo.style.display="none";
        shoppingBack.style.display="block";
        checkoutWindow.style.display = "block"
        checkoutIsOpen = true;
        document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
        document.getElementById("js--amount-ironman").innerHTML = iron + "x";
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        return;
    }
    document.querySelector("main").style.display ="block";
    checkoutWindow.style.display = "none"
    checkoutIsOpen = false;
    shoppingLogo.style.display="block";
    shoppingBack.style.display="none";
    
}


