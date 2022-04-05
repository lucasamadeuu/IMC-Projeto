var altura = document.querySelector("#altura");
var peso = document.querySelector('#peso');
var resultado = document.getElementById('resultado');

function contaimc(){
    
    var imc = (peso.value / (altura.value^2));
    console.log(imc);
    console.log(peso.value);
    console.log(altura.value);
  
    if (imc < 18.5) {
        resultado.innerHTML = "Abaixo do peso!";
    }

    else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = "Normal!";
    }

    else if (imc >= 24.9 && imc < 29.9){
        resultado.innerHTML = "sobrepeso!";
    }

    else if (imc >= 29.9 && imc < 39.9){
        resultado.innerHTML = "Obesidade!";
    }

    else{
        resultado.innerHTML = "Obesidade grave!";
    }

}
