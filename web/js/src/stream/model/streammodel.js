App.Stream.StreamModel = Backbone.Model.extend({
		
    initialize : function() {
        console.log("StreamModel has been initialized");
    },
		
    urlRoot : '#',

    idAttribute : "",
    
    defaults : {
        header : "My Stream",
        streamDetails : 
        [
        {
            profilePicClass : "stream-item-profile-pic",
            mediaType : "text",
            text : "Hi, This is my first status update... ! Hello from The Panda :-). Have a great and bright day ahead",
            videoSourceLocation : "",
            videoType : "video/mp4"
        },
        {
            profilePicClass : "stream-item-profile-pic",
            mediaType : "video",
            text : "",
            videoSourceLocation : "resources/images/panda.mp4",
            videoType : "video/mp4"
        },
        {
            profilePicClass : "stream-item-profile-pic",
            mediaType : "image",
            text : "",
            videoSourceLocation : "",
            imageClass : "stream-pic",
            videoType : "video/mp4"
        }
        ],
        
        isMediaTypeText : function(){
            if(this.mediaType === "text"){
                return true;
            }
        },
        
        isMediaTypeVideo : function(){
            if(this.mediaType === "video"){
                return true;
            }
        },
        
        isMediaTypeImage : function(){
            if(this.mediaType === "image"){
                return true;
            }
        }
        
    }

});