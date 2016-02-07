Template.impactCalculator.rendered = function () {
	Session.set('impactCalculatorAmount', 0);
};

Template.impactCalculator.events({
	'input #impactAmount': function (e) {
		Session.set('impactCalculatorAmount', e.currentTarget.value);
	}
});