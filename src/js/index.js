/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  // console.log(chanche(misc, misc.length));

  var top = document.getElementById("top");
  var middel = document.getElementById("midle");
  var botton = document.getElementById("botton");
  var test = chanche(misc, misc.length);

  top.innerHTML = test;
  botton.innerHTML = test;
  middel.innerHTML = chanche(centerNumber, centerNumber.length);

  var child = document.getElementById("p1");
};

var misc = ["♠", "♣", "♥", "♦"];
var centerNumber = [
  "A",
  "2",
  "3",
  "4",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function chanche(array, legua) {
  var este = Math.floor(Math.random() * legua);
  return array[este];
}
