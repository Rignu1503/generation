function calcularPropina(total, porcentaje){

    let valorPropina = (porcentaje / 100) * total
    let totalAPagar = total + valorPropina
    
    return  totalAPagar, valorPropina 
}

//2.
function validarContraseña(contraseña) {
    return contraseña.length >= 8 &&
           /[A-Z]/.test(contraseña) &&
           /\d/.test(contraseña);
}

console.log(validarContraseña("Clave123"));


// 3.
const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 }
];

function buscarProducto(nombre, inventario) {
    for (let producto of inventario) {
        if (producto.nombre === nombre) {
            return producto;
        }
    }
    return null;
}

console.log(buscarProducto("Camisa", inventario));


// 4.
function calcularPromedio(notas) {
    let suma = 0;

    for (let nota of notas) {
        suma += nota;
    }

    return (suma / notas.length).toFixed(2);
}

console.log(calcularPromedio([4.5, 3.8, 5.0, 4.2]));


// 5.
const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 17 },
    { nombre: "María", edad: 30 }
];

function filtrarUsuarios(usuarios, edadMinima) {
    let resultado = [];

    for (let usuario of usuarios) {
        if (usuario.edad >= edadMinima) {
            resultado.push(usuario);
        }
    }

    return resultado;
}

console.log(filtrarUsuarios(usuarios, 18));


// 6.
function contarPalabras(texto) {
    return texto.trim().split(" ").length;
}

console.log(contarPalabras("Hola mundo desde JavaScript"));


//7.
function retirarDinero(saldo, monto) {
    if (monto > saldo) {
        return "Fondos insuficientes";
    }

    return saldo - monto;
}

console.log(retirarDinero(500000, 150000));


// 8.
function convertirMoneda(monto, monedaDestino) {
    const tasaUSD = 4000;
    const tasaEUR = 4500;

    if (monedaDestino === "USD") {
        return (monto / tasaUSD).toFixed(2) + " USD";
    }

    if (monedaDestino === "EUR") {
        return (monto / tasaEUR).toFixed(2) + " EUR";
    }

    return "Moneda no válida";
}

console.log(convertirMoneda(1000000, "USD"));
console.log(convertirMoneda(1000000, "EUR"));