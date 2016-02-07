Meteor.subscribe('userData');

var Loans = new Mongo.Collection("loans");

Template.mainScreen.helpers ({
	loans: function() {
		return Loans.findOne({});
	}
});

openNav = function () {
			var navPos = document.getElementsByClassName('navigation-bar')[0];
			if (navPos.style.left == "0px") {
				navPos.style.left = "-100%";
			} else {
				navPos.style.left = "0px";
			}
		};
