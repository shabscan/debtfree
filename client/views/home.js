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
	Meteor.call('updateInterestProfile', Meteor.userId());
};

Template.dashboard.events({
	'focus #coffees': function () {
	}
});

Template.leftScreen.rendered = function () {
	Session.set('coffees', 0);
	Session.set('beers', 0);
	Session.set('transit', 0);
	Session.set('dinner', 0);
	Session.set('currentSelector', 0);
};


Template.leftScreen.events({
	'click .btn-date-selector': function (e) {
		arrayOfPrices = [5,10,3,50];
		 Session.set('currentSelector', e.currentTarget.id);
		 Session.set('coffees');

	}
});




Template.leftScreen.helpers({
	currentPicture: function () {
		var currentSelector = Session.get('currentSelector');
		arrayOfPics = ['http://i.imgur.com/QunahD1.png', 'http://i.imgur.com/nXG3OoE.png', 'http://i.imgur.com/wAPFccR.png'];

		if(currentSelector == 'coffees'){
			return arrayOfPics[0];
		}else if(currentSelector == 'beers'){
			return arrayOfPics[1];
		}else if(currentSelector == 'transit'){
			return arrayOfPics[2];
		}else{
			return arrayOfPics[3];
		}
	},
	currentPrice:function(){
		var currentSelector = Session.get('currentSelector');
		arrayOfPrices = [5,10,3,50];
		if(currentSelector == 'coffees'){
			return arrayOfPrices[0];
		}else if(currentSelector == 'beers'){
			return arrayOfPrices[1];
		}else if(currentSelector == 'transit'){
			return arrayOfPrices[2];
		}else{
			return arrayOfPrices[3];
		}
	}
});

Template.navigation_bar.rendered = new WOW().init()


