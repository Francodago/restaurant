import createHomePage from "./home";

let body = document.querySelector("body");
const content = document.createElement("div");
content.id="content";

export default function loadPage(){
const header =document.createElement("header");
const navBar =document.createElement("nav");
header.textContent="Pizza Piacere";
const homeBtn = document.createElement("button");
homeBtn.classList.add("home-btn");
homeBtn.textContent="Home";
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.textContent="Menu";
const aboutBtn = document.createElement("button");
aboutBtn.classList.add("about-btn");
aboutBtn.textContent="About";
navBar.append(homeBtn, menuBtn, aboutBtn);
body.insertAdjacentElement("afterbegin", header)
body.insertAdjacentElement("beforeend", content);
header.appendChild(navBar);
}

// export default function pageLoad(){
//     createHomePage();
// };

