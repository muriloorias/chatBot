function readInput() {
  let input = document.getElementById("textInput");
  let inputText = input.value.trim().toLowerCase(); // Pegando valor e convertendo para minúsculas

  //opções possiveis 
  if (inputText === "olá") {
    document.getElementById("text-respond").innerText = responses[0];
    console.log("reposta sucedida");
    
  } else if (inputText === "o que é você") {
    document.getElementById("text-respond").innerText = responses[1];
    console.log("resposta sucessedida");
    
  }
  else if (inputText == "como você pode me ajudar?") {
    document.getElementById("text-respond").innerText = responses[2];
    console.log("resposta sucedida");
    
  }
  else if(inputText == "1+1 é quanto"){
    document.getElementById("text-respond").innerText = responses[3]
  }

  //evitar nulos e respostas ionvalidas
  else {
    document.getElementById("text-respond").innerText = 
    "Desculpe não entendi, tem certeza que não esta em branco ou este comando existe?( se não souber os comandos pode ver eles na barra de cima clicando em ver comandos)";
    console.log("erro do usuario comando não existe ou o texto esta em branco");
  }

  input.value = "";
}

//redirect user to commands
function toCommands(){
  window.location.href = "commandList.html";
}