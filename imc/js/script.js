var altura = document.getElementById('altura').value;
var peso = document.getElementById('peso').value;
var imc = (peso / (altura^2));
var resultado = document.getElementById('resultado');

function contaimc(){
  
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
