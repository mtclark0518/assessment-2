
console.log('helloworld');
var pos1 = 0;
var pos2 = 0;
var player1 = document.querySelector('.player#one');
var player2 = document.querySelector('.player#two');
var eventList = document.addEventListener("keyup", event);
		
var clickHandle = function(){
	this.style.left = "50px";
};

var keyupListener = function(name){
	name.pieceLocation.addEventListener('click', clickHandle);
		// name.pieceLocation.style.left = "25px";
	
};
		
var Player = function(name, pieceLocation, ev){
	this.name = name;
	this.pieceLocation = pieceLocation;
	
};
var tyler = new Player("Tyler", player1);
var hung = new Player("Hung", player2);

function newGame(p1,p2){
	var tyler = new Player("Tyler", player1);
	var hung = new Player("Hung", player2);
	score = 0;
	var grab1 = p1.pieceLocation;
	var grab2 = p2.pieceLocation;
	grab1.style.left = '0px';
	grab2.style.left = '0px';
	keyupListener(tyler);
	keyupListener(hung);
}

newGame(tyler, hung);