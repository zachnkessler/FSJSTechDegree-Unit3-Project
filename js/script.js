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