let command = '';
    const outputArea = document.getElementById('Command_Line');

    document.addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        command = document.getElementById('userInput').value;

        if (command === 'date') {
          const d = new Date();
          outputArea.innerHTML += `<p>${d}</p>`;
        } else if (command === 'help') {
          outputArea.innerHTML += "<p>The only command is 'date' for now.</p>";
        } else {
          outputArea.innerHTML += `<p>Command '${command}' is not recognized... for now.</p>`;
        }

        // Clear the input field
        document.getElementById('userInput').value = '';
      }
    });

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  
  window.location.href = "mobile.html";
} else {
   //nothing, they are on pc
}
