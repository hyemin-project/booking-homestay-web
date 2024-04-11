export default class Favorite{

    #uid;
    #favorites = new Map();

    constructor(uid){
        this.#uid = uid;
        // console.log("favorite list created for user id " + this.#uid);
    }




    isFavorite(hid) {

        return this.#favorites.has(hid);
    }

    // add or remove homestay from favorite list
    toggleFavorite(homestay) {
        console.log("toggle favorite add " + homestay.hid);
        if (this.#favorites.has(homestay.hid)) {

            this.#favorites.delete(homestay.hid);
            // console.log("favorite list delete " + homestay.hid);
            console.log("favorite list length " + this.#favorites.size)
        } else {
            this.#favorites.set(homestay.hid, homestay);
            // for(let key of this.#favorites.keys()){
            //     console.log("favorite list has " + key);
            // }
            
        }

        this.saveFavoriteListToLocalStorage()
     
    }

    populateDataToObj(homestay) {
        console.log("toggle favorite add " + homestay.hid);
        if (this.#favorites.has(homestay.hid)) {

            this.#favorites.delete(homestay.hid);
            // console.log("favorite list delete " + homestay.hid);
            console.log("favorite list length " + this.#favorites.size)
        } else {
            this.#favorites.set(homestay.hid, homestay);
            // for(let key of this.#favorites.keys()){
            //     console.log("favorite list has " + key);
            // }
            
        }

       
     
    }

    getFavoriteSize(){
        return this.#favorites.size;
    }

    isFavoriteEmpty(){
        return this.#favorites.size === 0;
    }


    getFavoritesList() {
        // console.log("get favorite list" +Array.from(this.#favorites.values()));
        return Array.from(this.#favorites.values());
    }

    // save favorite list to local storage
    saveFavoriteListToLocalStorage() {
        //converts the each HomestayObj instance with private fields into a
        // new object with the same data but in a public structure
        const favoritesArray = Array.from(this.#favorites.values()).map(homestay => homestay.serialize());
        localStorage.setItem(this.#uid, JSON.stringify(favoritesArray));
    }

   

}


export class HomestayObj{
    #hid;
    #title;
    #desc;
    #location;
    #rating;
    #price_per_month;
    #amenities;
    #vegetarian_friendly;
    #image_path;

    constructor(hid,title,desc,location,rating,price_per_month, amenities, vegetarian_friendly,image_path){
        this.#hid = hid;
        this.#title = title;
        this.#desc = desc;
        this.#location = location;
        this.#rating = rating;
        this.#price_per_month = price_per_month;
        this.#amenities = amenities;
        this.#vegetarian_friendly = vegetarian_friendly;
        this.#image_path = image_path;
        console.log("homestay obj created " );
    }

    //convert the instance with its private properties into a plain JavaScript object 
    //with the same property values, but publicly accessible.
    serialize() {
        return {
            hid: this.#hid,
            title: this.#title,
            desc: this.#desc,
            location: this.#location,
            rating: this.#rating,
            price_per_month: this.#price_per_month,
            amenities: this.#amenities,
            vegetarian_friendly: this.#vegetarian_friendly,
            image_path: this.#image_path
        };
    }

    get hid(){
        return this.#hid;
    }

    get title(){
        return this.#title;
    }

    get desc(){
        return this.#desc;
    }

    get location(){
        return this.#location;
    }

    get rating(){
        return this.#rating;
    }


    get price_per_month(){
        return this.#price_per_month;
    }

    get amenities(){
        return this.#amenities;
    }

    get vegetarian_friendly(){
        return this.#vegetarian_friendly;
    }
    get image_path(){
        return this.#image_path;
    }

    //  objsuccess(){
    //     return "obj success created";
    //  }
}