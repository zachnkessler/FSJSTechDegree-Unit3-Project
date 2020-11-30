/******************************************
Treehouse FSJS Techdegree:
Project 3 - Interactive Form
Zachary Kessler
11/27/2020
******************************************/

// creates variable to store and place focus on name input element
let userName = document.querySelector("#name");
userName.focus();

// creates event listener to display a text input field when job selection is "other"
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

// creates an event listener to display only the applicable t-shirt colors upon selection of a t-shirt design
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
         colorChildren[i].setAttribute("hidden", "hidden");
         colorChildren[0].selected = true;
       }
    }
})

////////////////////////////////////////

// creates an event listener to calculate and display a running total for the activity costs
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

// creates an event listener to display and hide the applicable elements associated with the relevant payment type
let payment = document.querySelector("#payment");
let creditCard = document.querySelector("#credit-card");
let paypal = document.querySelector("#paypal");
let bitcoin = document.querySelector("#bitcoin");

paypal.style.display = "none";
bitcoin.style.display = "none";

payment.children[1].selected = true;

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

/* creates an event listener to test various input values and prevent the form 
from submitting if there is an error. Also displays or hides error messages indicating
what needs to be corrected when an input's value does not pass the regex test.
*/ 
let userEmail = document.querySelector("#email");
let creditCardNumber = document.querySelector("#cc-num");
let userZipCode = document.querySelector("#zip");
let CVV = document.querySelector("#cvv");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    // name validation
    let nameValue = userName.value;
    let nameTest = /^[a-zA-Z]+$/i.test(nameValue);
    let nameParent = userName.parentNode;
    let nameHint = document.querySelector("#name-hint");
    if (nameTest === false) {
        e.preventDefault();
        nameParent.classList.add("not-valid");
        nameParent.classList.remove("valid");
        nameHint.style.display = "block";
    } else {
        nameParent.classList.add("valid");
        nameParent.classList.remove("not-valid");
        nameHint.style.display = "none";
    }
    // email validation
    let emailValue = userEmail.value;
    // regex code sourced from https://www.w3resource.com/javascript/form/email-validation.php on 11/25/2020
    let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/i.test(emailValue);
    let emailParent = userEmail.parentNode;
    let emailHint = document.querySelector("#email-hint");
    if (emailTest === false) {
        e.preventDefault();
        emailParent.classList.add("not-valid");
        emailParent.classList.remove("valid");
        emailHint.style.display = "block";
    } else {
        emailParent.classList.add("valid");
        emailParent.classList.remove("not-valid");
        emailHint.style.display = "none";
    }
    // activity selection validation
    let checkboxes = document.querySelectorAll("[type='checkbox']");
    let numberChecked = 0;
    let activitiesBox = document.querySelector("#activities");
    let activitiesHint = document.querySelector("#activities-hint");
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            numberChecked += 1;
        }
    }
    if (numberChecked === 0) {
        e.preventDefault();
        activitiesBox.classList.add("not-valid");
        activitiesBox.classList.remove("valid");
        activitiesHint.style.display = "block";
    } else {
        activitiesBox.classList.add("valid");
        activitiesBox.classList.remove("not-valid");
        activitiesHint.style.display = "none";
    }
    // payment validation 
    if (payment.children[1].selected === true) {
        let creditCardValue = creditCardNumber.value;
        let creditCardTest = /^\d{13,16}$/.test(creditCardValue);
        let creditCardParent = creditCard.parentNode;
        let creditCardHint = document.querySelector("#cc-hint");
        if (creditCardTest === false) {
            e.preventDefault();
            creditCardParent.classList.add("not-valid");
            creditCardParent.classList.remove("valid");
            creditCardHint.style.display = "block";
        } else {
            creditCardParent.classList.add("valid");
            creditCardParent.classList.remove("not-valid");
            creditCardHint.style.display = "none";
        }
        let zipCodeValue = userZipCode.value;
        let zipCodeTest = /^\d{5}$/.test(zipCodeValue);
        let zipCodeParent = userZipCode.parentNode;
        let zipCodeHint = document.querySelector("#zip-hint");
        if (zipCodeTest === false) {
            e.preventDefault();
            zipCodeParent.classList.add("not-valid");
            zipCodeParent.classList.remove("valid");
            zipCodeHint.style.display = "block";
        } else {
            zipCodeParent.classList.add("valid");
            zipCodeParent.classList.remove("not-valid");
            zipCodeHint.style.display = "none";
        }
        let CVVValue = CVV.value;
        let CVVTest = /^\d{3}$/.test(CVVValue);
        let CVVParent = CVV.parentNode;
        let CVVHint = document.querySelector("#cvv-hint");
        if (CVVTest === false) {
            e.preventDefault();
            CVVParent.classList.add("not-valid");
            CVVParent.classList.remove("valid");
            CVVHint.style.display = "block";
        } else {
            CVVParent.classList.add("valid");
            CVVParent.classList.remove("not-valid");
            CVVHint.style.display = "none";
        }
    }
})

////////////////////////////////////////

// creates a loop to add additional styles when selecting activities
let checkboxes = document.querySelectorAll("[type='checkbox']");

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("focus", () => {
        let checkParent = checkboxes[i].parentNode;
        checkParent.classList.add("focus");
    })
    checkboxes[i].addEventListener("blur", () => {
        let checkParent = checkboxes[i].parentNode;
        checkParent.classList.remove("focus");
    })
}

////////////////////////////////////////
