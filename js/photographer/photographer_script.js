//IMPORT
import {Media} from "./photographer_media.js";
import {Photographer} from "../photographerArticle.js";

//DOM
const photographerSelected = document.querySelector(".photographerInfo"); // section photographer
const mediaSection = document.querySelector(".media"); //section media


//GET JSON FILE
let myRequest = new Request("../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      console.log()
      for (let i in data.photographers){
        var articlePhotographer = new Photographer(data.photographers[i]);
        photographerSelected.innerHTML += articlePhotographer.toHTMLID();
        console.log(articlePhotographer)
      }  
      for (let i in data.media) {
          var articleMedia = new Media(data.media[i]);
          mediaSection.innerHTML += articleMedia.toHTMLGallery();
      //}
      }
    });
    
