var dolarDinamico = document.getElementById("r_USD");
dolarDinamico = dolarDinamico.innerText;
dolarDinamico = dolarDinamico.replace(/\D/g,'');
dolarDinamico = dolarDinamico/100;


var euroDinamico = document.getElementById("r_EUR");
euroDinamico = euroDinamico.innerText;
euroDinamico = euroDinamico.replace(/\D/g,'');
euroDinamico = euroDinamico/100;


var libraDinamico = document.getElementById("r_GBP");
libraDinamico = libraDinamico.innerText;
libraDinamico = libraDinamico.replace(/\D/g,'');
libraDinamico = libraDinamico/100;


function converter(){
  // 1 - recuperar as moedas (in, out)
  var mIn = document.querySelector('input[name="in"]:checked').value;
  var mOut = document.querySelector('input[name="out"]:checked').value;

  // 2 - recuperar o valor a ser convertido
  var quantia = document.getElementById("quantia").value;

  // 3 - excutar a conversão
  var valorEmReal = 0;
  var valorConvertido = 0;

    //Converter para REAL
  if(mIn == "dolar"){
    valorEmReal = quantia * dolarDinamico;
  }
  if(mIn == "euro"){
    valorEmReal = quantia * euroDinamico;
  }
  if(mIn == "libra"){
    valorEmReal = quantia * libraDinamico;
  }
  if(mIn == "real"){
    valorEmReal = quantia;
  }
  //Converto Para a moeda destino
  if(mOut == "dolar"){
    valorConvertido = valorEmReal / dolarDinamico;

  }
  if(mOut == "euro"){
    valorConvertido = valorEmReal / euroDinamico;
  }
  if(mOut == "libra"){
    valorConvertido = valorEmReal / libraDinamico;
  }
  if(mOut == "real"){
    valorConvertido = valorEmReal;
  }

  // 4 - atualizar o HTML com o resultado
  document.getElementById("resultado").innerText = valorConvertido.toFixed(2);

}
