var Loans = new Mongo.Collection("loans");

Template.mainScreen.helpers ({
	loans: function() {
		return Loans.findOne({});
	}
});
