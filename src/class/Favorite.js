export default class Favorite{
    #uid;
    #favorite = new Map();
    constructor(uid){
        this.#uid = uid;
    }

    findHomestay(hid){
        if(this.#favorite.has(hid)){
            return this.#favorite.get(hid);
        }else{
            return -1;
        }
    }

    removeHomestay(hid){
        this.#favorite.delete(hid);
    }

    addOrRemoveFavorite(homestayList){
        let home = this.findHomestay(homestayList.hid);
        if(home==-1)
            this.#favorite.set(homestayList.hid,homestayList);
        else{
            this.removeHomestay(homestayList.hid);
        }
    }

    get favorite(){
        let output = [];
        for(let home of this.#favorite.values()){
            output.push({hid:home.id, title:home.title, desc:home.desc,amenities:home.amenities,vegetarian_friendly:home.vegetarian_friendly,price_per_month:home.price_per_month,image_path:home.image_path });
        }
        return output;
    }

    toSave(){
        let output = [];
        for(let item of this.#favorite.values()){
            output.push({hid:item.id});
        }
        localStorage.setItem(this.#uid,JSON.stringify(output));
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
}