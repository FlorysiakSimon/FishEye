//import


//GET JSON FILE
let myRequest = new Request("./data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        let photographers = data.photographers;
        console.log(photographers);
            
    });
