//video 20
//rest oparator(...) same like sprad oparator
/*If want to passing multiple argument to a funtion without not mentioning in function defination
that time use rest oparator in parameter for acceting multiple arguments, and it stores into a array.
*/
function calculateCartItem(...item1){
    return item1;
}
//console.log(calculateCartItem(200,78,900,1233));//[ 200, 78, 900, 1233 ]
//
function calculateCart(item1,item0,...item2){
    return item0,item1,item2;
}
//console.log(calculateCart(12,90,78,908));//[ 78, 908 ] remaining last 2 are taken by rest oparator.

//Passing An object Into a Function

const product={
    product_name:'Mouse',
    product_price:'239'
}

function productDetails(electronic_product){
    console.log(`Product details :${electronic_product.product_name} and price is: ${electronic_product.product_price}`)
}
//productDetails(product)
//you can pass directly object inside a function
productDetails({product_name:'mobile',
    product_price:'78$'
})  

//Passing Array into a functions

const productArr=['wire','laptops','charger'];

function takeProduct(arrayOfProduct){
          console.log(`product details are ${arrayOfProduct[2]}`);
}
takeProduct(productArr)
//Can directly pass the array into the function
takeProduct(['airpods','tablates','powerbank'])