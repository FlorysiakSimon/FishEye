export class Lightbox{
  constructor(data){
    
      this.id = data.id;
      this.photographerId = data.photographerId;
      this.video = data.video;
      this.image = data.image;
      this.alt = data.alt;
      this.urlID = this.getID();
     // this.lightboxMedia = this.lightboxMedia();

      this.slideIndex = '';
      this.lightboxContent = document.querySelector('.lightbox_content');
      this.lightboxContainer = document.querySelector(".lightboxContainer")
      this.slides = document.getElementsByClassName('lightboxContainerMedia');
      this.closeButton = document.getElementById("closelightbox");
      this.imgItem = document.querySelectorAll(".mediaItemImg");
      this.next = document.querySelector(".lightbox__next");
      this.prev = document.querySelector(".lightbox__prev");
  }

  event() {
    for (var i = 0; i < this.slides.length; i++) {        
      this.slides[i].dataset.index = [i];
      //this.imgItem[i].dataset.index = [i];
    }

    this.next.addEventListener('click',() => {
      this.plusSlides();
    });
    this.prev.addEventListener('click',() => {
      this.lessSlides();
    });
    this.closeButton.addEventListener('click', () => {
      this.closeBox();
    });

    //add event lightbox sur les img
    this.imgItem.forEach(el => el.addEventListener('click', event => {
      let n = event.target.getAttribute("data-index");
      this.openBox();
      this.currentSlide(n)
    }));
    this.imgItem.forEach(el => el.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
      let n = event.target.getAttribute("data-index");
      this.openBox();
      this.currentSlide(n)
      }
    }));
    
  
    //keypress event
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeBox();
      }
      if(e.key === "ArrowRight" && this.next.style.visibility == 'visible'){
        this.plusSlides();
      }
      if(e.key === "ArrowLeft" && this.prev.style.visibility == 'visible'){
        this.lessSlides();
      }
    });
    

  }

  getID(){
      var url_string = window.location.href; 
      var url = new URL(url_string);
      return url.searchParams.get("id"); // get id from url
  }
  
  
  closeBox() {
    document.querySelector(".lightbox").style.display = "none";
    this.cleanLightbox();
  }

  openBox() {
    document.querySelector(".lightbox").style.display = "flex";
  }
  
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    this.slides[n].style.display = 'block';
		this.slideIndex == 0
			? (this.prev.style.visibility = 'hidden')
			: (this.prev.style.visibility = 'visible');
    this.slideIndex > this.slides.length -2
      ? (this.next.style.visibility = 'hidden')
      : (this.next.style.visibility = 'visible');

  }

  plusSlides() {
    this.cleanLightbox();
    this.slideIndex++;
    this.showSlides((this.slideIndex));
  }
  lessSlides(){
    this.cleanLightbox();
    this.slideIndex--;
    this.showSlides((this.slideIndex));
  }

  cleanLightbox() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
  }
  
}
