export default function loadPage(){
let body = document.querySelector("body");
const content = document.createElement("div");
content.id="content";
const header =document.createElement("header");
const h1 = document.createElement("h1");
h1.textContent="Sabor Venezolano";
const navBar =document.createElement("nav");
const homeBtn = document.createElement("button");
homeBtn.classList.add("home-btn", "buttons");
homeBtn.textContent="Home";
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu-btn", "buttons");
menuBtn.textContent="Menu";
const aboutBtn = document.createElement("button");
aboutBtn.classList.add("contact-btn", "buttons");
aboutBtn.textContent="Contact";
navBar.append(homeBtn, menuBtn, aboutBtn);
body.insertAdjacentElement("afterbegin", header)
body.insertAdjacentElement("beforeend", content);
header.append(h1, navBar);
}


