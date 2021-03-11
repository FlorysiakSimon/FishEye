export class lightbox{
    constructor(data){
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.video = data.video;
        this.image = data.image;
        this.alt = data.alt;
        this.urlID = this.getID();
        this.lightbox = document.querySelector('.lightbox');
        this.lightboxMedia = this.lightboxMedia();
    }
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }
    /*openBox() {
        var box = this.lightbox;
        box.style.display = "block";
    }
    closeBox() {
        var box = this.lightbox;
        box.style.display = "none";
    } */
    lightboxHTML(){
        let lightboxItem = `<div class="lightboxContainerMedia">${this.lightboxMedia}<p class"lightboxContainerMediaTitle">${this.alt}</p></div>`;
        if (this.urlID == this.photographerId ){
            return lightboxItem;
        }
        return "";
    }
    lightboxMedia(){
        if (this.image != null){
            let articleMediaImg = `<img class="lightboxContainerMediaImg" src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" >`;
            return articleMediaImg;
        }
        if (this.video != null){
            let articleVideo = `<video class="lightboxContainerMediaVideo"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;
            return articleVideo;
        }
        return "";
    }
}



/*const imgItem = document.querySelectorAll(".mediaItemImg");
console.log(imgItem);
imgItem.forEach((img) => img.addEventListener("click", openBox));
//console.log(imgItem);*/

export function openBox() {
    document.querySelector(".lightbox").style.display = "block";
}
  
export function closeBox() {
    document.querySelector(".lightbox").style.display = "none";
}



//var slideIndex = 1;
//showSlides(slideIndex);

/*export function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
