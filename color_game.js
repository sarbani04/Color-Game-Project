var numSquares = 6;
var colors = generateRandomColors(numSquares);  //takes any random 6 colors as input

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();   //new function
var colorDisp = document.getElementById("colorDisp"); 
colorDisp.textContent = pickedColor;

var messageDisp = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){     //to select easy btn 
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  //generating 3 random colors for easy mode
  numSquares =3;
  colors = generateRandomColors(numSquares);             
  pickedColor = pickcolor(); 
  colorDisp.textContent = pickedColor;  
  for(var i=0; i< squares.length; i++ ){
    if(colors[i]){             // here i = 3
      squares[i].style.backgroundColor = colors[i];  //chnging the colors of frst 3sqrs
    }else{
      squares[i].style.display = "none";             //hiding the last 3 sqrs
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);             
  pickedColor = pickcolor(); 
  colorDisp.textContent = pickedColor;  
  for(var i=0; i< squares.length; i++ ){
      squares[i].style.backgroundColor = colors[i];  //chnging the colors of frst 3sqrs
      squares[i].style.display = "block";             //un-hiding the last 3 sqrs
  }
});

resetButton.addEventListener("click", function(){
     //generate all new colors
     colors = generateRandomColors(numSquares);
     //pick a random color from array
      pickedColor = pickcolor(); 
     //change the colordisp to match the pickedcolor
     colorDisp.textContent = pickedColor; 
     this.textContent= "New Colors!!"
     messageDisp.textContent = " ";     //toremove the "correct text" when we click the reser button
     //change colors of square
     for(i=0; i< squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
     }
     h1.style.backgroundColor = "steelblue";  //changing the background of h1 to be black always
});

for(i=0; i< squares.length; i++){
    //add initial colors to sqrs
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares
    squares[i].addEventListener("click", function(){
       //grab a color amongst the sqrs
      var clickedColor = this.style.backgroundColor;
       //compare the color with pickedcolor
      if(clickedColor === pickedColor){
        messageDisp.textContent = "Correct!!"
        resetButton.textContent = " Wanna Play Again?? "
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor; //changes the background of h1 with the picked coloe
      } else{
          this.style.backgroundColor = "#232323";
          messageDisp.textContent = "Try Again!!"
      }
    });
}

function changeColors(color) {       //to make all the colors same as the pickedColor
    //loop through all the squares
    for (let i = 0; i < squares.length; i++) {
    //    change each color to match the given colors
    squares[i].style.backgroundColor = color;
        
    }
}
 
//picks a random color amongst given 6 colors
function pickcolor() {  
    // math.random() picks a random no. from 0 to <1, and multiplies with length od color array(give 5)
  var random = Math.floor(Math.random() * colors.length); 
   return colors[random];                                                       
}

function generateRandomColors(num){
  //make an arr
  var arr = [];

  // repeat num times
  for (let i = 0; i< num; i++) {
   //add random colors and push in the arr
   arr.push(randomColors());
      }
  //retun the arr
  return arr;
}

function randomColors(){  // it will generae random coors forus
  //pick red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0-255
  var b = Math.floor(Math.random() * 256);
   return ("rgb(" + r + ", " + g + ", " + b + ")")   //spaces after the comma is necessary
}



//refactoring is no done here!!!