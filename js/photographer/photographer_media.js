export class Media{
    constructor(data){
        this.media = [];
        this.lightbox =[];
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.video = data.video;
        this.image = data.image;
        this.alt = data.alt;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.urlID = this.getID();
        this.mediaImgVid = this.toHTMLGalleryImgVideo();
        this.gallery = this.toHTMLGallery();
        this.lightboxMedia = this.lightboxMedia();

        this.mediaSection = document.getElementById("media");//section media
        this.slides = document.getElementsByClassName('lightboxContainerMedia');
        this.imgItem = document.getElementsByClassName("mediaItemImg");
        this.lightboxContainer = document.querySelector(".lightboxContainer")


    }
    event(){
        for (var i = 0; i < this.imgItem.length; i++) {        
            this.imgItem[i].dataset.index = [i];
          } 
    }
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }
    
    toHTMLGallery(){
      
       return `<article class="mediaItem">
           <div class="mediaVideoImg">${this.mediaImgVid}</div>
           <div class="mediaItemText">
               <div><h4 class="mediaItemTitle mediaItemText">${this.alt}</h4></div>
               <div class="mediaItemInfo">
                   <p class='mediaItemInfoPrice mediaItemText'>${this.price}€<div id="like_${this.id}" class="mediaItemLike mediaItemText" aria-label="${this.likes} j'aimes">${this.likes}</div>
                   <i tabindex="0" class="fas fa-heart mediaItemLikeHeart" id="${this.id}" value="${this.likes}" aria-label="likes"></i>
                   <span class="sr-only">click heart to like</span>
               </div>
           </div>
       </article>`;
       
    }
    
    toHTMLGalleryImgVideo(){
        if (this.image != null){
            return  `<img data-index="" class="mediaItemImg"  src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" tabindex="0">`;
        }
        if (this.video != null){
            return `<video data-index="" class="mediaItemImg" tabindex="0"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;
        }
        
    }

    lightboxHTML(){
        this.lightboxContainer.innerHTML += `<div class="lightboxContainerMedia">${this.lightboxMedia}<p class="lightboxContainerMediaTitle">${this.alt}</p></div>`; 
    }
    lightboxMedia(){
          if (this.image != null){
            return `<img tabindex="0" class="lightboxContainerMediaImg" src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" >`;
          }
          if (this.video != null){
            return `<video tabindex="0" controls class="lightboxContainerMediaImg lightboxContainerMediaVideo"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;   
          }
    }
    
    sortMedia(media,value) {
        this.media = media;
        this.cleanGallery();
        switch (value)
            {
                case "Popularity":
                this.media.sort((a, b) => b.likes - a.likes); // trie par like
                break
                case "Date":
                this.media.sort((a,b) =>  new Date(b.date) - new Date(a.date)); // trie selon la date 
                break
                case "Title":
                this.media.sort((a, b) => a.alt.localeCompare(b.alt, 'fr', {ignorePunctuation: true})); //trie par titre
            }
    }

    cleanGallery() {
        document.querySelector(".media").innerHTML=""; //section media
        document.querySelector(".lightboxContainer").innerHTML="" // lightbox
    }
    
    
    addLike(event) {
        let id = event.target.getAttribute("id");
        let val = event.target.getAttribute("value");
        const liked = document.getElementById(`like_`+id);
        const el = document.getElementById(id)
        
        val ++;
        el.setAttribute('value', val);
        liked.innerHTML = val;
      
	}
    
}
