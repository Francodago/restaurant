import teques from "./assets/images/teque.jpg";
import arepas from "./assets/images/arepas.jpg";
import mandocas from "./assets/images/mandocas.jpg";
import empanadas from "./assets/images/empanadas.jpg";
import quesillo from "./assets/images/quesillo.jpg";
import tresLeches from "./assets/images/tres-leches.jpg";
export default function loadMenu(){
const content = document.querySelector("#content");
const menuDiv = document.createElement("div");
menuDiv.classList.add("menu-content");
//teques div container
const item1 =document.createElement("div");
item1.classList.add("teque-item");
const tequeImg = document.createElement("img");
tequeImg.src=teques;
tequeImg.alt="Cheese Fingers";
const tequesDiv = document.createElement("div");
tequesDiv.classList.add("item-text");
const h3 = document.createElement("h3");
h3.classList.add("item-heading")
const spanName = document.createElement("span");
const spanPrice = document.createElement("span");
spanName.classList.add("item-name");
spanPrice.classList.add("item-price");
spanName.textContent="Tequeños (6pcs)"
spanPrice.textContent="$9.99"
h3.append(spanName, spanPrice);
const p = document.createElement("p");
p.classList.add("item-description");
p.innerHTML=`Golden, crispy, and irresistibly cheesy — our <b>Tequeños</b> are the ultimate Venezuelan comfort snack. Each of the 6 handcrafted sticks is wrapped in flaky dough and 
filled with warm, melty white cheese, then perfectly fried until golden brown. Served with a trio of bold, house-made sauces: <b>Traditional Guasacaca</b> (our vibrant Venezuelan avocado-cilantro dip),
<b>Creamy Garlic Sauce</b> for a rich and tangy finish, And a <b>Spicy Avocado Dip</b> to awaken your taste buds.`;

//arepas div container


//append the elements for each menu item
tequesDiv.append(h3, p);
item1.append(tequeImg, tequesDiv);
menuDiv.append(item1);
content.appendChild(menuDiv);

}
