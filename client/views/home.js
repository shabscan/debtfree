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
	Session.set('daily', 0);
	Session.set('weekly', 0);
	Session.set('monthly', 0);
	Session.set('yearly', 0);
	Session.set('currentSelector', 0);
};


Template.leftScreen.events({
	'click .btn-date-selector': function (e) {
		arrayOfPrices = [5,10,3,50];
		var currentSelector = e.currentTarget.id;
		currentProfile = Meteor.user().interestValue;
		 Session.set('currentSelector', currentSelector);

		 if(currentSelector == 'coffees'){
		 	Session.set('daily', currentProfile.daily/arrayOfPrices[0]);
		 	Session.set('weekly', currentProfile.weekly/arrayOfPrices[0]);
		 	Session.set('monthly', currentProfile.monthly/arrayOfPrices[0]);
		 	Session.set('yearly', currentProfile.yearly/arrayOfPrices[0]);

		 }else if(currentSelector == 'beers'){
		 	Session.set('daily', currentProfile.daily/arrayOfPrices[1]);
		 	Session.set('weekly', currentProfile.weekly/arrayOfPrices[1]);
		 	Session.set('monthly', currentProfile.monthly/arrayOfPrices[1]);
		 	Session.set('yearly', currentProfile.yearly/arrayOfPrices[1]);

		 }else if(currentSelector == 'transit'){
		 	Session.set('daily', currentProfile.daily/arrayOfPrices[2]);
		 	Session.set('weekly', currentProfile.weekly/arrayOfPrices[2]);
		 	Session.set('monthly', currentProfile.monthly/arrayOfPrices[2]);
		 	Session.set('yearly', currentProfile.yearly/arrayOfPrices[2]);

		 }else{
		 	Session.set('daily', currentProfile.daily/arrayOfPrices[3]);
		 	Session.set('weekly', currentProfile.weekly/arrayOfPrices[3]);
		 	Session.set('monthly', currentProfile.monthly/arrayOfPrices[3]);
		 	Session.set('yearly', currentProfile.yearly/arrayOfPrices[3]);
		 }
		 	
	}
});




Template.leftScreen.helpers({
	currentPicture: function () {
		var currentSelector = Session.get('currentSelector');
		arrayOfPics = ['http://i.imgur.com/QunahD1.png', 'http://i.imgur.com/nXG3OoE.png', 'http://i.imgur.com/wAPFccR.png', 'http://i.imgur.com/8sbxSEm.png'];

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
	},
	daily:function(){
		return accounting.toFixed(Session.get('daily'),1);
	},
	weekly:function(){
		return accounting.toFixed(Session.get('weekly'),1);
	},
	monthly:function(){
		return accounting.toFixed(Session.get('monthly'),0);
	},
	yearly:function(){
		return accounting.toFixed(Session.get('yearly'),0);
	}
});

Template.navigation_bar.rendered = new WOW().init()


