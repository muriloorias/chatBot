const listCommands = [
  //olá = 0
  "olá",
  //como vai = 1 
  "o que é você?",
  //como pode me ajudar = 2
  "como você pode me ajudar?"
];

const showList = document.getElementById("listCommands");

listCommands.forEach(list => {
  const li = document.createElement("li");
  li.textContent = list;
  showList.appendChild(li)
});
