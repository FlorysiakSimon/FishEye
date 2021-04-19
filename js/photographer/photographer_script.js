//IMPORT
import {Fabrik} from "../fabrik.js";
import {openBox,closeBox} from "./lightbox.js";

//DOM
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const lightboxContainer = document.querySelector(".lightboxContainer"); //lightbox
const option = document.querySelectorAll(".option"); //select menu option
const fabrik = new Fabrik();
var articleMedia = undefined ;
var listMedia = [];
var lightboxList = [];
var lightboxGallery = undefined;
var totalLikes = 0;

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
     
      for (let i in photographers){ //Photographer
        var articlePhotographer = fabrik.createPhotographer(photographers[i]);
        if(articlePhotographer.urlID == articlePhotographer.id){
          articlePhotographer.toHTMLID(); // photographer selon ID
          articlePhotographer.footerPrice(); //prix selon ID
          articlePhotographer.formName(); // Nom du photographe dans le formulaire
        }
      }  
      for (let i in media) { //Media
        articleMedia =  fabrik.createMedia(media[i]);
        lightboxGallery = fabrik.createLightbox(media[i]); 

        if (articleMedia.urlID == articleMedia.photographerId){
          listMedia.push(articleMedia); // add media dans le tableau pour effectuer le tri
          lightboxList.push(articleMedia);
          mediaSection.innerHTML += articleMedia.toHTMLGallery(); // gallery
          lightboxContainer.innerHTML += lightboxGallery.lightboxHTML(); //lightbox 
          totalLikes += articleMedia.likes; //calcul total likes
        }
      }
      photographerLikes.innerHTML = totalLikes + ' <i class="fas fa-heart profileheart"   aria-label="likes"></i> '; // display total like
    })
    
    
      /*LIGHTBOX */
    .then(function () {

      //DOM
      const imgItem = document.querySelectorAll(".mediaItemImg");
      const closelightbox = document.getElementById("closelightbox");
      
      //EVENT LISTENER  
      imgItem.forEach((img) => img.addEventListener("click", openBox)); //openLightBox
      closelightbox.addEventListener("click", closeBox); //closeLightBox
      var slides = document.getElementsByClassName("lightboxContainerMedia");
      console.log(slides)

      var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
 

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("lightboxContainerMedia");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
      }
    })

    /* DROPDOWN SORT ON CLICK*/
   .then(function () {
    option.forEach(el => el.addEventListener('click', event => {
      const value = event.target.getAttribute("value") ;
      articleMedia.sortMedia(listMedia,value);
      // sortMedia(lightboxList,this.value);
     // console.log(listMedia);
     // console.log(lightboxList)
      listMedia.forEach(media => {mediaSection.innerHTML += media.toHTMLGallery()} );
    }));



  });
    
