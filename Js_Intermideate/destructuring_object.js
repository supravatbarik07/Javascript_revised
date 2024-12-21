//Object destructuring

const curse={
         curse_name:'Javascript',
    curse_price:'8$',
    curse_author:'hitesh'
}

//destructure formula:
/*To make ur code clean and avoiding mulptiple time declaring same key value like curse.curse_author if 
we want to use multiple time simply use the below object destruture formula.*/

const {curse_author:author_name}=curse

console.log(author_name);

//Api struture


