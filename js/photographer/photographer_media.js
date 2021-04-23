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
        this.mediaSection = document.querySelector(".media");//section media
        //this.imgItem = document.querySelectorAll(".mediaVideoImg");

    }
    event(){
       
    }
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }
    
    toHTMLGallery(){
        
        let articleMedia =
        `<article class="mediaItem" data-like="${this.likes}"  id="${this.id}">
           <div class="mediaVideoImg">${this.mediaImgVid}</div>
           <div class="mediaItemText">
               <div><h4 class="mediaItemTitle mediaItemText">${this.alt}</h4></div>
               <div class="mediaItemInfo">
                   <p class='mediaItemInfoPrice mediaItemText'>${this.price}€<div class="mediaItemLike mediaItemText icon_${this.id}" aria-label="${this.likes} j'aimes">${this.likes}</div>
                   <i class="fas fa-heart mediaItemLikeHeart" id="" value="${this.likes}" onclick="" aria-label="likes"></i>
               </div>
           </div>
       </article>`;
       
        return articleMedia;
    }
    
    toHTMLGalleryImgVideo(){
        if (this.image != null){
            return  `<img class="mediaItemImg" data-index="" data-index-img="${this.id}" src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" >`;
        }
        if (this.video != null){
            return `<video data-index="" data-index-img="${this.id}" class="mediaItemImg"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;
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
            this.createHTML();
    }

    cleanGallery() {
        document.querySelector(".media").innerHTML=""; //section media
        document.querySelector(".lightboxContainer").innerHTML="" // lightbox
    }
    
    
    addLike() {
        /*let tagselect = document.getElementById(`icon_${this.id}`);*/
        //console.log(document.querySelector(`.icon_${this.id}`))	
        let value = event.target.getAttribute("value");

      value ++;
        //var test = Element.parentNode.querySelector(".mediaItemLike");
      console.log(value)
     // test.innerHTML = value;
      
	}
    
}
