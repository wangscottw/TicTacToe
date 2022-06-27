let square = document.querySelectorAll(".square");

let playerX = 'X';
let playerO = 'O';
let turn = playerX;

let boardValues = Array[square.length];
//this is for the HTML divs with the class "square". This turns the divs into an array 
boardValues.fill(null);
//Fills array that we made will null and the nulls will be filled with X/O by player






const winningCombos = [
  //row combos
  {combo:[1,2,3]},
  {combo:[4,5,6]},
  {combo:[7,8,9]},
  //column combos
  {combo:[1,4,7]},
  {combo:[2,5,8]},
  {combo:[3,6,9]},
  //diagonal combos
  {combo:[3,6,9]},
]

function boardChecker() {

}
