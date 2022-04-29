// PALINDROME NUMBER

let rev=0, rem;
let num=1234321;
let mynum=num;

while (num!=0) {
    rem=num % 10;
    rev=rev * 10 + rem; 
    num=Math.floor(num/10);     /* Math.floor() alway used in js   save program logic in c program but simple use num+=num/10 */

}
if(mynum==rev){
    console.log("PALINDROME");

}else{
console.log("NOT A PALINDROME")
}

