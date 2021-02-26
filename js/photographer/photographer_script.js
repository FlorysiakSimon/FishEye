//IMPORT
import {Media} from "./photographer_media.js";
import {Photographer} from "../photographerArticle.js";

//DOM
const photographerSelected = document.querySelector(".photographerInfo"); // section photographer
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const photographerPrice = document.querySelector(".profileInfoPrice"); //prix

//GET JSON FILE
let myRequest = new Request("../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      for (let i in data.photographers){
        var articlePhotographer = new Photographer(data.photographers[i]);
        photographerSelected.innerHTML += articlePhotographer.toHTMLID(); // photographer selon ID
        photographerPrice.innerHTML += articlePhotographer.footerPrice(); //prix selon ID
        
      }  
      for (let i in data.media) {
          var articleMedia = new Media(data.media[i]);
          mediaSection.innerHTML += articleMedia.toHTMLGallery(); //portfolio selon ID
          
      //}
      }
    });
    
