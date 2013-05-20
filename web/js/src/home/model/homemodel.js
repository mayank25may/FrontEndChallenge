App.Home.HomeModel = Backbone.Model.extend({
		
    initialize : function() {
        console.log("HomeModel has been initialized");
    },
		
    urlRoot : '#',

    idAttribute : "",
    
    defaults : {
        header1 : "This is my",
        header2 : "rapid design prototype",
        description : "Hi Folks, This is my Rapid Design Prototype build using Backbone.js Javascript MV*, Mustache.js, HTML5, CSS3 and jQuery. This showcases the rich look, feel and experience of a Single Page Web App. Works good on all modern web browser (iPad Safari & Chrome too) :-). Send in your feed back at mayank25may@gmail.com"
    }
});