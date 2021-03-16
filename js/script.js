//IMPORT
import {Fabrik} from "./fabrik.js";


//DOM
const photographerSection = document.querySelector(".photographer"); //section photographes
const fabrik = new Fabrik();


//GET JSON FILE
let myRequest = new Request("./data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      const photographers = data.photographers;
      for (let i in photographers) {
        var article = fabrik.createPhotographer(photographers[i]);
        photographerSection.innerHTML += article.toHTML();
        
      }
    })
    //event listener on hashtag
    .then(function () {
      const tags = document.getElementsByClassName("tag");
      for (let tag of tags) {
        tag.addEventListener("click", sortByTag());
        } 
      });
    
