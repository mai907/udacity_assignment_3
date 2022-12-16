export class CartElemnt {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity: number;

    constructor(){
        this.id =1;
        this.name="";
        this.price=0;
        this.description="";
        this.url="";
        this.quantity=1;
    }
}

export class Request{ 
    fullName: string ;
    address: string ;
    creditCardNumber: string; 
    total: number

    constructor(){
        this.fullName = "";
        this.address="";
        this.creditCardNumber ="";
        this.total = 0;
    }
}