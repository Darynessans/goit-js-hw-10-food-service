'use strict'; 
import "./sass/main.scss";
import gallery from "./menu.json";
import template from "./template/templ.hbs"

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const listCards = document.querySelector(".menu");
listCards.insertAdjacentHTML("beforeend", template(gallery));

const body = document.querySelector("body");
body.classList.add(localStorage.getItem("theme"));

const inp = document.querySelector(".theme-switch__toggle");
inp.checked = JSON.parse(localStorage.getItem("isChecked"));



inp.addEventListener("change", () => {
    if (!body.classList.contains(Theme.DARK)) {
      localStorage.setItem("theme", Theme.DARK);
      inp.checked = JSON.stringify(localStorage.setItem("isChecked", "true"));  
      body.classList.add(localStorage.getItem("theme"));
      inp.checked = JSON.parse(localStorage.getItem("isChecked"));
    } else {
      localStorage.setItem("theme", Theme.LIGHT);
      inp.checked = JSON.stringify(localStorage.setItem("isChecked", "false"));
      body.classList.remove(Theme.DARK);
      inp.checked = JSON.parse(localStorage.getItem("isChecked"));
      
    }
  });
