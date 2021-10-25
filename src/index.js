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

const change = document.querySelector(".theme-switch__toggle");
change.checked = JSON.parse(localStorage.getItem("isChecked"));

change.addEventListener("click", () => {
    if (!body.classList.contains(Theme.DARK)) {
      localStorage.setItem("theme", Theme.DARK);
      localStorage.setItem("isChecked", "true");  
      body.classList.add(localStorage.getItem("theme"));
      console.log("++++", localStorage.getItem("isChecked"));
      inp.checked = JSON.parse(localStorage.getItem("isChecked"));
    } else {
      localStorage.setItem("theme", Theme.LIGHT);
      localStorage.setItem("isChecked", "false");
      body.classList.remove(Theme.DARK);
      console.log("----", localStorage.getItem("isChecked"));
      inp.checked = JSON.parse(localStorage.getItem("isChecked"));
      
    }
  });
