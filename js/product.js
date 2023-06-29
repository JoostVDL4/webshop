let filterKopen = document.getElementById("checkbox-kopen");
let filterHuren = document.getElementById("checkbox-huren");
let filter4k = document.getElementById("checkbox-4k");

const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
const productImage = document.querySelector(".productImage");

const productPrice = document.getElementById("product--price");
const productTitle = document.getElementById("product--title");

let huren = false;
let kopen = false;

const checkoutButton = document.getElementById("js--checkoutButton");
checkoutButton.addEventListener("click", function () {
    window.location.href = 'shoppingcart.html';
});


let addCart = document.getElementsByClassName("productButton");
console.log(addCart);
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", function () {
      if (modalIsOpen === false) {
        shoppingModal.style.display = "flex";
        modalIsOpen = true;
        setTimeout(function () {
          shoppingModal.style.display = "none";
          modalIsOpen = false;
        }, 2000);
      }
    });
  }



filterKopen.addEventListener("change", function () {

    if (filterKopen.checked) {
        productPrice.innerText = "€5 (buy)";
        productTitle.innerText = "Goodfellas (buy)";
        filterHuren.checked = false;
        filter4k.checked = false;
        productImage.src = "img/products/goodfellas.webp";
    } else {
        productPrice.innerText = "Please check one of the boxes to choose purchase options";
        productTitle.innerText = "Goodfellas";
        productImage.src = "img/products/goodfellas.webp";
    }
});

productPrice.innerText = "€5 (buy)";
productTitle.innerText = "Goodfellas (buy)";
filterHuren.checked = false;
filter4k.checked = false;
productImage.src = "img/products/goodfellas.webp";

filterHuren.addEventListener("change", function () {

    if (filterHuren.checked) {
        productPrice.innerText = "€3 (rent 48 hours access)";
        productTitle.innerText = "Goodfellas (rent)";
        filterKopen.checked = false;
        filter4k.checked = false;
        productImage.src = "img/products/goodfellasAlt.webp";
    } else {
        productPrice.innerText = "Please check one of the boxes to choose purchase options";
        productTitle.innerText = "Goodfellas";
        productImage.src = "img/products/goodfellas.webp";
    }
});

filter4k.addEventListener("change", function () {

    if (filter4k.checked) {
        productPrice.innerText = "€20 (4k)";
        productTitle.innerText = "Goodfellas (4k)";
        filterKopen.checked = false;
        filterHuren.checked = false;
        productImage.src = "img/products/goodfellas4k.webp";
        productImage.alt = "Goodfellas (4K)";

    } else {
        productPrice.innerText = "Please check one of the boxes to choose purchase options";
        productTitle.innerText = "Goodfellas";
        productImage.src = "img/products/goodfellas.webp";
        productImage.alt = "Goodfellas";

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