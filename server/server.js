Meteor.publish('userData', function () {
return Meteor.users.find({_id: this.userId},
{fields: {services: 1,debtprofile:1, goalprofile:1, userHistory:1 , interestValue:1, reducedDays:1}
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
	getData: function () {
		console.log(Meteor.user().userHistory);
		return Meteor.user().userHistory;
	},

	showEnvVar: function () {
		console.log(process.env.MONGO_URL);
	},
	updateDebtProfile: function(debtprofile, userId){
		Meteor.users.update({_id: userId}, {$set: {debtprofile: debtprofile}});
},
	updateGoalProfile:function(goalprofile,userId){
		Meteor.users.update({_id: userId}, {$set: {goalprofile: goalprofile}});

	},
	updateUserHistory:function(userId){	
		pulledData = Meteor.http.call("GET", "https://scotiadebt.herokuapp.com/history");
		Meteor.users.update({_id: userId}, {$set: {userHistory: pulledData.data.history}});
	},
	updateInterestProfile:function(userId){
		currentInterest = Meteor.user().debtprofile.totalInterest;
		dailyInterest = currentInterest/365;
		weeklyInterest = dailyInterest*7;
		monthlyInterest = dailyInterest*30;

		var profile = {
			daily: dailyInterest,
			weekly: weeklyInterest,
			monthly: monthlyInterest,
			yearly: currentInterest
		}
		Meteor.users.update({_id: userId}, {$set:{interestValue: profile}});

	},
	pullApiData:function(userId,lumpsum){
		 var options = {
        headers: {'Content-Type': 'application/json'},
        data: {
        	"payment":90, 
        	"lumpsum": parseInt(lumpsum)
        	 }
      }

      data = HTTP.call('POST', 'https://scotiadebt.herokuapp.com/impact', options);
		Meteor.users.update({_id: userId}, {$set: {reducedDays: data.data.impacts.time_saved}});
	}
});
