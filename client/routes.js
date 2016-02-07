Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController', onBeforeAction:function(){
	if(Meteor.userId()){
		this.render('dashboard');
	}else{
		this.next();
	}
}});
Router.route('/createAccount');
Router.route('/debtTalkSelectDebt');
Router.route('/debtTalkSetGoals');
Router.route('/dashboard', {name: 'dashboard', onBeforeAction:function(){
	if(Meteor.userId()){
		this.next();
	}else{
		this.render('home');
	}
}});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
  	});
  }
});
