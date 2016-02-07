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


Template.debtTalkSetGoals.rendered = function () {
	Session.set('target', 'conservative');
	Session.set('currentTarget', 0);
};

Template.debtTalkSetGoals.helpers({
	target:function(){
		value = 1;
		if(Session.get('target') === 'conservative'){
			value = 0.75;
		}else if(Session.get('target') === 'moderate'){
			value = 0.5;
		}else if(Session.get('target') === 'aggressive'){
			value = 0.25;
		}else{
			value = 0;
		}
		return accounting.formatMoney(Session.get('currentTarget')*value);
	}
});


Template.debtTalkSetGoals.events({

	'click .btn':function(e){
		Session.set('target', e.currentTarget.id);
	},
	'input #debtFrom':function(e){
		Session.set('currentTarget', e.target.value);
	}
});