//Practical tasks for JavaScript fundamentals

/*
//Task 1
let n = prompt("Introduceti o cifra", 9);
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
}


/*
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


/*
//Task 3
let a = 102; 
let b = 10;
let c = -16;
if(a >= b) {
    if(a > c){
        console.log(`Cel mai mare numar este ${a}`)
    } else {
        console.log(`Cel mai mare numar este ${c}`)
    }
} else if(b > c) {
    console.log(`Cel mai mare numar este ${b}`)
} else {
    console.log(`Cel mai mare numar este ${c}`)
}


/*
//Task 4
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
let n = ucFirst('vadim');
console.log(n);

/*
//Task 5
function extractCurrencyValue(str) {
    return str.slice(1);
}
console.log(Number(extractCurrencyValue('$120')) === 120);


/*
//Task 6
let n = prompt("Introduceti un numar", 0);
if(n > 0) {
    alert(1);
} else if (n < 0) {
    alert(-1);
} else if(n == 0) {
    alert(0);
} else {
    alert("Eroare");
}
*/

/*
//Task 7
age = 19;
if (!(age >= 14 && age <= 90)) {
    console.log(age);
} else {
    console.log(`Ai ${age} ani, hai la lucru.`)
}

age = 10;
if (age < 14 || age > 90) {
    console.log(age);
} else {
    console.log(`Ai ${age} ani, hai la lucru.`)
}

/*
//Task 8
let username = prompt('Adaugati username:');
let password = prompt('Adaugati parola:');

if (!username || !password) {
  alert('Nu ati introdus toate datele');
} else if (username === 'admin' && password === '123') {
  alert('Привет!');
} else if (username === 'admin') {
  alert('Неправильный пароль');
} else {
  alert('Неправильный username');
}


/*
//Task 9
let client = prompt("Как вас зовут?", "");

if (client) {
  alert(`Привет, ${client}!`);

  let isFamiliar = confirm("Вы знакомы с языком JavaScript?");

  if (isFamiliar) {
    alert("Молодец!");
  } else {
    alert("Можно начать изучение прямо сейчас");
  }
} else {
    alert("Вы не ввели имя");
}

/*
//Task 10
const dividers = (number) => {
  console.log(`Divizorii numarului ${number} sunt: `)
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        console.log(`${i}`);
      }
    }
}
dividers(36);
*/