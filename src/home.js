import venezuelanFoodImg from "./assets/images/venezuelan-food.jpg";
export default function loadHome(){
const content = document.querySelector("#content");

const contentDiv = document.createElement("div");
contentDiv.classList.add("home-content");
const h1 = document.querySelector("h1");
h1.textContent="Sabor Venezolano";
const image = document.createElement("img");
image.src=venezuelanFoodImg;
image.alt="Venezuelan Food";
const p = document.createElement("p");
p.innerHTML=`<b>Sabor Venezolano</b> was born from a passion to share the true flavors of Venezuelan cuisine with Toronto. As a family-owned restaurant, 
we strive to make every guest feel like they've stepped into our home. <br>Our dedication to warm hospitality and exceptional service is matched only by 
our commitment to culinary excellence — every dish on our menu is crafted to reflect the heart of Venezuela.`;
// header.appendChild(h1);
contentDiv.append(image, p);
content.appendChild(contentDiv);
}