var input = require("readline-sync");
var score=0;
var user=input.question("What's your name? ");
console.log("Welcome "+user+",Let's talk something about Virat Kohli (Quiz is having -ve marking) All The Best!");

function Quiz(Question,Answer){
  var userAnswer=input.question(Question);
    if(userAnswer===Answer){
    score+=1;
    console.log("Great!,Right Answer.");
  }
  else{
    score-=1;
    console.log("Sad!, Wrong answer.");
  }
}


Quiz("Which sport Virat Kolhi play? ","Cricket");
Quiz("What is his nick name?", "Chickoo");
Quiz("Where was he born?","Delhi");
Quiz("For Which IPL team, he play?(short-form) ","RCB");
Quiz("In which Year, Virat Kohli did ODI debut??","2008");
console.clear()
console.log("Thank You "+user+".\nYour Score is: "+score);