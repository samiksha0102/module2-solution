

(function() {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();

 currentName=names[i];
  if (firstLetter === 'j') {
    byeSpeaker.speak(currentName);

  } else {
    helloSpeaker.speak(currentName);
  }
}

})();
