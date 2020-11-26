/******************************************
Treehouse FSJS Techdegree:
Project 3 - Interactive Form
Zachary Kessler
11/25/2020
******************************************/

let userName = document.querySelector("#name");
userName.focus();
let jobRole = document.querySelector("#title");
let otherJobRole = document.querySelector(".other-job-role");

otherJobRole.style.display = "none";

jobRole.addEventListener("change", (e) => {
    let other = "OTHER";
    if (e.target.value === other.toLowerCase()) {
        otherJobRole.style.display = "";
    } else {
        otherJobRole.style.display = "none";
    }
})

////////////////////////////////////////

let design = document.querySelector("#design");
let color = document.querySelector("#color");
let colorChildren = color.children;

color.disabled = true;

design.addEventListener("change", (e) => {
    color.disabled = false;
    for (let i = 1; i < colorChildren.length; i++) {
       let option = e.target.value;
       let selection = colorChildren[i].getAttribute("data-theme");
       if (option === selection) {
         colorChildren[i].removeAttribute('hidden');
       } else {
         colorChildren[i].hidden = true;
       }
    }
})

////////////////////////////////////////

let activities = document.querySelector("#activities");
let totalActivitiesCost = document.querySelector("#activities-cost");

let runningTotalActivitiesCost = 0;

activities.addEventListener("change", (e) => {
    let dataCost = e.target.getAttribute("data-cost");
    dataCost = +dataCost;
    if (e.target.checked === true) {
      runningTotalActivitiesCost += dataCost;
    } else if (e.target.checked === false) {
      runningTotalActivitiesCost = runningTotalActivitiesCost - dataCost;
    }
    totalActivitiesCost.innerHTML = `Total: $${runningTotalActivitiesCost}`;
})

////////////////////////////////////////

let payment = document.querySelector("#payment");
let creditCard = document.querySelector("#credit-card");
let paypal = document.querySelector("#paypal");
let bitcoin = document.querySelector("#bitcoin");

paypal.style.display = "none";
bitcoin.style.display = "none";

payment.children[1].selected;

payment.addEventListener("change", (e) => {
    let selectedMethod = e.target.value;
    if (selectedMethod === "credit-card") {
        creditCard.style.display = "block";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
    } else if (selectedMethod === "paypal") {
        paypal.style.display = "block";
        bitcoin.style.display = "none";
        creditCard.style.display = "none";
    } else if (selectedMethod === "bitcoin") {
        bitcoin.style.display = "block";
        paypal.style.display = "none";
        creditCard.style.display = "none";
    }
})

////////////////////////////////////////

let userEmail = document.querySelector("#email");
let creditCardNumber = document.querySelector("#cc-num");
let userZipCode = document.querySelector("#zip");
let CVV = document.querySelector("#cvv");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let nameValue = userName.value;
    let nameTest = /^[a-zA-Z]+$/i.test(nameValue);
    if (nameTest === false) {
        e.preventDefault();
    };
    let emailValue = userEmail.value;
    let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/i.test(emailValue);
    if (emailTest === false) {
        e.preventDefault();
    }

    // Activity Selection Validation goes here

    if (payment.children[1].selected === true) {
        let creditCardValue = creditCardNumber.value;
        let creditCardTest = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(creditCardValue);
        if (creditCardTest === false) {
            e.preventDefault();
        }
        let zipCodeValue = userZipCode.value;
        let zipCodeTest = /^\d{5}$/.test(zipCodeValue);
        if (zipCodeTest === false) {
            e.preventDefault();
        }
        let CVVValue = CVV.value;
        let CVVTest = /^\d{3,4}$/.test(CVVValue);
        if (CVVTest === false) {
            e.preventDefault();
        }
    }
})
