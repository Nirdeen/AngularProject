export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imgurl:string;
    category:string;
    quantity:number;
    constructor(id,name,description='',price=0,imgurl='',category='',quantity=2){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imgurl = imgurl
        this.category = category
        this.quantity = quantity
      

    }
}
