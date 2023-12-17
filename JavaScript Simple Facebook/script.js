var database = [
	{
		username: "rondo",
		password: "secret"
	},
	{
		username: "simpo",
		password: "123a"
	},
	{
		username: "wispo",
		password: "abcabc"
	}
];

var newsFeed = [
	{
		username: "Pondo",
		timeline: "It's a wonderful day!"
	},
	{
		username: "Tongo",
		timeline: "I am smart!"
	},
	{
		username: "Fongo",
		timeline: "Full of love!"
	}
];

function isUserValid (username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {

	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, incorrect username and password!");
	}
}

var userNamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Please enter your password");

signIn(userNamePrompt, passwordPrompt);
