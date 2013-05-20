App.Gallery.GalleryModel = Backbone.Model.extend({
		
    initialize : function() {
        console.log("GalleryModel has been initialized");
    },
		
    urlRoot : '#',

    idAttribute : "",
    
    defaults : {
        showcase : {
            header : "ShowCase",
            imageDetails :    [
            {
                imageResourceLocation : "resources/images/panda-gallery1.jpg",
                imageTag : "Image 1"
            },
            {
                imageResourceLocation : "resources/images/panda-gallery2.jpg",
                imageTag : "Image 2"
            },
            {
                imageResourceLocation : "resources/images/panda-gallery3.jpg",
                imageTag : "Image 3"
            }
            ]
        },
        allPictures : {
            header : "All Pictures",
            imageDetails :    [
            {
                imageBigResourceLocation : "resources/images/1_b.jpg",
                imageBigTag : "Image 1",
                imageSmallResourceLocation : "resources/images/1_s.jpg"
            },
            {
                imageBigResourceLocation : "resources/images/2_b.jpg",
                imageBigTag : "Image 2",
                imageSmallResourceLocation : "resources/images/2_s.jpg"
            },
            {
                imageBigResourceLocation : "resources/images/3_b.jpg",
                imageBigTag : "Image 3",
                imageSmallResourceLocation : "resources/images/3_s.jpg"
            },
            {
                imageBigResourceLocation : "resources/images/4_b.jpg",
                imageBigTag : "Image 4",
                imageSmallResourceLocation : "resources/images/4_s.jpg"
            },
            {
                imageBigResourceLocation : "resources/images/5_b.jpg",
                imageBigTag : "Image 5",
                imageSmallResourceLocation : "resources/images/5_s.jpg"
            }
            ]
        }
    }
});