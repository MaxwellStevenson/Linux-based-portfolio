let command = '';
const outputArea = document.getElementById('Command_Line');

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    command = document.getElementById('userInput').value;

    if (command.startsWith('echo ')) {
      const echoedText = command.substring(5); // Extract text after 'echo '
      outputArea.innerHTML += `<p>${echoedText}</p>`;
    } else if (command === 'date') {
      const d = new Date();
      outputArea.innerHTML += `<p>${d}</p>`;
    } else if (command === 'help') {
      outputArea.innerHTML += "<p>Commands:</p><br><p>echo- repeats phrases</p><span class='line-break'></span><p>whoami- Who am I? (Pronounced woah-mi)</p><span class='line-break'></span><p>clear- clears all previous commands</p><span class='line-break'></span><p>date- displays the time and date</p>";
    } else if (command === 'clear') {
      outputArea.innerHTML = ''; // Clear the output area
    } else if (command === 'echo') {
      outputArea.innerHTML = '<p>Make sure to have a phrase after this command!</p>';
    } else if (command === 'whoami') {
      outputArea.innerHTML = '<p>My name is Maxwell Stevenson, I am a highschool freshman that attends Alta Highschool, I like everything software, hardware and rap music</p>';
    } else {
      outputArea.innerHTML += `<p>Command '${command}' is not recognized... for now.</p>`;
    }
    // Clear the input field
    document.getElementById('userInput').value = '';
  }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //console.log(navigator.userAgent)
  window.location.href = "mobile.html";
} else {
  // Nothing, they are on PC
}


document.getElementById('userInput').focus();

userInput.addEventListener('blur', function () {
  userInput.focus();
});
