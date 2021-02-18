/*export class Photographer {
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
    }
    
    photographerArticle() {
        let article = `<article id="photographer-${this.id}" class="card">
                            <a href="pages/photographe.html?id=${this.id}" aria-label="aller vers la page de ${this.name}">
                                <img class="photographerItemPhoto" src="${this.chosenPicture}" alt="">
                                <h3 class="photographerItemName">${this.name}</h3>
                            </a>
                            <p class="photographerItemCity">${this.city}, ${this.country}</p>
                            <p class="photographerItemText">${this.tagline}</p>
                            <p class="photographerItemPrice">${this.price}€/jour</p>
                            <ul class="photographerItemtaglist" id="taglist_${this.id}">
                                ${this.tags.map(tag => `<li class="photographerItemtag">#${tag}</li>`).join('')}
                            </ul>
                        </article>`;
        return article;
    }
    createPhotographerArticle(){
        let photographer = data.photographers;
            for (let i = 0; i < photographer.length; i++) {
                document.querySelector(this.article).innerHTML += photographer[i].photographerArticle();
            }
    }
   
} */
//}

//display photographer index
export function createPhotographerArticle(photographers) {
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
        mainContainer.querySelector(".photographerItemTaglist").insertAdjacentHTML("beforeend", `<li class="photographerItemTag navButton"><a href="${tag}">#${tag}</a></li>`);
    }
    document.querySelector(".photographer").append(mainContainer);
  }

//trie par tag
export function sortByTag(active){
   // const photographerTags = document.querySelectorAll(".navButton");
   // const photographerArticle = document.querySelectorAll(".photographerItem");
   const tags = document.querySelectorAll(".navButton ");
   const sortTag = !active.classList.contains("tagON"); 
   console.log(tags);
   for (let tag of tags){
        if (tag.textContent === active.textContent) {
            if (sortTag) {
            tag.classList.add("tagON");
            } else {
            tag.classList.remove("tagON");
            }
        }
    }
}