import teques from "./assets/images/teque.jpg";
import arepas from "./assets/images/arepas.jpg";
import mandocas from "./assets/images/mandocas.jpg";
import empanadas from "./assets/images/empanadas.jpg";
import quesillo from "./assets/images/quesillo.jpg";
import tresLeches from "./assets/images/tres-leches.jpg";

export default function loadMenu(){
const content = document.querySelector("#content");
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-content");
menuContainer.append(createMenuItems("teque", teques, "Cheese Fingers", "Tequeños (6pcs)", "$9.99", `Golden, crispy, and irresistibly cheesy - our <b>Tequeños</b> are the ultimate Venezuelan comfort snack. Each of the 6 handcrafted sticks is wrapped in flaky dough and 
filled with warm, melty white cheese, then perfectly fried until golden brown. Served with a trio of bold, house-made sauces: <b>Traditional Guasacaca</b> (our vibrant Venezuelan avocado-cilantro dip),
<b>Creamy Garlic Sauce</b> for a rich and tangy finish, And a <b>Spicy Avocado Dip</b> to awaken your taste buds.`), 

createMenuItems("empanada", empanadas, "Empanadas", "Empanadas Mixtas (6pcs)", "$11.99", `Crisp on the outside and soulfully stuffed on the inside - 
our <b>Empanadas Mixtas</b> bring you the best of Venezuela in every bite. Enjoy a flavorful variety of <b>shredded beef</b>, <b>juicy chicken</b>, and <b>creamy white cheese</b>, wrapped in handcrafted corn dough and gently fried to a perfect crunch. Served with our signature <b>garlic cilantro sauce</b>, 
this trio of tastes (2 of each flavor) is made to satisfy and share.`), 

createMenuItems("arepa", arepas, "Arepa Reina Pepiada", "Arepa Reina Pepiada", "$7.99", `A Venezuelan classic - our <b>Arepa Reina Pepiada</b> is generously filled with <b>shredded 
chicken</b> blended with a creamy mix of <b>avocado, mayo, and diced veggies</b>. This soft corn pocket delivers a refreshing, savory flavor with every bite. Served warm and lightly crisped 
on the outside, it's perfect on its own or paired with a splash of <b>garlic-cilantro sauce</b> for an extra burst of sabor casero.`),

createMenuItems("mandoca", mandocas, "Mandocas", "Mandocas (6pcs)", "$7.99", `A true taste of <b>Zulia</b>, our <b>Mandocas</b> are large, handcrafted cornmeal rings infused with ripe plantain, 
a touch of sugar, and a hint of spice. Fried until perfectly caramelized on the outside and soft within, each of the 6 pieces offers a sweet-savory balance that melts in your mouth. 
Served with a side of <b>queso fresco</b>, they're a nostalgic bite of Venezuelan street food comfort.`),

createMenuItems("quesillo", quesillo, "Quesillo Venezolano", "Quesillo Venezolano", "$6.99", `Silky, rich, and irresistibly smooth - our <b>Quesillo Venezolano</b> is the ultimate caramel 
custard dessert. Made with a delicate blend of <b>eggs, condensed milk, and vanilla</b>, this single-portion treat is baked to a creamy perfection and topped with a luscious layer of dark 
golden <b>caramel syrup</b>. Each spoonful melts on the tongue, offering a sweet, velvety finish that captures the heart of every Venezuelan celebration.`),

createMenuItems("TresLeches", tresLeches, "Torta Tres Leches", "Torta Tres Leches", "$7.99", `Light, airy, and decadently soaked - our <b>Tres Leches Cake</b> is a sponge cake drenched in a 
blend of <b>three milks</b>: sweetened condensed, evaporated, and fresh cream. Each slice is irresistibly moist without being heavy, topped with a smooth layer of <b>whipped cream</b> and a sprinkle of cinnamon. 
Served chilled, this beloved Latin dessert delivers pure comfort in every creamy bite.`)
);
content.appendChild(menuContainer);

};

const createMenuItems = (className, imgPath,imgAlt, name, price, description)=>{
    const item =document.createElement("div");
    item.classList.add("menu-item", className+"-item");
    const image = document.createElement("img");
    image.src = imgPath;
    image.alt=imgAlt;
    const itemText = document.createElement("div");
    itemText.classList.add("item-text")
    const h3 = document.createElement("h3");
    h3.classList.add("item-heading")
    const spanName = document.createElement("span");
    const spanPrice = document.createElement("span");
    spanName.classList.add("item-name");
    spanPrice.classList.add("item-price");
    spanName.textContent=name;
    spanPrice.textContent=price;
    h3.append(spanName, spanPrice);
    const p = document.createElement("p");
    p.classList.add("item-description");
    p.innerHTML=description;
    itemText.append(h3, p);
    item.append(image, itemText);
    return item;
};