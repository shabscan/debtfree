Template.home.helpers({
  myAppVariable: function() {
    return Session.get('myAppVariable');
  }
});

Template.home.events({
  'click button': function(event, template) {
    Session.set('myAppVariable', Math.floor(Math.random() * 11));
  }
});

Template.dashboard.rendered = function () {
	Meteor.call('updateUserHistory', Meteor.userId());
};

Template.navigation_bar.rendered = new WOW().init()
