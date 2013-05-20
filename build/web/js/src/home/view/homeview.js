App.Home.HomeView = Backbone.View.extend({

    initialize : function() {
        console.log("HomeView has been initialized");
    },

    events : {
        "click .checkout-button" : "redirectToStats"
    },
    
    render : function() {
        this.$el.append(Mustache.render(this.options.template, this.model.toJSON()));
        return this;
    },
    
    redirectToStats : function(){
        App.appRouter.navigate("stats/", true);
    }

});