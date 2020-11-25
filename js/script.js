let userName = document.querySelector("#name").focus();

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