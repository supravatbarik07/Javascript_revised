//Date

const myDate=new Date();

// console.log(myDate.getDate());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


const myDate1=new Date(2024,0,0) // in date function month numbers starts from 0

//console.log(myDate1.toLocaleString());//Sat Jan 06 2024

const myDate2=new Date(2024,0,6,5,45)
//console.log(myDate2.toLocaleString());//1/6/2024, 5:45:00 AM

const myDate3= new Date("2024-01-23") // But in yyyy-mm-dd format month starts from 01
const myDate4= new Date('01-23-2024') // mm-dd-yyyy also available
//console.log(myDate3.toLocaleString()); // 1/23/2024, 12:00:00 AM


const myDate5=Date.now();//give current date and time in milliseconds

//console.log(myDate5);
// console.log(myDate6);
// console.log(myDate4.getTime()); // give time and date in miliseconds 

//console.log(Math.floor(Date.now()/1000)); // Give time and dt in seconds 

const myDate6 = new Date();  // Create a Date object with the current date and time

const weekday = myDate6.toLocaleString('default', {
    weekday: 'long'   // Get the full name of the day (e.g., "Monday")
});

console.log(weekday);  // This will log the name of the current day of the week
