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
        this.urlTAG = this.getTAG();
        this.photographerSelected = document.querySelector(".photographerInfo"); // photographe 
        this.photographerPrice = document.querySelector(".profileInfoPrice"); //prix
        this.photographerName = document.querySelector(".modal-Title"); // nom du photographe dans le formulaire
        this.photographerSection = document.querySelector(".photographer"); // photographes  index.html
    }

    getID(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("id"); // get id from url
    }  
    getTAG(){
        var url_string = window.location.href; 
        var url = new URL(url_string);
        return url.searchParams.get("tags"); // get tag from url
    }
    
    toHTML() {
        
        this.photographerSection.innerHTML += `<article id="${this.id}" class="photographerItem">
                            <a href="photograher/photographer.html?id=${this.id}" aria-label="${this.name}">
                                <img class="photographerItemPhoto" src="img/Photographers ID Photos/${this.portrait}" alt="${this.name}">
                                <h2 class="photographerItemName">${this.name}</h2>
                            </a>
                            <p class="photographerItemCity">${this.city}, ${this.country}</p>
                            <p class="photographerItemText">${this.tagline}</p>
                            <p class="photographerItemPrice">${this.price}€/jour</p>
                            <div class="photographerItemTaglist" id="taglist_${this.id}">
                                ${this.tags.map(tag => `<a href="?tags=${tag}"><span aria-label="${tag}" class="photographerItemTag">#${tag}</span></a>`).join('')}
                            </div>
                        </article>`;
    }

    toHTMLID() {
        this.photographerSelected.innerHTML +=`<article id="${this.id}" class="photographerItem">
                                                <div class="photographerItemInfo">
                                                    <h2 class="photographerItemName">${this.name}</h2>            
                                                    <p class="photographerItemCity">${this.city}, ${this.country}</p>
                                                    <p class="photographerItemText">${this.tagline}</p>
                                                    <div class="photographerItemTaglist" id="taglist_${this.id}">
                                                        ${this.tags.map(tag => `<a href="../index.html?tags=${tag}"><span class="photographerItemTag">#${tag}</span></a>`).join('')}
                                                    </div>
                                                </div>
                                                </article>
                                                <div class="photographerItemMedia">
                                                        <img class="photographerItemPhoto" src="../img/Photographers ID Photos/${this.portrait}" alt="${this.name}" aria-label="${this.name}">
                                                </div>`;
       
    }

    formName(){
        this.photographerName.innerHTML = `Contactez-moi<br>${this.name}`
    }

    footerPrice(){
        this.photographerPrice.innerHTML = `${this.price} € / jour`
    }
} 


