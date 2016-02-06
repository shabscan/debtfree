var Loans = new Mongo.Collection("loans");

Template.body.helpers ({
	loans: function() {
		return Loans.find({});
	}
});
