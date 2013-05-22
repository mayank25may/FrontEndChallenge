//This is kick starts the application

$(function() {
    $.when(
        //Load all templates
        $.get('resources/htmltemplates/home/home.html', function(templates) {
            App.Templates.homeTemplate = $(templates).filter('#home-from-moustache').html();
        }),
        $.get('resources/htmltemplates/stats/stats.html', function(templates) {
            App.Templates.statsTemplate = $(templates).filter('#stats-from-moustache').html();
        }),
        $.get('resources/htmltemplates/stream/stream.html', function(templates) {
            App.Templates.streamTemplate = $(templates).filter('#stream-from-moustache').html();
        }),
        $.get('resources/htmltemplates/gallery/gallery.html', function(templates) {
            App.Templates.galleryTemplate = $(templates).filter('#gallery-from-moustache').html();
        })
        ).done(function(){
        //When load is done
        
        //a genric close implemented in Backbone.View
        Backbone.View.prototype.close = function () {
            this.remove();
            this.unbind();
        };
        
        //instantiate the AppRouter
        App.appRouter = new App.AppRouter();
        
        //Call method start inside approuter Object
        App.appRouter.start();
    })
});