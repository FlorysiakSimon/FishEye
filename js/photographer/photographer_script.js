//IMPORT
import {Fabrik} from "../fabrik.js";
import {openBox,closeBox} from "./lightbox.js";

//DOM
const photographerSelected = document.querySelector(".photographerInfo"); // section photographer
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const photographerPrice = document.querySelector(".profileInfoPrice"); //prix
const lightboxContainer = document.querySelector(".lightboxContainer");
const fabrik = new Fabrik();


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
      var totalLikes = 0;

      for (let i in photographers){
        var articlePhotographer = fabrik.createPhotographer(data.photographers[i]);
        if(articlePhotographer.urlID == articlePhotographer.id){
        photographerSelected.innerHTML += articlePhotographer.toHTMLID(); // photographer selon ID
        photographerPrice.innerHTML += articlePhotographer.footerPrice(); //prix selon ID
        }
      }  
      for (let i in media) {
        var articleMedia =  fabrik.createMedia(data.media[i]);
        var lightboxGallery = fabrik.createLightbox(data.media[i]); 
        if (articleMedia.urlID == articleMedia.photographerId){
          mediaSection.innerHTML += articleMedia.toHTMLGallery(); // gallery
          lightboxContainer.innerHTML += lightboxGallery.lightboxHTML(); //lightbox 
          totalLikes += articleMedia.likes; //calcul total likes
        }
      }
      photographerLikes.innerHTML = totalLikes + ' <i class="fas fa-heart profileheart"   aria-label="likes"></i> ';
    })
      

      /*LIGHTBOX */
      .then(function () {
      //DOM
      const likeButton = document.querySelectorAll(".profileheart");
      const imgItem = document.querySelectorAll(".mediaItemImg");
      const closelightbox = document.getElementById("closelightbox");
      //const prev = document.querySelector(".prev");  
      //const next = document.querySelector(".next");
      //EVENT LISTENER  
      likeButton.forEach((like) => like.addEventListener("click", openBox)),
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
    
