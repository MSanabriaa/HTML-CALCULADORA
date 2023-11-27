let num1 = 1;
let num2 = 2;
let num3 = 3;

let mayor = num1;

mayor = num2 > mayor ? num2 : num3 > mayor ? num3 : mayor;

console.log("El número más grande es:", mayor);


// Se utiliza una expresión ternaria para asignar el valor del número más grande a la variable mayor. La expresión ternaria funciona de la siguiente manera:
// Si la condición es verdadera, entonces se asigna el valor del primer operando a la variable mayor.
// Si la condición es falsa, entonces se asigna el valor del segundo operando a la variable mayor.
// Por último, se imprime el valor de la variable mayor en la consola.
// En este caso, el resultado de ambos programas es el mismo:

// El número más grande es: 3
