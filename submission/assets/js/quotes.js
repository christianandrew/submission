window.setInterval('refresh()', 15000); 
var i = 0;
var speed = 50;

var quotes = ['"Gotta catch em all" - Ash', '“We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows?” – Meowth','“There’s no sense in going out of your way to get somebody to like you.” – Ash Ketchum']
const random = Math.floor(Math.random() * quotes.length);
console.log(random, quotes[random]);

function sendquotes() {
  if (i < quotes[random].length) {
    document.getElementById("quotes").innerHTML += quotes[random].charAt(i);
    i++;
    setTimeout(sendquotes, speed);
  }
}
function refresh() {
    window .location.reload();
}


sendquotes();