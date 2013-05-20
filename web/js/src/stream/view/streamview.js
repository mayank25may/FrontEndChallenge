App.Stream.StreamView = Backbone.View.extend({

    initialize : function() {
        console.log("StreamView has been initialized");
    },

    events : {
       
    },
    
    render : function() {
        this.$el.append(Mustache.render(this.options.template, this.model.toJSON()));
        return this;
    },
    
    onShow : function(){
        $('li:hidden').each(function(index) {
            setTimeout(function(el) {
                el.fadeIn();
            }, index * 500, $(this));
        })

    }
})