Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/createAccount');
Router.route('/debtTalkSelectDebt');
Router.route('/dashboard', {name: 'dashboard'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
  	});
  }
});
