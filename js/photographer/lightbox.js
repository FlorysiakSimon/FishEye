export class Lightbox{
    constructor(data){
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.video = data.video;
        this.image = data.image;
        this.alt = data.alt;
        this.urlID = this.getID();
        this.lightboxMedia = this.lightboxMedia();

        this.lightbox = document.querySelector('.lightbox');
		this.lightboxContent = document.querySelector('.lightbox_content');
		this.slideIndex = '';
		this.slides = document.getElementsByClassName('lightboxContainerMedia');
    }
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }

    lightboxHTML(){
        let lightboxItem = `<div class="lightboxContainerMedia">${this.lightboxMedia}<p class="lightboxContainerMediaTitle">${this.alt}</p></div>`;
        
        return lightboxItem;
        
    }
    lightboxMedia(){
        if (this.image != null){
            let articleMediaImg = `<img class="lightboxContainerMediaImg" src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" >`;
            return articleMediaImg;
        }
        if (this.video != null){
            let articleVideo = `<video controls class="lightboxContainerMediaVideo"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;
            return articleVideo;
        }
    }

    currentSlide(n) {
		this.showSlides((this.slideIndex = n));
	}

	showSlides(n) {
		this.slides[n].style.display = 'block';

		// Visibility pour pas déplacer l'image quand l'element disparait
		this.slideIndex == 0
			? (document.querySelector('.lightbox_prev').style.visibility = 'hidden')
			: (document.querySelector('.lightbox_prev').style.visibility = 'visible');
		this.slideIndex == this.app.gallery.length - 1
			? (document.querySelector('.lightbox__next').style.visibility = 'hidden')
			: (document.querySelector('.lightbox__next').style.visibility = 'visible');
	}

	changeSlide(n) {
		this.resetLightbox();
		this.showSlides((this.slideIndex += n));
	}

	resetLightbox() {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].style.display = 'none';
		}
	}

	openLightbox() {
		this.lightbox.style.display = 'flex';
		document.querySelector('.lightboxContainerMedia video').focus();
	}

	closeLightbox() {
		this.lightbox.style.display = 'none';
		this.resetLightbox();
	}
    
}

/*const imgItem = document.querySelectorAll(".mediaItemImg");
console.log(imgItem);
imgItem.forEach((img) => img.addEventListener("click", openBox));
//console.log(imgItem);*/


export function openBox() {
    document.querySelector(".lightbox").style.display = "flex";
}
export function closeBox() {
    document.querySelector(".lightbox").style.display = "none";
}
/*
export function plusSlides(n) {
    showSlides(slideIndex += n);
  }

export  function currentSlide(n) {
    showSlides(slideIndex = n);
  }*/
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
