//import
import {createPhotographerArticle, sortByTag} from "./photographerArticle.js";
//import {Photographer} from "./photographerArticle.js";

//GET JSON FILE
let myRequest = new Request("./data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
        for (let i in data.photographers) {
            createPhotographerArticle(data.photographers[i]);
        }
    })
    //event listener on hashtag
    .then(function(){
    const tags = document.querySelectorAll(".navButton a");
    for (let tag of tags) {
      tag.addEventListener("click", function (event) {
        event.preventDefault();
        sortByTag(event.target.parentNode);
      });
    }
  });
