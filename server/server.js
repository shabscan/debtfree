var Loans = new Mongo.Collection("loans");

// Test data.
Loans.insert({
	paid: false,
	name: "OSAP",
	amounts: [
		1000,
		900,
		750,
		600
	],
	dates: [
		"2015-10-06T12:58:58.264Z",
		"2015-11-06T12:58:58.264Z",
		"2015-12-06T12:58:58.264Z",
		"2016-01-06T12:58:58.264Z"
	]
});

Meteor.methods({
	removeAll: function () {

		Test.remove({});
	},

	showEnvVar: function () {
		console.log(process.env.MONGO_URL);
	}
});
