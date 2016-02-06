Meteor.publish('userData', function () {
return Meteor.users.find({_id: this.userId},
{fields: {services: 1 }
});
});



Meteor.methods({
	updateDebtProfile: function(debtprofile, userId){
		Meteor.users.update({_id: userId}, {$set: {debtprofile: debtprofile}});
	}
});
