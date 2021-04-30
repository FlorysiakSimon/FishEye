//IMPORT
import {Fabrik} from "../fabrik.js";
//import {openBox} from "./lightbox.js";

//DOM
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const option = document.querySelectorAll(".option"); //select menu option
const fabrik = new Fabrik();
var articleMedia = undefined ;
var lightboxGallery = undefined;
var listMedia = [];
var lightboxList = [];
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
     
      for (let i in photographers){ //Section Photographer
        var articlePhotographer = fabrik.createPhotographer(photographers[i]);
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
          listMedia.push(articleMedia); // add media dans le tableau pour effectuer le tri
          lightboxList.push(articleMedia);
          mediaSection.innerHTML += articleMedia.toHTMLGallery(); // gallery
          lightboxGallery.lightboxHTML(); //lightbox 
         
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
    option.forEach(el => el.addEventListener('click', event => {
      const value = event.target.getAttribute("value") ;
      articleMedia.sortMedia(listMedia,value);
      listMedia.forEach(media => {mediaSection.innerHTML += media.toHTMLGallery(); lightboxGallery.lightboxHTML();} );
    }));


    const like = document.querySelectorAll(".mediaItemLikeHeart");
    like.forEach(el => el.addEventListener('click', event => {
      articleMedia.addLike(event);
      
      totalLikes++;
      photographerLikes.innerHTML = totalLikes + ' <i class="fas fa-heart profileheart"   aria-label="likes"></i> '
    }));

  });
    
