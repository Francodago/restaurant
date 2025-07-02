//import the loadPage module
import loadPage from "./loadPage";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
loadPage();
loadHome();
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", ()=>{
    loadMenu();
});
