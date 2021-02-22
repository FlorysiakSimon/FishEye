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
    }

    /*getID(){
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var urlID = url.searchParams.get("id");
        console.log(urlID);
    } */
    
    toHTML(){
        
        //if (this.photographerId === getID() ){
            let articleMedia =
             `<article class="mediaItem" data-like="${this.likes}" data-userlike=0 id="${this.id}">
                <img class="mediaItemImg" src="../../img/${this.photographerId}/${this.image}" alt="${this.alt}">
                <div class="mediaItemText">
                    <div><h4 class="mediaItemTitle mediaItemText">${this.alt}</h4></div>
                    <div class="mediaItemInfo">
                        <p class='mediaItemInfoPrice mediaItemText'>${this.price}€<div class="mediaItemLike mediaItemText" aria-label="aimer la vidéo">${this.likes}</div>
                        <i class="fas fa-heart mediaItemLikeHeart" id="like_icon_${this.id}"  aria-label="likes"></i>
                    </div>
                </div>
            </article>`
      return articleMedia;
        }
   // }
}