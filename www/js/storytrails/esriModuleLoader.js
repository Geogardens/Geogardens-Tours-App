


    require(["esri/map", "esri/layers/FeatureLayer", "esri/layers/GraphicsLayer", "esri/SpatialReference", "esri/symbols/PictureMarkerSymbol", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "dojo/domReady!"],
        function (Map, FeatureLayer, GraphicsLayer, SpatialReference, PictureMarkerSymbol, SimpleFillSymbol, SimpleLineSymbol) {
            konsole.log("Loaded esri modules")
        });

    var konsole = {
        log: function () {
            if (typeof (debug) == "undefined" || debug == true) {
                console.log(arguments)
            }


        }
    }