let text='';
let i=0;
// while(i<10){
//    text+='the number is' +i +'\n'
//    i++;
// }
// console.log(text)

do{
    text+='the number is'+i +'\n'
}
while(i<0)

console.log(text)

let car=['bmw','audi','mercidise','ferrari']

let text2=''
for(let i=0;i<car.length;i++){
    if(i===2){
        continue;
    }
    text2+='the cars are '+car[i]+'\n'
}
console.log(text2)

let text3=''
while(i<car.length){
    if(i==3){
       // break;//break the execution
       i++//to ensure   move to next
       continue;//skip the current postion
    }
    text3 += 'cars are ' +car[i] +'\n'
    i++;
}
console.log(text3)

