 function photographerArticle(){

for (var i = 0; i < photographers.length; i++) {
    var mainContainer = document.querySelector(".photographer");
    var photographerTag = photographers[i].tags[i];
    var photographersList = document.createElement("article");
    photographersList.innerHTML = '<a href="#" aria-label="'+photographers[i].name +'">'+
            '<img class="photographerItemPhoto" src="'+photographers[i].index_photo +'"/>' +
            '<h2 class="photographerItemName">'+ photographers[i].name +'</h2></a>'+
            '<span class="photographerItemCity">'+photographers[i].city+'</span>'+
            '<p class="photographerItemText"><span class="photographerItemTagline">'+ photographers[i].tagline +'</span>'+
            '<span class="photographerItemPrice">'+ photographers[i].price+'€/jour</span></p>'+
            '<ul class="taglist">'
            +photographers[i].tags; +
            '</ul>';
            //photographersTag();
            console.log(photographerTag);
            mainContainer.appendChild(photographersList);
            photographersList.classList.add("photographerItem");

}
}