

Template.home.events({
  'click #start': function () {

    Router.go('/options1');
  }
}); // end template.home.events

Template.options1.events({
  'click #buttons': function () {
  	Push.send({from: "pushfrom", title:"hello", text:"world", query: {}, token: {}});
  	console.log("yo");
  }
}); // end template.home.events

// Mongo database stuff


Options = new Mongo.Collection("Options");
 

if (Meteor.isClient) {
  
  Template.options1.helpers({
    optionsList: function () {
      return Options.find({})
    }
  });


} // end isClient

Push.allow({
    send: function(userId, notification) {
    	console.log(notification)
      // Allow all users to send to everybody - For test only!
      return true;
    }
  });
Push.debug = true;

Push.addListener('token', function(token) {
  console.log('Token: ' + JSON.stringify(token));
  alert('Token: ' + JSON.stringify(token));
});
console.log('Push.id(): ' + Push.id());


Push.addListener('message', function(notification) {
		// Called on every message
		console.log(JSON.stringify(notification))

		function alertDismissed() {
			NotificationHistory.update({_id: notification.payload.historyId}, {
				$set: {
					"recievedAt": new Date()
				}
			});
		}
		alert(notification.message, alertDismissed, notification.payload.title, "Ok");
	});