// Connie Sivadon
// SDI 1302
// Project 2
// 14 February 2013

// main code variables

var clanOnline = true;
var	clanMembers = [ "Patrick", "Connie", "Chris", "Andre", "Michael", "Stephan" ];
var	numberOfMembers;
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
		console.log("Since we have " + numberOfMembers + " clan members today, let's play \"Capture the Flag\".");
	} else {
		console.log("Since we have only " + numberOfMembers + " clan members today, let's play \"Kill Confirmed\".");
	}
};
getGameMode(numberOfMembers);

// Number Function


