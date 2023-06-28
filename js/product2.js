let filterKopen = document.getElementById("checkbox-kopen");
let filterHuren = document.getElementById("checkbox-huren");
let filter4k = document.getElementById("checkbox-4k");
const productPrice = document.getElementById("product--price");
const productTitle = document.getElementById("product--title");
let huren = false;
let kopen = false;

const checkoutButton = document.getElementById("js--checkoutButton");
checkoutButton.addEventListener("click", function() {
    window.location.href = "shoppingcart.html";
  });



filterKopen.addEventListener("change", function () {

    if (filterKopen.checked) {
        productPrice.innerText = "€5 (buy)";
        productTitle.innerText = "Scarface (buy)";
        filterHuren.checked = false;
        filter4k.checked = false;
    } else {
        productPrice.innerText = "Please check one of the boxes to choose purchase options";
        productTitle.innerText = "Scarface";
    }
});

filterHuren.addEventListener("change", function () {

    if (filterHuren.checked) {
        productPrice.innerText = "€3 (rent 48 hours access)";
        productTitle.innerText = "Scarface (rent)";
        filterKopen.checked = false;
        filter4k.checked = false;
    } else {
        productPrice.innerText = "Please check one of the boxes to choose purchase options";
        productTitle.innerText = "Scarface";
    }
});

filter4k.addEventListener("change", function () {

    if (filter4k.checked) {
        productPrice.innerText = "€20 (4k)";
        productTitle.innerText = "Scarface (4k)";
        filterKopen.checked = false;
        filterHuren.checked = false;
    } else {
        productPrice.innerText = "Please check one of the boxes to choose purchase options";
        productTitle.innerText = "Scarface";
    }
});



















/*
filterKopen.onclick = function () {

    kopen = true;
    huren = false;
    if (kopen === true) {
        console.log("hoi")
    };
    if (kopen === false) {
        console.log("doei")
    }

}


filterHuren.onclick = function () {

    huren = true;
    kopen = false;
    if (huren === true) {
        console.log("hoi")
    };
    if (huren === false) {
        console.log("doei")
    }
};
*/