Template.debtTalkSelectDebt.helpers({
	name: function () {
		
	}
});({
});

getTotalDebt = function(){
	var totalDebt = 0;
	for (var key in Meteor.user().debtprofile){
		if(Meteor.user().debtprofile[key][1] != ''){
			totalDebt += parseInt(Meteor.user().debtprofile[key][1]);
		}
	}
	return totalDebt;
}


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
	Session.set('currentValue', 0);
	Session.set('totalDebt', getTotalDebt());
	Session.set('targetTime', 0);
	Session.set('targetMonthlyPayment', 0);
	Session.set('targetFinalPayment');
	slider1 = noUiSlider.create(document.getElementById("slider1"), {
	  connect: "lower",
	  range: {
	    min: 0,
	    max: 30
	  },
	  start: 0,
	  step:6
	});
	slider2 = noUiSlider.create(document.getElementById("slider2"), {
	  connect: "lower",
	  range: {
	    min: 0,
	    max: 2000
	  },
	  start: 0,
	  step:1
	});
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
		Session.set('targetFinalPayment', Session.get('totalDebt') - Session.get('totalDebt')*value);
		return accounting.formatMoney(Session.get('totalDebt')*value);
	},
	month:function(){
		return Math.floor(Session.get('targetTime'));
	},
	amountMoney:function(){
		return Session.get('targetMonthlyPayment');
	},
	totalDebt:function(){
		return accounting.formatMoney(Session.get('totalDebt'));
	}
});


Template.debtTalkSetGoals.events({
	'click .btn':function(e){
		Session.set('target', e.currentTarget.id);
	},
	'click #slider1':function(e){
		var monthlyPayment = Session.get('targetFinalPayment')/slider1.get();
		slider2.set(monthlyPayment);
		Session.set('targetMonthlyPayment', accounting.formatMoney(monthlyPayment));
		Session.set('targetTime', slider1.get());
	},
	'click #slider2':function(e){
		var paymentMonths = Session.get('targetFinalPayment')/slider2.get();
		slider1.set(accounting.toFixed(paymentMonths, 0));
		Session.set('targetTime', accounting.toFixed(paymentMonths, 0));
		Session.set('targetMonthlyPayment', slider2.get());
	},
	'click #goalSettingContinue':function(){
		var goalprofile = {
			targetType: Session.get('target'),
			startingAmount: Session.get('currentValue'),
			duration: Session.get('targetTime'),
			monthlyPayment: Session.get('targetMonthlyPayment'),
			debtGoal: Session.get('targetFinalPayment')
		}
		Meteor.call('updateGoalProfile', goalprofile, Meteor.userId());

	},
	'click #goalSettingContinue':function(){
		Router.go('dashboard');
	}
});




