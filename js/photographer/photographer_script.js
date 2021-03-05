//IMPORT
import {lightbox} from "./lightbox.js";
import {Media} from "./photographer_media.js";
import {Photographer} from "../photographerArticle.js";


//DOM
const photographerSelected = document.querySelector(".photographerInfo"); // section photographer
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const photographerPrice = document.querySelector(".profileInfoPrice"); //prix
const lightboxContainer = document.querySelector(".lightboxContainer");


//
function openBox() {
  document.querySelector(".lightbox").style.display = "block";
}
//GET JSON FILE
let myRequest = new Request("../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      //console.log(lightbox);
      for (let i in data.photographers){
        var articlePhotographer = new Photographer(data.photographers[i]);
        photographerSelected.innerHTML += articlePhotographer.toHTMLID(); // photographer selon ID
        photographerPrice.innerHTML += articlePhotographer.footerPrice(); //prix selon ID
      }  
      for (let i in data.media) {
        var articleMedia = new Media(data.media[i]);
        mediaSection.innerHTML += articleMedia.toHTMLGallery(); //portfolio selon ID
        //mediaSection.openBox();
        photographerLikes.innerHTML += articleMedia.footerLike(); 

        var lightboxGallery = new lightbox(data.media[i]); 
        lightboxContainer.innerHTML += lightboxGallery.lightboxHTML(); //lightbox selon id

      
      }
      
      const imgItem = document.querySelectorAll(".mediaItemImg");
      console.log(imgItem);
      imgItem.forEach((img) => img.addEventListener("click", openBox));
      //console.log(imgItem);

    });
    
