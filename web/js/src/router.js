App.AppRouter = Backbone.Router.extend({

    routes : {
        "" : "home",
        "home/" : "home",
        "stats/" : "stats",
        "stream/" : "stream",
        "gallery/" : "gallery"
    },

    initialize : function () {
        console.log("AppRouter has been initialised");
    },
    
    start : function () {
        Backbone.history.start();
    },
    
    showView : function(selector, view) {
        //Closes what ever currentView is present on screen by calling View.prototype.close
        if (this.currentView){
            this.currentView.close();
        }
        
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },
    
    onShowHelper : function(viewInstance){
        if (viewInstance.onShow) {
            viewInstance.onShow();
        }
    },
    
    home : function(){
        App.Helpers.toggleTabHighlight();
        $('#tab-home').removeClass('tab-menu-home-logo-in-active').addClass('tab-menu-home-logo-active');
        
        //instantiating HomeModel 
        var homeModel = new App.Home.HomeModel();
        
        //instantiating HomeView and passing required options
        var homeView = new App.Home.HomeView(
        {
            model : homeModel,
            template : App.Templates.homeTemplate
        })
        
        //Calling showView method
        this.showView("#main-content", homeView);
    },
    
    stats : function(){
        App.Helpers.toggleTabHighlight("tab-stats");
        
        //instantiating StatsModel 
        var statsModel = new App.Stats.StatsModel();
        
        //instantiating StatsView and passing required options
        var statsView = new App.Stats.StatsView(
        {
            model : statsModel,
            template : App.Templates.statsTemplate
        })
        
        //Calling showView method
        this.showView("#main-content", statsView);
        
        this.onShowHelper(statsView);
    },
    
    stream : function(){
        App.Helpers.toggleTabHighlight("tab-stream");
        
        //instantiating StreamModel 
        var streamModel = new App.Stream.StreamModel();
        
        //instantiating streamView and passing required options
        var streamView = new App.Stream.StreamView(
        {
            model : streamModel,
            template : App.Templates.streamTemplate
        })
        
        //Calling showView method
        this.showView("#main-content", streamView);
        
        this.onShowHelper(streamView);
    },
    
    gallery : function(){
        App.Helpers.toggleTabHighlight("tab-gallery");
        
        //instantiating GalleryModel 
        var galleryModel = new App.Gallery.GalleryModel();
        
        //instantiating GalleryView and passing required options
        var galleryView = new App.Gallery.GalleryView(
        {
            model : galleryModel,
            template : App.Templates.galleryTemplate
        })
        
        //Calling showView method
        this.showView("#main-content", galleryView);
        
        this.onShowHelper(galleryView);
    }
   
})