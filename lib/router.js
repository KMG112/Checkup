Router.configure({
	layoutTemplate: 'applayout'
});

Router.map(function(){
	this.route('home', {path: '/', template: 'home'});
	this.route('options1')
})

