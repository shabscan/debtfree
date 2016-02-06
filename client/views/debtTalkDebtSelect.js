Template.debtTalkSelectDebt.helpers({
	name: function () {
		
	}
});({
});


Template.debtTalkSelectDebt.events({
	'submit #debtSelect': function (e) {
		var constructedProfile = {};
		e.preventDefault();
		debttype1 = document.getElementById('debttype1').value;
		debttype2 = document.getElementById('debttype2').value;
		debttype3 = document.getElementById('debttype3').value;
		debttype4 = document.getElementById('debttype3').value;

		debtvalue1 = document.getElementById('debtvalue1').value;
		debtvalue2 = document.getElementById('debtvalue2').value;
		debtvalue3 = document.getElementById('debtvalue3').value;
		debtvalue4 = document.getElementById('debtvalue4').value;

		debtinterest1 = document.getElementById('debtinterest1').value;
		debtinterest2 = document.getElementById('debtinterest2').value;
		debtinterest3 = document.getElementById('debtinterest3').value;
		debtinterest4 = document.getElementById('debtinterest4').value;
		debtprofile = {
			debttype1:[debttype1, debtvalue1, debtinterest1],
			debttype2:[debttype2, debtvalue2, debtinterest2],
			debttype3:[debttype3, debtvalue3, debtinterest3],
			debttype4:[debttype4, debtvalue4, debtinterest4]
		}

		Meteor.call('updateDebtProfile', debtprofile, Meteor.userId());
		
		

	}
});