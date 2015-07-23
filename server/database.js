Options = new Mongo.Collection("Options");
if (Meteor.isServer) {
	 Meteor.startup(function () {
       
    });
	
};


Push.allow({
  send: function(userId, notification) {
    return true; // Allow all users to send
    console.log(notification)
  }
});

Push.deny({
  send: function(userId, notification) {
    return false; // Allow all users to send
    console.log(notification)
  }
});


Push.addListener('token', function(token) { alert(JSON.parse(token)); });

