class User{
    constructor(id,fname,lname,email,pass,gender){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.pass = pass; 
        this.gender = gender;

    }
    displayInfo(){
        return this;
    }
}

export class Customer extends User{
    constructor(id,fname,lname,email,pass,gender,vegetarian,budget,location,type){
        super(id,fname,lname,email,pass,gender);
        this.vegetarian = vegetarian;
        this.budget = Number(budget);
        this.location = location;
        this.type = type;
    }

    displayInfo(){
        return this;
    }
}

export class admin extends User{
    constructor(id,fname,lname,email,pass,gender,type){
        super(id,fname,lname,email,pass,gender);
        this.type = type;
    }
    displayInfo(){
        return this;
    }
}

export default User;