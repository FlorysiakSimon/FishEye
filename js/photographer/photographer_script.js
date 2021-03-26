//IMPORT
import {Fabrik} from "../fabrik.js";
import {openBox,closeBox} from "./lightbox.js";

//DOM
const photographerSelected = document.querySelector(".photographerInfo"); // section photographer
const mediaSection = document.querySelector(".media"); //section media
const photographerLikes = document.querySelector(".profileInfoLike"); //total likes
const photographerPrice = document.querySelector(".profileInfoPrice"); //prix
const lightboxContainer = document.querySelector(".lightboxContainer");
const photographerName = document.querySelector(".modal-Title"); // Form Name
const fabrik = new Fabrik();
var articleMedia = undefined ;
const dropdown = document.querySelectorAll(".custom-option");
var listMedia = [];
//const selected = document.querySelector(".selected");
//const attribut = selected.getAttribute("value");

//console.log(attribut);
function sortMedia(media,value) {
  switch (value)
       {
            case "Popularity":
                alert('like');
               // mediaSection.innerHTML += "";
                media.sort((a, b) => b.likes - a.likes); // trie par like
               // mediaSection.innerHTML += articleMedia.toHTMLGallery();
                break
            case "Date":
                alert('date');
                media.sort((a,b) =>  new Date(b.date) - new Date(a.date)); // trie selon la date 
                break
            case "title":
                alert('titre');
                media.sort((a, b) => a.alt !== b.alt ? a.alt < b.alt ? -1 : 1 : 0); //trie par titre
        }
}
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
      
      //dropdown.forEach((btn) => btn.addEventListener("click", articleMedia.sortBy(value))); //sort

      console.log(dropdown)
      
      var totalLikes = 0;
      

      for (let i in photographers){ //Photographer
        var articlePhotographer = fabrik.createPhotographer(photographers[i]);
        if(articlePhotographer.urlID == articlePhotographer.id){
        photographerSelected.innerHTML += articlePhotographer.toHTMLID(); // photographer selon ID
        photographerPrice.innerHTML += articlePhotographer.footerPrice(); //prix selon ID
        photographerName.innerHTML += articlePhotographer.formName(); // Nom du photographe dans le formulaire
        }
      }  
      for (let i in media) { //Media
        articleMedia =  fabrik.createMedia(media[i]);
        var lightboxGallery = fabrik.createLightbox(media[i]); 

        if (articleMedia.urlID == articleMedia.photographerId){
          console.log(articleMedia)
          listMedia.push(articleMedia);
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
     // const likeButton = document.querySelectorAll(".profileheart");
      const imgItem = document.querySelectorAll(".mediaItemImg");
      const closelightbox = document.getElementById("closelightbox");
      //const prev = document.querySelector(".prev");  
      //const next = document.querySelector(".next");
      //EVENT LISTENER  
      //likeButton.forEach((like) => like.addEventListener("click", openBox)),
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
      /*function currentSlide(n) {
        showSlides(slideIndex = n);
      }*/
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
      
    })
    /* DROPDOWN */
   .then(function () {
      
    for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
      console.log(dropdown)
      dropdown.addEventListener('click', function () {
        console.log(this)
          this.querySelector('.custom-select').classList.toggle('open');
      })
    }
    for (const option of document.querySelectorAll(".custom-option")) {
      option.addEventListener('click', function () {
          if (!this.classList.contains('selected')) {
              sortMedia(listMedia,this.value);
              console.log(listMedia)
              mediaSection.innerHTML ="";
              listMedia.forEach(media => {mediaSection.innerHTML += media.toHTMLGallery()} )
              this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
              this.classList.add('selected');
              this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
          }
      })
    }
    window.addEventListener('click', function (e) {
      for (const select of document.querySelectorAll('.custom-select')) {
          if (!select.contains(e.target)) {
              select.classList.remove('open');
          }
      }
    });
    

  });
    
