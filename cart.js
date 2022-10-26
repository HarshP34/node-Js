const fs=require('fs');
const path=require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );


module.exports=class cart{
  static addProduct(id,productprice)
  {
     fs.readFile(p,(err,filecontent)=>{
     
        let cart={products:[],totalprice:0}
        if(!err)
        {
            cart=JSON.parse(filecontent);
        }
        const existingProductIndex=cart.products.findIndex((prod )=> prod.id===id);
        console.log(existingProductIndex);
        const existingProduct=cart.products[existingProductIndex]
        let updatedProduct;
        if(existingProduct)
        {
             updatedProduct={...existingProduct};
             updatedProduct.qty=updatedProduct.qty+1;
             cart.products=[...cart.products];
             cart.products[existingProductIndex]=updatedProduct;
        }
        else{
            updatedProduct={id:id,qty:1}
            cart.products=[...cart.products,updatedProduct]
        }
        cart.totalprice=cart.totalprice+ +productprice;
       fs.writeFile(p,JSON.stringify(cart),(err)=>{
        console.log(err);
       })
     })
  }
}