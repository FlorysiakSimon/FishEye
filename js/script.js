//IMPORT
import {Photographer} from "./photographerArticle.js";

//DOM
const photographerSection = document.querySelector(".photographer"); //section photographes


//GET JSON FILE
let myRequest = new Request("./data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      for (let i in data.photographers) {
        var article = new Photographer(data.photographers[i]);
        photographerSection.innerHTML += article.toHTML();
        
      }
    })
    //event listener on hashtag
    .then(function () {
      const tags = document.getElementsByClassName("tag");
      /*for (let tag of tags) {
        tag.addEventListener("click", sortByTag());
        } */
      });
    
