const fs = require(`fs`);
const path = require(`path`)
const p = path.join(__dirname,
    `../data`,
    `products.json`
    );

const getProductsFromFile = (callBack) =>{
    fs.readFile(p,(err, fileContent)=>{
        if (err){
            callBack([]);
        }
       else {
        callBack(JSON.parse(fileContent));
       } 
    })
}

module.exports = class Product {
    constructor(title,imageUrl,price,description){
      this.title = title; 
      this.imageUrl = imageUrl; 
      this.price = price; 
      this.description = description;  
      console.log(!this.imageUrl)

      
    }

    save(){
        //save to a file system
        getProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            });
                
           }
        );
    }
    //static makes sure we can call the method on the class itself and not on an instantiated object
    static fetchAll(callBack){
        getProductsFromFile(callBack)
    }

};

//static method is one thats defined ona class but is not part of the instantiated obj that is create
//static methods dont need an instance of the class to be created in order to be used
//These are aka as helper methods, the are utility methods that dont have a object linked
 