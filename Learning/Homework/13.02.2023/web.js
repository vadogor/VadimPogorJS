//Practical tasks for JavaScript fundamentals

//Task 1
/*let n = prompt("Introduceti o cifra", 9);
switch(Number(n)) {
    case 1: console.log("One"); 
    break;
    case 2: console.log("Two");
    break;
    case 3: console.log("Three");
    break;
    case 4: console.log("Four");
    break;
    case 5: console.log("Five");
    break;
    case 6: console.log("Six");
    break;
    case 7: console.log("Seven");
    break;
    case 8: console.log("Eight");
    break;
    case 9: console.log("Nine");
    break;
    case 0: console.log("Zero");
    break;

    default: console.log('Cred ca nu ati introdus o cifra')
    break;
}*/

//Task 2
alert('In continuare urmeaza sa introduceti un interval [a, b], cu a, b - numere pozitive');
let x = null;
let y = null;
do{
    x = prompt("Introduceti inceputul intervalului", 0);
} while (x < 0);

do{
    y = prompt("Introduceti sfarsitul intervalului", 100);
} while(y < 0);

let s = 0;
let m = x / 1;
let o = y / 1;
if(m == o){ 
    console.log(`[${x},${y}] nu este un interval`);
} else {
    if(m > o){
        let v = m;
        m = o;
        o = v;
    } 
    if(m % 2 === 1){
        m = m + 1;
    }
    let i = m;       
    while(i <= o){
        s += i;
        i += 2;
    }
    console.log(`Suma numerelor pare din intervalul [${x},${y}] este: ${s}`);
}

