//Arreglo de Ejemplo:
let personas = [
    { nombre: "Carlos", edad: 30, ciudad: "Bogotá" },
    { nombre: "Ana", edad: 25, ciudad: "Medellín" },
    { nombre: "Luis", edad: 35, ciudad: "Cali" }
];

// 1.Accede al nombre de la persona que vive en "Medellín". Ana
/*
for (let i = 0; i<personas.length; i++){
    if(personas[i].ciudad == "Medellín"){
        console.log(personas[i].nombre)
    }
}

function obtenerPersonaPorCiudad(personas) {
    let ciudad = "Medellín"; // Aquí puedes cambiar la ciudad que buscas, o pasarla como un parámetro adicional
    let nombres = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].ciudad === ciudad) {
            nombres.push(personas[i].nombre); // Agrega el nombre de la persona que vive en la ciudad
        }
    }
    return nombres; // Retorna el arreglo de nombres
}
console.log(obtenerPersonaPorCiudad(personas))
*/

/* 
2. Accede a la edad de la persona que se llama "Carlos". 30
for (let i = 0; i<personas.length; i++){
    if ( personas[i].nombre === "Carlos"){
        console.log(personas[i].edad)
    }
}
*/

/* 
3. Agrega una nueva persona al arreglo con nombre "Marta", edad 28 y ciudad "Barranquilla". 
personas.push({ nombre: "Marta", edad: 28, ciudad: "Barranquilla"})
console.log(personas)
*/

/* 
4. Elimina a la persona que vive en "Cali" del arreglo.
for (let i = 0; i<personas.length; i++){
    if(personas[i].ciudad == "Cali"){
        personas.splice(i,1);
    }
}
console.log(personas)
*/

/* 
5. Modifica la edad de "Luis" para que sea 40.
personas[2].edad=40
console.log(personas)
*/

/*
6. Cuenta cuántas personas tienen una edad mayor o igual a 30.
let conPer = 0
for (let i = 0; i<personas.length; i++){
    if (personas[i].edad >= 30){
        conPer++;
    }
}
console.log(conPer)
*/

/*
7. Ordena el arreglo de personas por edad de menor a mayor
personas.sort(function(a, b) {
    return a.edad - b.edad;  // Compara las edades de las personas
});
console.log(personas)
*/

/*
8. Crea un nuevo arreglo con solo los nombres de las personas.
let numArreglo = []
for (let i = 0; i<personas.length; i++){
    numArreglo.push(personas[i].nombre);
}
console.log(numArreglo)
*/