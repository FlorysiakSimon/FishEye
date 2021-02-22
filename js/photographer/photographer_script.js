//IMPORT
import {Media} from "./photographer_media.js";

//DOM
const mediaSection = document.querySelector(".media"); //section media
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var urlID = url.searchParams.get("id");
console.log(urlID);


//GET JSON FILE
let myRequest = new Request("../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      console.log(data.media);
      var datamedia = data.media;
      for (let i in datamedia) {
        if (datamedia.photographerId === urlID ){ 
            //createPhotographerArticle(data.photographers[i]);
            var article = new Media(data.media[i]);
            console.log (article);
            mediaSection.innerHTML += article.toHTML();
        }
      }
    });
    
