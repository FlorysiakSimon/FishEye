import {Media} from "./photographer/photographer_media.js";
import {Photographer} from "./photographerArticle.js";
import {Lightbox} from "./photographer/lightbox.js";
import {list} from "./photographer/list_media.js";

export class Fabrik {
    
    createMedia(data){return new Media(data);}
    createPhotographer(data){return new Photographer(data);}
    createLightbox(data){return new Lightbox(data);}
    createList(){return new list();}
}