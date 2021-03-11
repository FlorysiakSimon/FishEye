//IMPORT
import {lightbox,openBox,closeBox} from "./lightbox.js";
import {Media} from "./photographer_media.js";
import {Photographer} from "../photographerArticle.js";


//DOM
const photographerSelected = document.querySelector(".photographerInfo"); // section photographer
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const photographerPrice = document.querySelector(".profileInfoPrice"); //prix
const lightboxContainer = document.querySelector(".lightboxContainer");

//
/*function openBox() {
  document.querySelector(".lightbox").style.display = "block";
}*/
//GET JSON FILE
let myRequest = new Request("../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display data
    .then((data) => {
      const photographers = data.photographers;
      const media = data.media;
      for (let i in photographers){
        var articlePhotographer = new Photographer(data.photographers[i]);
        photographerSelected.innerHTML += articlePhotographer.toHTMLID(); // photographer selon ID
        photographerPrice.innerHTML += articlePhotographer.footerPrice(); //prix selon ID
      }  
      for (let i in media) {
        var articleMedia = new Media(data.media[i]);
        mediaSection.innerHTML += articleMedia.toHTMLGallery(); //portfolio selon ID
        //console.log(photographerLikes);
        photographerLikes.innerHTML += articleMedia.footerLike();
        //const mediaItemLikeHeart = document.querySelectorAll(".mediaItemLikeHeart");
        //console.log(mediaItemLikeHeart)
        var lightboxGallery = new lightbox(data.media[i]); 
        lightboxContainer.innerHTML += lightboxGallery.lightboxHTML(); //lightbox selon id
      }
    })

      /*LIGHTBOX */
      .then(function () {
      //DOM
      const imgItem = document.querySelectorAll(".mediaItemImg");
      const closelightbox = document.getElementById("closelightbox");
      //const prev = document.querySelector(".prev");  
      //const next = document.querySelector(".next");
      //EVENT LISTENER  
      imgItem.forEach((img) => img.addEventListener("click", openBox)); //openLightBox
      closelightbox.addEventListener("click", closeBox); //closeLightBox
      //prev.addEventListener("click", plusSlides(-1));
      //next.addEventListener("click", plusSlides(1))
      var slideIndex = 1;
      showSlides(slideIndex);
      /*function plusSlides(n) {
        showSlides(slideIndex += n);
      }
*/
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("lightboxContainerMedia");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        /*for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }*/
         slides[slideIndex-1].style.display = "block";
        //dots[slideIndex-1].className += " active";
        //captionText.innerHTML = dots[slideIndex-1].alt;
      }
      
    });
    
