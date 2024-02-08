let command = '';
const outputArea = document.getElementById('Command_Line');

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    
    command = document.getElementById('userInput').value;

    const commonOutput = `<p> guest@terminal.maxwell.com$~ ${command}</p>`;
    
    if (command.startsWith('echo ')) {
      const echoedText = command.substring(5); // Extract text after 'echo '
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> ` + `<p>${echoedText}</p>`;
    } else if (command === 'date') {
      const d = new Date();
      outputArea.innerHTML += `${commonOutput} 
        <p>${d}</p>`;
    } else if (command === 'help') {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p>` + help;
    } else if (command === 'clear') {
      outputArea.innerHTML = ''; 
      var commandLine = document.getElementById("Command_Line");
      commandLine.insertAdjacentElement('beforebegin', userInputContainer);
    } else if (command === 'echo') {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p>` + echo;
    } else if (command === 'whoami') {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> <br>` + whoami1;
    } else {
      outputArea.innerHTML += `<p> guest@terminal.maxwell.com$~ ${command}</p> ` + `<p>Command ${command} is not recognized... for now.</p>`;
    }    
    
    outputArea.innerHTML += '<hr class="invisible-hr">';
    document.getElementById('userInput').value = '';
    
   
  }
});


function moveDivUnderCommand() {
  // Get the elements
  var commandLine = document.getElementById("Command_Line");
  var userInputContainer = document.getElementById("userInputContainer");

  // Move the userInputContainer under the commandLine
  commandLine.insertAdjacentElement('afterend', userInputContainer);
}

moveDivUnderCommand();
userInput.focus();


document.getElementById('userInput').focus();

userInput.addEventListener('blur', function () {
  userInput.focus();
});


let whoami1 = "<p>My name is Maxwell Stevenson, I am a high school freshman that attends Alta High School, I like everything software, hardware, and rap music</p>"

let help = "<p>Commands:</p><span class='line-break'></span><p>echo- repeats phrases</p><span class='line-break'></span><p>whoami- Who am I? (Pronounced woah-mi)</p><span class='line-break'></span><p>clear- clears all previous commands</p><span class='line-break'></span><p>date- displays the time and date</p>"

let echo ="<p>Make sure to have a phrase after this command!</p>"

