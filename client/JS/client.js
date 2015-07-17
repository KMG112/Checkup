Template.home.events({
  'click #start': function () {

    Router.go('/options1');
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

