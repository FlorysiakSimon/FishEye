//GET JSON FILE

function fetchData(){
let myRequest = new Request("./data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);

        for (var i = 0; i < data.photographers.length; i++) {
            var mainContainer = document.querySelector(".photographer");
            var photographersList = document.createElement("article");
            photographersList.innerHTML = '<a href="#" aria-label="'+data.photographers[i].name +'">'+
                    '<img class="photographerItemPhoto" src="img/Photographers ID Photos/'+data.photographers[i].portrait +'"/>' +
                    '<h2 class="photographerItemName">'+ data.photographers[i].name +'</h2></a>'+
                    '<span class="photographerItemCity">'+data.photographers[i].city+'</span>'+
                    '<p class="photographerItemText"><span class="photographerItemTagline">'+ data.photographers[i].tagline +'</span>'+
                    '<span class="photographerItemPrice">'+ data.photographers[i].price+'€/jour</span></p>'+
                    data.photographers[i].tags;

                    mainContainer.appendChild(photographersList);
                    photographersList.classList.add("photographerItem");
        }
    });
}
    
fetchData();