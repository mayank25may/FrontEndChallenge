App.Helpers = {
    toggleTabHighlight : function(forId){
        
        $("#menu .tab-others").removeClass("tab-others-active");
        $("#" + forId).addClass("tab-others-active");
    }
}