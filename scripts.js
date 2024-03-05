function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;

    
    if ( operacao === "+") {
      resultado = parseInt(num1) + parseInt(num2);
    } else if ( operacao === "-") {
      resultado = parseint(num1) - parseint(num2);
    }
    else if ( operacao === "*") {
      resultado = parseInt(num1) * parseInt(num2);
    }
    else if ( operacao === "/") {
      resultado = parseInt(num1) / parseInt(num2);
    }


    document.getElementById("resultado").innerHTML = resultado;
  }


  