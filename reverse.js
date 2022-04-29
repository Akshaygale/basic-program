// // REVERSE THE NUMBER


// let rev=0, rem;
// let num=45678;

// while (num!=0) {
//     rem=num % 10;
//     rev=rev * 10 + rem; 
//     num=Math.floor(num/10);     /* Math.floor() alway used in js   save program logic in c program but simple use num+=num/10 */

// }
// console.log(rev);


function reverse(num) {
  return (
    num.toString()
    .split('')
    .reverse()
    .join('')
  ) * Math.sign(num)
}

 

 console.log(reverse(4567));