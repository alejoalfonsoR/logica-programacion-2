function convertirTemperatura() {
    //Se obtiene la temperatura ingresada por el usuario
    const elementoImput = document.getElementById("temp");

    // Validar el valor ingresado utilizando una expresión regular
    var valorIngresado = elementoImput.value;
    var esNumerico = /^\d+$/.test(valorIngresado);


    if (esNumerico) {
        const gradosCelsius = parseFloat(elementoImput.value);

        //Formula para convertir Celsius a fahrenheit
        const fahrenheit = gradosCelsius * 1.8 + 32;

        //Formula para convertir Celsius a kelvin
        const kelvin = gradosCelsius + 273.15;

        //Mostrar el resultado en el HTML
        const conversionF = document.createElement("p");
        const conversionK = document.createElement("p");

        conversionF.innerHTML = `${gradosCelsius} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit`;
        conversionK.innerHTML = `${gradosCelsius} grados Celsius equivalen a ${kelvin} grados Kelvin`;

        const mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = "";
        mostrarResultado.append(conversionF);
        mostrarResultado.append(conversionK);
        elementoImput.value = "";
    } else {
        elementoImput.value = "";
        const mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = "";
        alert("El valor ingresado no es numérico, por favor intentalo de nuevo");
    }
}