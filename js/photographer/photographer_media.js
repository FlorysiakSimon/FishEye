export class Media{
    constructor(data){
        this.array = [];
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
       // this.lightbox = document.querySelector('.lightbox');
       // this.openBox = this.openBox();
       
    }

    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }  
    

    toHTMLGallery(){
     
        //console.log(this.urlID);  
        let articleMedia =
        `<article class="mediaItem" data-like="${this.likes}"  id="${this.id}">
           <div class="mediaVideoImg">${this.mediaImgVid}</div>
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
        
    
        return ""; 
    }
    toHTMLGalleryImgVideo(){
        if (this.image != null){
            let articleMediaImg = `<img class="mediaItemImg"   src="../../img/${this.photographerId}/${this.image}" aria-label="${this.alt}" alt="${this.alt}" onclick="${this.openModal}">`;
            return articleMediaImg;
        }
        if (this.video != null){
            let articleVideo = `<video class="mediaItemImg"><source src="../../img/${this.photographerId}/${this.video}" aria-label="${this.alt}" type="video/mp4" alt='${this.alt}'></video>`;
            return articleVideo;
        }
        return "";
    }
    
    /*openBox() {
        document.querySelector('.lightbox').style.display = "block";
    } */
    /*closeBox() {
        document.querySelector('.lightbox').style.display = "none";
    } */

    footerLike(){
        /*let sum = 0;
        for (let i in Media) {
            sum += this.likes[i];
            console.log(sum);
        }
        console.log(sum); */
       //let sum = 0;
       //  let bottomLikes = `${this.likes}`
       
        if (this.urlID == this.photographerId ){
            const likes = this.likes;
            
            //console.log(likes);
            let totalLikes = 0;
            /*this.likes.forEach((i) => {
                totalLikes += i.likes;
            });*/
            return totalLikes;
            /*var likes  = this.likes;
            totalLikes += likes;
            console.log(totalLikes);
            return totalLikes; */
            /*for (let i in likes){
                console.log(i)
                totalLikes += likes[i];
                console.log(totalLikes)
            }*/
           // console.log(totalLikes)
           // console.log(likes);
           // totalLikes += likes;
           // console.log(totalLikes)
           /* likes.forEach((i) => {
                totalLikes += i;
                console.log(likes);
                console.log(totalLikes);
            });
            
            //console.log(totalLikes);
            //console.log([this.likes]);
            //for( var i in this.likes )
           // return bottomLikes;*/
        }
        
        
        return ""; 
    }
}

