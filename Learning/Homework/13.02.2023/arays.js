// Arrays

//Task 1
//let n = prompt('Introduceti numarul de elemente', 5);
let n = 5;
let arr = [1, 2, 3, 4, 5];
let f = null;

/*
for (let i = 0; i < n; i++){
    f = prompt('Introduceti urmatorul numar din array', 0);
    arr.push(f);    
}
*/

//1
for(let i = 0; i < n; i++){
    console.log(arr[i]);
}

//2
for (let x in arr) {
    console.log(arr[x]);
}

//3
for (let x of arr){
    console.log(x);
}

//4
console.log(arr);

//5
arr.map(console.log);

//6
alert(arr);