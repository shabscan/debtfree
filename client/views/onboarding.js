Template.onboarding.events({
	'click #loginWithFacebook': function (e) {
		Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }else{
            	Router.go('debtTalkSelectDebt');
            }
        });
	},
	'click #loginWithEmail':function(e){
		Router.go('createAccount');
	}
});


Template.createAccount.events({
	'click #login':function(e,t){
		e.preventDefault();
		email = document.getElementById('email').value;
		password = document.getElementById('password').value;

		Meteor.loginWithPassword(email,password);
		Router.go('debtTalkSelectDebt');
	},
	'click #register':function(e,t){
		e.preventDefault();
		email = document.getElementById('email').value;
		password = document.getElementById('password').value;
		Accounts.createUser({
			email:email,
			password:password
		}, function (err) {
			if(err){
				console.log(err);
			}else{
				Router.go('debtTalkSelectDebt');
			}
		});

	}
});



