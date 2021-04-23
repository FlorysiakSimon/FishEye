export class Lightbox{
    constructor(data){
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.video = data.video;
        this.image = data.image;
        this.alt = data.alt;
        this.urlID = this.getID();
        this.lightboxMedia = this.lightboxMedia();
        //this.showSlides = this.showSlides();

      //  this.slideIndex = '';
        this.lightboxContent = document.querySelector('.lightbox_content');
        this.lightboxContainer = document.querySelector(".lightboxContainer")
        this.slides = document.getElementsByClassName('lightboxContainerMedia');
        this.closeButton = document.getElementById("closelightbox");
        this.imgItem = document.querySelectorAll(".mediaItemImg");
    }

    event() {
     
      for (var i = 0; i < this.slides.length; i++) {        
        this.slides[i].dataset.index = [i];
        this.imgItem[i].dataset.index = [i];
      }

      this.imgItem.forEach(el => el.addEventListener('click', event => {

        let value = event.target.getAttribute("data-index");
        console.log(value)
        //let value2 = this.slides.getAttribute("data-index");
        //console.log(value2)
        this.openBox();
       
      }));
      //this.imgItem.forEach((imgItem) => imgItem.addEventListener("click", currentSlide));

      
      this.closeButton.addEventListener('click', this.closeBox);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeBox();
        }

      });
      
    }
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }
    lightboxHTML(){
      this.lightboxContainer.innerHTML += `<div class="lightboxContainerMedia">${this.lightboxMedia}<p class="lightboxContainerMediaTitle">${this.alt}</p></div>`; 
    }
    lightboxMedia(){
        if (this.image != null){
          return `<img class="lightboxContainerMediaImg" src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" >`;
        }
        if (this.video != null){
          return `<video controls class="lightboxContainerMediaImg lightboxContainerMediaVideo"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;   
        }
    }

    closeBox() {
      document.querySelector(".lightbox").style.display = "none";
    }
    openBox() {
      document.querySelector(".lightbox").style.display = "flex";
    }
    test(){
      console.log('test');
    }
}


/*

var slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {

      var i;
      var slides = document.getElementsByClassName('lightboxContainerMedia');
      console.log(slideIndex)
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
     slides[slideIndex-1].style.display = "block";
}

*/



/*export function openBox() {
  document.querySelector(".lightbox").style.display = "flex";
} 
*/
/*export function closeBox() {
  document.querySelector(".lightbox").style.display = "none";
}
*/









/*const imgItem = document.querySelectorAll(".mediaItemImg");
console.log(imgItem);
imgItem.forEach((img) => img.addEventListener("click", openBox));
//console.log(imgItem);*/




/*document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBox();
  }
});
*/
/*export function plusSlides(n) {
    showSlides(slideIndex += n);
  }
*/
/*
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
*/

//var slideIndex = 1;
//showSlides(slideIndex);
/*
export function plusSlides(n) {
  showSlides(slideIndex += n);
}
*//*
export function currentSlide(n) {
  showSlides(slideIndex = n);
}
/*
export function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("lightboxContainerMedia");
  //var dots = document.getElementsByClassName("demo");
// var captionText = document.querySelector("lightboxContainerMediaTitle");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  //  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
//}
