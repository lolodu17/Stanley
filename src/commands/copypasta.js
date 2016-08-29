const reddit = require("../reddit");

module.exports = {
	"name": "copypasta",
	"aliases": [],
	"description": "Sends a copypasta",
	"command": function(stanley, message) {
		return reddit.getSelfPost(["copypasta"]).then((post) => {
			return stanley.reply(message, post.data.selftext, {});
		});
	},
	"shitpost": true
};