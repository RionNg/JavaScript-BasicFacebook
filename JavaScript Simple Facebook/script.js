var database = [
	{
		username: "rondo",
		password: "secret"
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

var userNamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Please enter your password");

function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, incorrect username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);