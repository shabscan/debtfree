Template.navigation_bar.events({
	'click #logout':function(e){
		Meteor.logout();
	}
});