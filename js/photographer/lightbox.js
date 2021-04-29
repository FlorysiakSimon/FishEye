export class Lightbox{
  constructor(data){
      this.id = data.id;
      this.photographerId = data.photographerId;
      this.video = data.video;
      this.image = data.image;
      this.alt = data.alt;
      this.urlID = this.getID();
      this.lightboxMedia = this.lightboxMedia();

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
    }

    this.imgItem.forEach(el => el.addEventListener('click', event => {
      let n = event.target.getAttribute("data-index");
      this.openBox();
      this.currentSlide(n)
    }));

    console.log(this.closeButton)
    this.closeButton.addEventListener('click', this.closeBox);

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
    this.slideIndex > this.imgItem.length -1
      ? (this.next.style.visibility = 'hidden')
      : (this.next.style.visibility = 'visible');
    
  }

  plusSlides() {
    this.cleanLightbox();
    this.showSlides((this.slideIndex++));
  }
  lessSlides(){
    this.cleanLightbox();
    this.showSlides((this.slideIndex--));
  }

  cleanLightbox() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
  }
  
}


