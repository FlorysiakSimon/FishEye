export class Media{
    constructor(data){
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
    }

    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }  
    

    toHTMLGallery(){
     
        console.log(this.urlID);  
        let articleMedia =
        `<article class="mediaItem" data-like="${this.likes}" data-userlike=0 id="${this.id}">
           <div class="mediaVideoImg"></div>
           <img class="mediaItemImg" src="../../img/${this.photographerId}/${this.image}" alt="${this.alt}">
           <div class="mediaItemText">
               <div><h4 class="mediaItemTitle mediaItemText">${this.alt}</h4></div>
               <div class="mediaItemInfo">
                   <p class='mediaItemInfoPrice mediaItemText'>${this.price}€<div class="mediaItemLike mediaItemText" aria-label="aimer la vidéo">${this.likes}</div>
                   <i class="fas fa-heart mediaItemLikeHeart" id="like_icon_${this.id}"  aria-label="likes"></i>
               </div>
           </div>
       </article>`
        if (this.urlID == this.photographerId ){
           
            return articleMedia;
        }
        /*if (this.image != null) {
            document.querySelector(".mediaVideoImg").insertAdjacentHTML("beforeend", `<img class="mediaItemImg" src="../../img/${this.photographerId}/${this.image}" alt="${this.alt}">`)
        }*/
        /*if (this.video != null) {
            let articleVideo = document.querySelector(".mediaVideoImg");
            articleVideo.insertAdjacentHTML("beforeend", `<video class="mediaItemImg"><source src="../../img/${this.photographerId}/${this.video}" type="video/mp4" alt='${this.alt}'></video>`);
        }*/
    
        return ""; 
    }
    toHTMLGalleryImg(){
       let articleMediaImg = `<img class="mediaItemImg" src="../../img/${this.photographerId}/${this.image}" alt="${this.alt}">`
        if (this.urlID == this.photographerId ){
           
            return articleMediaImg;
        }
    }

    footerLike(){
        let bottomPrice = `${this.likes}`
        if (this.urlID == this.id ){
            return bottomPrice;
        }
        return ""; 
    }
}