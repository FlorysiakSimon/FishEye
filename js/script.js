//IMPORT
import {Fabrik} from "./fabrik.js";
//DOM
const fabrik = new Fabrik();
//GET JSON FILE
let myRequest = new Request("./data/FishEyeDataFR.json") ;
fetch(myRequest)
    .then(function(resp){
        return resp.json();
    })
    //display homepage data
    .then((data) => {
      const photographers = data.photographers;
      
      for (let i in photographers) {
        var article = fabrik.createPhotographer(photographers[i]);
        var tags = article.tags;
        let sortTag = tags.filter(tag => (tag == article.urlTAG)); // filtre tag selon urlTAG
        
        if(article.urlTAG == null) {
          article.toHTML();
        }else{
          if(sortTag == article.urlTAG){
            article.toHTML();
          }
        }
      }
    });
    
    
