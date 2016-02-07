Template.impactCalculator.rendered = function () {
	Session.set('impactCalculatorAmount', 0);
};

Template.impactCalculator.events({
	'input #impactAmount': function (e) {
		Session.set('impactCalculatorAmount', e.currentTarget.value);
		Meteor.call('pullApiData', Meteor.userId(), e.currentTarget.value);
	}
});


Template.impactCalculator.helpers({
	impactAmount: function () {
		return accounting.formatMoney(Session.get('impactCalculatorAmount'));
	},
	daysReduced:function(){
		return Meteor.user().reducedDays;
	}
});