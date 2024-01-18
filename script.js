let command = '';

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
   
    command = document.getElementById('userInput').value;

    if (command === 'date') {
      const d = new Date();
      document.getElementById("Command_Line").innerHTML = d;
    }

    if (command === 'help') {
        document.getElementById("Command_line").innerHTML = "the only one is date, for now";
      }
    else {
        document.getElementById("Command_line").innerHTML = "Command"+command"Is not recognized.....for now";
    }

  }
});
