var veryHungry = false;
var number = 1
function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Billy's after school ordeal"; // title

  document.getElementById('author').innerHTML="The Coreys"; // author


  
  // All of your code goes under here
  

  var story = 'Billy is your typical 10 year old boy. Billy got home from school one day and decided to play a game.' + game();   // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function game() {
  let hours = Math.floor(random(1, 6)); // Random number rounded down
  if(hours > 3) {
    veryHungry = true;
    return " Billy began to play Fortnite when all of the sudden he quit." + quit();
  } else {
      return " Billy began to play Minecraft when all the sudden he got thirsty. " +
  thirsty() ;
  }
}



function thirsty() {
  let insp = random(1, 6);
  if(insp > 3) {
    return " Billy gets sleepy from the erbs in his Tea and passed out on the floor."
  } else 
    if(number == 1){
    number = 2
    return " Billy drinks his redbull and decideds he has the energy to choose a different game."+ game()
    
   }  else { return " Billy passes out due to being overwhelmed with drink options."
   } 
}
  

function quit() {
  let quits = random(1, 6)
  if(quits > 3) {
    return " Billy calmly turns off his Xbox and finishes his homework."
  } else { return " Billy gets so mad that he takes his Xbox and controller and smashes them on the ground as his mom walks through the door." + destroyed()
  }
}

function destroyed() {
  let mom = random(1,6)
  if (mom > 3) {
    return " Billy's mom did not hesitate to scoled him."
  } else { return " Billy's mom got so angry that she immediately took her bag and smacked him over the head."
}
}




//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    

