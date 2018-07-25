var correctAnswer = 0;

document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName('p');
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = "https://www.fandango.com/account/joinnow";
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

function submitFirstAnswer() {
  var radios = document.getElementsByName("choice");
  var i = 0, len = radios.length;
  var checked = false;
  var userAnswer;
  
  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  } 
  // if user click submit button without selecting any option, alert box should be say "please select choice answer".
  if(!checked) {
    alert("Please select choice answer.");
    return;
  }
  // Correct answer
  if(userAnswer === "Costa Rica") {
     alert("Answer is correct!");
  }
  // incorrect answer
  else {
     alert("Answer is wrong!");
  }
}