var player1 = document.querySelector('.player#one');
var player2 = document.querySelector('.player#two');
		

function clickHandle(){
	var p = this.style.left;
	var x = parseInt(p,10);
	if(x === 0){	
		this.style.left = "50px";
	}else if(x===500){
		alert( + " is the winner");
		newGame();
	}else{
		var newLocation = x + 50 + "px";
		this.style.left = newLocation;
	}
}

var keyupListener = function(name){
	name.pieceLocation.addEventListener('click', clickHandle);	
};
		
var Player = function(name, pieceLocation){
	this.name = name;
	this.pieceLocation = pieceLocation;	
};

var tyler = new Player("Tyler", player1);
var hung = new Player("Hung", player2);

function newGame(){
	var tyler = new Player("Tyler", player1);
	var hung = new Player("Hung", player2);
	score = 0;
	var grab1 = tyler.pieceLocation;
	var grab2 = hung.pieceLocation;
	grab1.style.left = '0px';
	grab2.style.left = '0px';
	keyupListener(tyler);
	keyupListener(hung);
	reset();
}
var reset = function(){
	var button = document.getElementById("reset");
	button.addEventListener('click', newGame);
};
newGame();