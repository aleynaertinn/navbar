const navbar = document.querySelector(".navbar");
const allLi = document.querySelectorAll("li");

allLi.forEach((li,index) => {
    li.addEventListener("click", e =>{
        e.preventDefault();
        navbar.querySelector(".active").classList.remove("active");
        li.classList.add("active");

        const indicator = document.querySelector(".indicator");
        indicator.style.transform = `translateX(calc(${index * 90}px))`;
    });
})