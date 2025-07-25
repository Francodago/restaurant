//import the loadPage module
import loadPage from "./loadPage";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./styles.css";
loadPage();
loadHome();



const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", ()=>{
    clearpreviousContent();
    loadHome();
});

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", ()=>{
    clearpreviousContent();
    loadMenu();
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click",()=>{
clearpreviousContent();
loadContact();
});

function clearpreviousContent(){
    const content = document.querySelector("#content");
    const child = content.firstChild;
    if(content.childNodes.length>0){
    content.removeChild(child);
    }
    
};