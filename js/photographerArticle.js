export class Photographer {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        this.index_photo = data.index_photo;
        this.urlID = this.getID();
    }
    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }  
    toHTML() {
        let article = `<article id="${this.id}" class="photographerItem">
                            <a href="photograher/photographer.html?id=${this.id}" aria-label="${this.name}">
                                <img class="photographerItemPhoto" src="${this.index_photo}" alt="${this.name}">
                                <h3 class="photographerItemName">${this.name}</h3>
                            </a>
                            <p class="photographerItemCity">${this.city}, ${this.country}</p>
                            <p class="photographerItemText">${this.tagline}</p>
                            <p class="photographerItemPrice">${this.price}€/jour</p>
                            <ul class="photographerItemTaglist" id="taglist_${this.id}">
                                ${this.tags.map(tag => `<li class="photographerItemTag">#${tag}</li>`).join('')}
                            </ul>
                        </article>`;
        return article;
    }

    

    toHTMLID() {
        
        let article = `<article id="${this.id}" class="photographerItem">
                                <div class="photographerItemInfo">
                                    <h1 class="photographerItemName">${this.name}</h1>            
                                    <p class="photographerItemCity">${this.city}, ${this.country}</p>
                                    <p class="photographerItemText">${this.tagline}</p>
                                    <ul class="photographerItemTaglist" id="taglist_${this.id}">
                                        ${this.tags.map(tag => `<li class="photographerItemTag">#${tag}</li>`).join('')}
                                    </ul>
                                </div>
                            </article>
                            <div class="photographerItemMedia">
                                    <img class="photographerItemPhoto" src="../${this.index_photo}" alt="${this.name}">
                            </div>`;
        if (this.urlID == this.id ){
            return article;
        } 
        return "";
    }

    

    footerPrice(){
        let bottomPrice = `${this.price} €/j`
        if (this.urlID == this.id ){
            return bottomPrice;
        }
        return ""; 
    }
    /*createPhotographerArticle(){
        let photographer = data.photographers;
            for (let i = 0; i < photographer.length; i++) {
                document.querySelector(this.article).innerHTML += photographer[i].toHTML();
            }
    }*/
    //sortByTag(){}
} 


//display photographer index
//export function createPhotographerArticle(photographers) {
/*
export const createPhotographerArticle = function(photographers){
    let mainContainer = document.createElement("article");
    mainContainer.classList.add("photographerItem");
    mainContainer.setAttribute("id", `id${photographers.id}`);
    mainContainer.innerHTML = `
      <a href="photographer.html?id${photographers.id}" aria-label="${photographers.name}">
       <img class="photographerItemPhoto" src="./${photographers.index_photo}" alt="photographer profile picture" />
       <h3 class="photographerItemName">${photographers.name}</h3>
       <p class="photographerItemCity">${photographers.city}, ${photographers.country}</p>
       <p class="photographerItemTagline">${photographers.tagline}</p>
       <p class="photographerItemPrice">${photographers.price} €/j</p>
      </a>
      <ul class="photographerItemTaglist"></ul>`;
    for (let tag of photographers.tags) {
        mainContainer.querySelector(".photographerItemTaglist").insertAdjacentHTML("beforeend", `<li class="photographerItemTag navButton">#${tag}</li>`);
    }
    document.querySelector(".photographer").append(mainContainer);
}

//trie par tag
//export function sortByTag(active){


export const sortByTag = function(activeTag){
    const articles = document.querySelectorAll(".photographerItem");
    console.log(articles);
    const tags = document.querySelectorAll(".navButton ");
    const sortTag = activeTag.classList.contains("tagged"); 
    console.log(tags);
    for (let tag of tags){
        if (tag.textContent === activeTag.textContent) {
            if (sortTag) {
            tag.classList.remove("tagged");
            } else {
            tag.classList.add("tagged");
            }
            
        }
        for (let article of articles){
            if(tag.classList.contains("tagged")){
              tag.parentElement.style.display = "none";
          } 
        }
        
    }
    /*for (let article of articles){
        if(tag.classList.contains("tagged")){
          article.style.display = "none";
      } 
    }*/
    
