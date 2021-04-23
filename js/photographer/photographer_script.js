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
    })
    
    
      /*LIGHTBOX */
    .then(function () {
      //DOM
      let imgItem = document.querySelectorAll(".mediaVideoImg");
      console.log(imgItem)
      //const closelightbox = document.getElementById("closelightbox");
      //const next = document.querySelector(".lightbox__next");
      //const prev = document.querySelector(".lightbox__prev");

      //EVENT LISTENER  
      lightboxGallery.event();
      articleMedia.event();
      /*imgItem.forEach(el => el.addEventListener('click', event => {
       var current_index = this.dataset.dataIndexImg //
       console.log(current_index)
        //console.log(event.target.getAttribute("data-index-img"));
      }));*/

      
      //imgItem.forEach((img) => img.addEventListener("click", openBox)); //openLightBox
      /*for(var i=0; i < imgItem.length;i++){
        imgItem[i].addEventListener("click",currentSlide);
        imgItem[i].addEventListener("click",openBox);
      }*/
      
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
    
