Meteor.methods({
	removeAll: function () {

		Test.remove({});
	},

	showEnvVar: function () {
		console.log(process.env.MONGO_URL);
	}
});
