let numMayor = [];

for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i > 5) {
        numMayor.push(i);
    }   
}

console.log("Cantidad de numeros mayores que 5: " + numMayor.length);
console.log("Numeros mayores que 5: " + numMayor);