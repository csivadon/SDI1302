// Connie Sivadon
// SDI 1302
// Project 2
// 14 February 2013

// main code variables

var clanOnline = true;
var	clanMembers = [ "Patrick", "Connie", "Chris", "Andre", "Michael", "Stephan" ];
var	numberOfMembers;
var positions = [ "sniper", "defender", "rusher", "rusher", "defender", "floater" ];
var	clanLeader = "Everyone ready?";
var	clan = "Yes! Start already!";
numberOfMembers = clanMembers.length;

// Procedure

var playOnline = function(clanOnline) {
	if (clanOnline === true) {
		console.log("Hey guys, lets play Black Ops 2.");	
	} else {
		console.log("Shucks, nobody is online.  I guess I'll play Resident Evil 6.");	
	}		
};
playOnline(clanOnline);

// Boolean Function

var getGameMode = function(numberOfMembers) {
	if (numberOfMembers > 4) {
		return console.log("Since we have " + numberOfMembers + " clan members today, let's play \"Capture the Flag\".");
	} else {
		return console.log("Since we have only " + numberOfMembers + " clan members today, let's play \"Kill Confirmed\".");
	}
};
getGameMode(numberOfMembers);

// Number Function

var getNumberOfPositions = function(numberOfMembers) {
	console.log("Does everyone have their classes set?");
	var player = 1;
	while (player < 6) {
		console.log(player + " players have their classes set.");
		player++;
	};
	return console.log("All " + player + " players are set and ready to go.");
};
getNumberOfPositions(numberOfMembers);

// Array Function

var getPositions = function(clanMembers,positions) {
	for (var i=0, j=clanMembers.length; i < j; i++) {
		console.log( clanMembers[i]	+ " is a " + positions[i] + ".");
	};
	return console.log( "All members know their positions." );
};
getPositions(clanMembers,positions);

//String Function

