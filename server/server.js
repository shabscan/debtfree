Meteor.publish('userData', function () {
return Meteor.users.find({_id: this.userId},
{fields: {services: 1 }
});
});

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
	},
	updateDebtProfile: function(debtprofile, userId){
		Meteor.users.update({_id: userId}, {$set: {debtprofile: debtprofile}});
},
	updateGoalProfile:function(goalprofile,userId){
		Meteor.users.update({_id: userId}, {$set: {goalprofile: goalprofile}});

	}
});
