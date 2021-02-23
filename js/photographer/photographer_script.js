//IMPORT
import {Media} from "./photographer_media.js";

//DOM
const mediaSection = document.querySelector(".media"); //section media
/*var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var urlID = url.searchParams.get("id");
console.log(urlID); */


//GET JSON FILE
let myRequest = new Request("../../data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      for (let i in data.media) {
          var articleMedia = new Media(data.media[i]);
          mediaSection.innerHTML += articleMedia.toHTML();
      //}
      }
    });
    
