
var  INR= 1000;
document.getElementById("moneyLeft").innerHTML = "You have " + INR + " INR";


function randomNumGenerator(){
var x = Math.floor((Math.random() * 10) + 0);
var y = Math.floor((Math.random() * 10) + 0);
var z = Math.floor((Math.random() * 10) + 0);
var finalNum = ""+x+y+z;
document.getElementById("randomNumbers").innerHTML = finalNum;
document.getElementById("demo1").innerHTML = "The Random Numners are ";
document.getElementById("demo2").innerHTML = "";


if(x==y && y==z && z==x){
  INR+=900;
  document.getElementById("moneyLeft").innerHTML = "You have " + INR + " INR ";
  document.getElementById("message").innerHTML = "You are lucky, you got 1000 INR as all the numbers are EQUAL";
}

else if(x%2==0 && y%2==0 && z%2==0){
  INR+=200;
  document.getElementById("moneyLeft").innerHTML = "You have " + INR + " INR ";
  document.getElementById("message").innerHTML = "You are lucky this time, you got 300 INR as all the numbers are EVEN";
}

else if(x%2==1 && y%2==1 && z%2==1){
  INR+=200;
  document.getElementById("moneyLeft").innerHTML = "You have " + INR + " INR ";
  document.getElementById("message").innerHTML = "You are lucky this time, you got 300 INR as all the numbers are ODD";
}

else if((((Math.abs(x-y)==1)&&(Math.abs(y-z)==1))||((Math.abs(x-z)==1)&&(Math.abs(y-z)==1))||((Math.abs(x-y)==1)&&(Math.abs(x-z)==1))) && ((x!=y) && (z!=x) && (y!=z))){
  INR+=700;
  document.getElementById("moneyLeft").innerHTML = "You have " + INR + " INR";
  document.getElementById("message").innerHTML = "You are lucky this time, you got 800 INR as all the numbers have DIFFERENCE 1. ";
}

else if(INR<=100){
  document.getElementById("gameOver").disabled=true;
  document.getElementById("message").innerHTML = "Game Over";
}

else{
  INR-=100;
  document.getElementById("moneyLeft").innerHTML = "You have "+ INR + " INR ";
  document.getElementById("message").innerHTML = "You are not lucky this time, you lose 100 INR ";
}
}
