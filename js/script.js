const aboutSection = document.querySelector(".about");
const exploreSection = document.querySelector(".explore");
const involveSection = document.querySelector(".involve-home");

console.log(aboutSection)
window.addEventListener("scroll", () => {
    if (window.scrollY > 1200) {
        exploreSection.classList.add("moveright");
        exploreSection.style.opacity = "1";
        console.dir(exploreSection)
    }
    if (window.scrollY > 1800) {
        involveSection.style.opacity = "1";
    }

})


//hamburger onclick event
const hamburger = document.querySelector(".fa-bars");
const navigation = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    if (navigation.style.display === "block") {
        return navigation.style.display = "none";
    }
    return navigation.style.display = "block";
});


// funtion to show dropdown menu onclick
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseover", () => {
    dropdownContent.style.display = "block";
})
dropdownContent.addEventListener("mouseout", () => {
    dropdownContent.style.display = "none";
})

dropdown.addEventListener("click", () => {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
})


// to top button event in footer

const toTopBtn = document.querySelector(".to-top");
toTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

}
// function to convert incoming string into camelcase
function convertToCamelCase(underScore) {

    const [first, second] = underScore.trim().toLowerCase().split("_");
    const converted = `${first}${second.replace(second[0], second[0].toUpperCase())}`

    return converted
}
console.log(convertToCamelCase("ankit_soni"));

