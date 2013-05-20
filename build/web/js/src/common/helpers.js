App.Helpers = {
    toggleTabHighlight : function(forId){
        
        $("#menu .tab-others").removeClass("tab-others-active");
        $("#" + forId).addClass("tab-others-active");
        $('#tab-home').removeClass('tab-menu-home-logo-active').addClass('tab-menu-home-logo-in-active');
    }
}