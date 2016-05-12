// rita
var rita = require('rita');
var posList;
var tokenList;
var angryStr = "service	 content use term right law access information liable copyright account user entity	 pos limitation provision website time email state company license unit policy resource partner notice display party";

var nounIndex = [];
var nouns = [];

// twitter
var Twit = require('twit');
config = require('./config');
var T = new Twit(config);

// get all the nouns 
var pos = rita.RiString(angryStr).features().pos;
posList = pos.split(' ');
var tokens =  rita.RiString(angryStr).features().tokens;
tokenList = tokens.split(' ');

for (var i = 0; i < posList.length; i++) {
	if (posList[i] == 'nn') {
		nounIndex.push(i);
	}
}

for (var i = 0; i < nounIndex.length; i++) {
	nouns.push(tokenList[nounIndex[i]]);
}

//var keywordTweets = [];
var everyKeyword = [];

getAllTweets();

function getAllTweets() {
	//for (var j = 0; j < nouns.length; j++) {
		T.get('search/tweets', { q: nouns[11] + ' since:2016-04-1', count: 50 }, function(err, data, response) {
			var everyKeyword = [];
			for (var i = 0; i < data.statuses.length; i++) {
				everyKeyword.push(data.statuses[i].text);
				//keywordTweets.push(everyKeyword);
			}
			console.log(nouns[11]);
			console.log(everyKeyword.length);
			console.log(everyKeyword);
		});
	//}
}









