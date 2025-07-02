export default function loadContact(){
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("contact-content");
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");
    const h2 = document.createElement("h2");
    const button1 = document.createElement("button").textContent="Reservations";
    const button2 = document.createElement("button").textContent="Get Directions";  
    contactHeader.append(h2, button1, button2);
    const findUs = document.createElement(div);
    findUs.classList.add("directions-content");
    const hours = document.createElement("div");
    hours.classList.add("hours");
    const getSocial = document.createElement("div");
    getSocial.classList.add("social-content");

    contactContent.append(findUs, hours, getSocial);
    menuContainer.append(contactHeader, contactContent);
    content.appendChild(menuContainer);


}