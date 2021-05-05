//IMPORT
import {Fabrik} from "../fabrik.js";

//DOM
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const option = document.querySelectorAll(".option"); //select menu option
const slides = document.getElementsByClassName('lightboxContainerMedia');
const imgItem = document.getElementsByClassName("mediaItemImg");
const fabrik = new Fabrik();
var articleMedia = undefined ;
var lightboxGallery = undefined;
var listMedia = [];
var lightboxList = [];
var totalLikes = 0;
var articlePhotographer = [];
//GET JSON FILE
let myRequest = new Request("./../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display data
    .then((data) => {
      const photographers = data.photographers;
      const media = data.media;
     
      for (let i in photographers){ //Section Photographer
        articlePhotographer = fabrik.createPhotographer(photographers[i]);
        if(articlePhotographer.urlID == articlePhotographer.id){
          articlePhotographer.toHTMLID(); // photographer selon ID
          articlePhotographer.footerPrice(); //prix selon ID
          articlePhotographer.formName(); // Nom du photographe dans le formulaire
        }
      }  
      for (let i in media) { //Section Media
        articleMedia =  fabrik.createMedia(media[i]);
        lightboxGallery = fabrik.createLightbox(media[i]); 
        if (articleMedia.urlID == articleMedia.photographerId){
          listMedia.push(articleMedia);// add media dans le tableau pour effectuer le tri
          lightboxList.push(articleMedia);
          mediaSection.innerHTML += articleMedia.toHTMLGallery(); // gallery
          articleMedia.lightboxHTML(); //lightbox 
          
          totalLikes += articleMedia.likes; //calcul total likes
          
        }
      }
      photographerLikes.innerHTML = totalLikes + ' <i class="fas fa-heart profileheart"   aria-label="likes"></i> '; // display total like
      //EVENT LISTENER  
      lightboxGallery.event();
      articleMedia.event();
    })

    /* DROPDOWN SORT ON CLICK*/
   .then(function () {
    const like = document.querySelectorAll(".mediaItemLikeHeart");
    var i = 0;

    option.forEach(el => el.addEventListener('click', event => {
      const value = event.target.getAttribute("value") ;
      articleMedia.sortMedia(listMedia,value);
      listMedia.forEach(media => {mediaSection.innerHTML += media.toHTMLGallery(); media.lightboxHTML();} );
      for (var i = 0; i < slides.length; i++) {        
        slides[i].dataset.index = [i];
        imgItem[i].dataset.index = [i];
      }
      for (const imgItems of imgItem) {
        let n = imgItems.getAttribute("data-index");
        imgItems.addEventListener('click', () => lightboxGallery.openBox());
        imgItems.addEventListener('click', () => lightboxGallery.currentSlide(n));
      }
      
      photographerLikes.innerHTML = totalLikes + ' <i class="fas fa-heart profileheart"   aria-label="likes"></i> '; // display total like
    }));

    like.forEach(el => el.addEventListener('click', event => {
      articleMedia.addLike(event);
      i++;
      photographerLikes.innerHTML = totalLikes + i +' <i class="fas fa-heart profileheart"   aria-label="likes"></i> '
    }));

  });
    
