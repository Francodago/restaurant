import restaurant from "./assets/images/restaurant.jpg";
export default function loadHome(){
const content = document.querySelector("#content");
const home = document.createElement("div");
home.classList.add("home-container");
const contentDiv = document.createElement("div");
contentDiv.classList.add("home-content");
const image = document.createElement("img");
image.classList.add("home-img")
image.alt="Venezuelan Restaurant";
image.src=restaurant;
const p = document.createElement("p");
p.innerHTML=`<b>Sabor Venezolano</b> was born from a passion to share the true flavors of Venezuelan cuisine with Toronto. As a family-owned restaurant, 
we strive to make every guest feel like they've stepped into our home. <br>Our dedication to warm hospitality and exceptional service is matched only by 
our commitment to culinary excellence — every dish on our menu is crafted to reflect the heart of Venezuela.`;
contentDiv.append(p, image);
home.append(contentDiv)
content.appendChild(home);
}