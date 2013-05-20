App.Gallery.GalleryView = Backbone.View.extend({

    initialize : function() {
        console.log("GalleryView has been initialized");
    },

    events : {
    },
    
    render : function() {
        this.$el.append(Mustache.render(this.options.template, this.model.toJSON()));
        return this;
    },
    
    onShow : function(){
        $("#carousel").waterwheelCarousel();
        $('.fancybox').fancybox();
    }

});