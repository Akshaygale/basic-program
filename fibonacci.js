// FIBANACCCI SERIES

let n1=0,n2=1,n3, num_element=10;
console.log(n1);
console.log(n2);
for(let i=2;i<num_element;i++){
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}