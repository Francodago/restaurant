export default function loadContact(){
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("contact-content");
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");
    const h2 = document.createElement("h2");
    h2.textContent="Bringing the warmth of Venezuela to Toronto's breezy waterfront";
    const button1 = document.createElement("button");
    button1.textContent="Reservations";
    const button2 = document.createElement("button");  
    button2.textContent="Get Directions";
    contactHeader.append(h2, button1, button2);
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");


    const findUs = document.createElement("div");
    findUs.classList.add("directions-section");
    const findUsHeader = document.createElement("h3");
    findUsHeader.textContent="Find Us";
    const restaurantName = document.createElement("span");
    restaurantName.textContent="Sabor Venezolano";
    const address1 = document.createElement("p");
    const address2 = document.createElement("p");
    address1.textContent="21 Adelaide St W.";
    address2.textContent="Toronto, ON M5H 1L6";
    const phoneNum = document.createElement("p");
    phoneNum.textContent="+1 (416) 555-7295";
    findUs.append(findUsHeader, restaurantName, address1, address2, phoneNum);


    const hours = document.createElement("div");
    hours.classList.add("hours-section");
    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent="Hours";
    hours.append(hoursHeader,createHourSection("lunch", "Mon-Fri: 11:30am-2:30pm"),
    createHourSection("dinner", `Mon-Wed: 4:45-9:30pm<br>Thurs-Sat: 4:45-10pm`),
    createHourSection("takeout", `Mon-Fri: 12-8:30pm<br>Sat: 4:45-8:30pm`)
);
    const getSocial = document.createElement("div");
    getSocial.classList.add("social-section");
    const socialHeader = document.createElement("h3");
    socialHeader.textContent="Get Social";
    const text = document.createElement("p");
    text.textContent="Follow us";
    const socialAccount = document.createElement("a");
    socialAccount.href="#"
    socialAccount.textContent="@SaborVenezolano.to";
    getSocial.append(socialHeader,text, socialAccount);
    contactContent.append(findUs, hours, getSocial);
    menuContainer.append(contactHeader, contactContent);
    content.appendChild(menuContainer);
}
const createHourSection = (eatTime,content)=>{
const sectionName = document.createElement("div");
sectionName.classList.add(eatTime+"-section");
const title =document.createElement("span");
title.textContent=eatTime.charAt(0).toUpperCase() + eatTime.slice(1);
const p = document.createElement("p");
p.innerHTML=content;
sectionName.append(title, p);
return sectionName;
}