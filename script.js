let command = '';

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
   
    command = document.getElementById('userInput').value;

    if (command === 'date') {
      const d = new Date();
      document.getElementById("Command_Line").innerHTML = d;
    }

    if (command === 'help') {
        document.getElementById("the only one is date, for now").innerHTML = d;
      }

  }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
  window.location.href = "mobile.html";
} else {
   //nothing, they are on pc
}
