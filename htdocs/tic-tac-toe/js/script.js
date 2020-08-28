//JAVASCRIPT
var symbol = ['X', 'O']
var turn = 0;
var playerPoints = [0, 0];
var players = [];
var winCodes= [7, 56, 73, 84, 146, 273, 292, 448];
var endGame = false;
var totals = [0, 0];


function enterPlayers() {
    players[0] = document.getElementById("player1").value;
    players[1] = document.getElementById("player2").value;
    document.getElementById("intro").innerText = players[turn] + "'s turn!";
    document.getElementById("scoreboard0").innerText = players[0] + ": " + playerPoints[0];
    document.getElementById("scoreboard1").innerText = players[1] + ": " + playerPoints[1];
}
function start(){
    var sValue = 1;
    var divs = "";
    for (i = 1; i <= 3; i++){
        divs += '<div id="row-' + i + '">';
        for (j = 1; j <= 3; j++){
            divs += '<div id="play" class="play" onclick="selectSquare(this, ' + sValue + ');"></div>';
            sValue *= 2;
        }
        divs += '</div>';
    }
    document.getElementById("game-board").innerHTML = divs;
    totals = [0, 0];
    endGame = false;
}

function selectSquare(click, square){
    if (!endGame){
        click.innerText = symbol[turn];
        totals[turn] += square;
        if(isWin()){
            document.getElementById("intro").innerText = players[turn] + " wins!";
            document.getElementById("scoreboard" + turn).innerText = players[turn] + ": " + (++playerPoints[turn]);
        }
        else if (endGame){
            document.getElementById("intro").innerText = "It's a Tie! no Win";
        }
        else {
            if(turn) turn = 0; else turn = 1;
            click.attributes[0].nodeValue = "";
            document.getElementById("intro").innerText = players[turn] + "'s turn!";
        }
    }
}
function isWin(){
    for (i = 0; i < winCodes.length; i++) {
        if ((totals[turn] & winCodes[i]) == winCodes[i]) { 
            endGame = true; 
            return true;
            
        }
    }
    if (totals[0] + totals[1] == 511) {endGame = true;}
}