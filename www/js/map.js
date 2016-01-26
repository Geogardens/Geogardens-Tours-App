// This work for hire application was developed by Nathan Strout, Director of Spatial Technology at the University of Redlands // as a collaborative effort for the benefit of all parks and gardens. This application is derived from the Ventura Botanical // Gardens Tours App code base, Copyright 2015 Michele Dunham, and licensed under the copyleft, share and share-alike, // GNU General Public license.// Released under the GNU General Public License.  View full license text in the LICENSE.TXT file at the ROOT of// this GitHub repository.  View the short license text and DISCLAIMER in the README.TXT file located at the// ROOT of this GitHub repository.

var stopLayer;
var map;
var mapOnListView;
var thisExt;
var lineLayer;
var locationLayer;
var pushpinLayer;
var highlightLayer;
var locationBufferLayer;
var selectedTourIndex;
var imgArray = [];
var imgArrayFocussed = [];
var stopID = 0;
var tourName;
var featureServiceURL;
var isFromTour = false;
var isFromHome = false;
var isFromStop = false;
var featureLayer;
var mapService;
var localFeatureSet;
var redrawBuffer = true;

var oidName;
var highResMapService;

function loadMap() {
	if (map) {
		map.destroy();
	}

	config.map.fullExtent = new esri.geometry.Extent(appData.map.fullExtent.minX, appData.map.fullExtent.minY, appData.map.fullExtent.maxX, appData.map.fullExtent.maxY, new esri.SpatialReference({
		wkid : appData.map.fullExtent.wkid
	}));
// config.map.fullExtent = new esri.geometry.Extent(-13280005.826098137, 4066747.6233484694, -13279145.909529906, 4067879.8468299727, new esri.SpatialReference({
		// wkid : 102100
	// }));
	actualGeolocate = true;
	//Create Map Object
	map = new esri.Map("map", {
		basemap : "streets",
		extent : config.map.fullExtent, // long, lat
		//zoom: 13,
		slider : false,
		autoResize : true
	});

	//Init Map Events
	map.on("load", function() {
		addLayers();

	});
	map.on("zoom-end", function(evt) {

	});

	$("#hrefTopo").on("tap", function() {
		changeView("Topo");
	});
	$("#hrefAerial").on("tap", function() {
		changeView("Imagery");
	});
	$("#hrefGarden").on("tap", function() {
		changeView("Garden");
	});
	$("#map").height($("#mapArticle").height() - $("#mapToolbar").height());

}
function handleLayerError(e){
	console.log(e.message);
}
function addLayers() {
	config.map.imageryServices = [];
	config.map.gardenServices = [];
	if (appData.map.imageryServices != null && appData.map.imageryServices != "") {
		for (var i = 0; i < appData.map.imageryServices.length; i++) {
			var imgLayer = new esri.layers.ArcGISTiledMapServiceLayer(appData.map.imageryServices[i], {visible : false});
			config.map.imageryServices.push(imgLayer);
			map.addLayer(imgLayer);
	}
		
	}
	//Add Garden Basemap
	if (appData.map.gardenServices != null) {
		for (var i = 0; i < appData.map.gardenServices.length; i++) {
			var gardLayer = new esri.layers.ArcGISTiledMapServiceLayer(appData.map.gardenServices[i], {visible : false});
			gardLayer.on("error",function(e){
				
				console.log(e.error.message);
			});
			
			//gardLayer.onError(function(e){console.log(e.message);});
			config.map.gardenServices.push(gardLayer);
			map.addLayer(gardLayer);
		}

	}
	if (appData.map.contourService != null && appData.map.contourService != "") {
		config.map.contourService = new esri.layers.ArcGISTiledMapServiceLayer(appData.map.contourService, {
			visible : false,
			opacity : 0.5
		});
		map.addLayer(config.map.contourService);
	}

	if (appData.map.trailService != null && appData.map.trailService != "") {
		config.map.trailService = new esri.layers.FeatureLayer(appData.map.trailService, {
			mode : esri.layers.FeatureLayer.MODE_SNAPSHOT,
			visible : false
		});
		var lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([255, 255, 255, 1]), 3);
		var lineRenderer = new esri.renderer.SimpleRenderer(lineSymbol);
		config.map.trailService.setRenderer(lineRenderer);
		map.addLayer(config.map.trailService);
	}
	if ( typeof (appData.map.defaulView) == "undefined" || appData.map.defaultView == null || appData.map.defaultView == "") {
		appData.map.defaultView = "Garden";
	}
	changeView(appData.map.defaultView);

	//add location and pushpin layers (empty to start)
	locationLayer = new esri.layers.GraphicsLayer();
	locationBufferLayer = new esri.layers.GraphicsLayer();
	pushpinLayer = new esri.layers.GraphicsLayer();
	highlightLayer = new esri.layers.GraphicsLayer();

	pushpinLayer.setScaleRange(0, 0);
	map.addLayers([locationBufferLayer, locationLayer, pushpinLayer, highlightLayer]);
	dojo.connect(pushpinLayer, "onClick", function(thisGraphic) {
		var newStopID = thisGraphic.graphic.attributes["ID"];
		if (appProfile.currentStop != null && newStopID == appProfile.currentStop.orderId) {
			setTimeout(function() {
				$.UIGoToArticle("#stopView");
			}, 300);
			return false;
		}
		highlightStop(newStopID);

		setTimeout(function() {
			goToStop(appProfile.currentTour.tag, newStopID);
		}, 300);

	});
	dojo.connect(highlightLayer, "onClick", function(thisGraphic) {
		var newStopID = thisGraphic.graphic.attributes["ID"];
		setTimeout(function() {
			$.UIGoToArticle("#stopView");
		}, 300);

	});

	if ( typeof (appProfile.currentTour) != "undefined" && appProfile.currentTour != null) {
		addTourPushpins(appProfile.currentTour.stops);
		pushpinLayer.show();
	}
	var visibleLayers = map.getLayersVisibleAtScale();
	for (var i = 0; i < visibleLayers.length; i++) {
		visibleLayers[i].refresh();
	}
}

function viewMap(showTour, referrer) {
	try {
		if (showTour == null || typeof (showTour) == "undefined") {
			showTour == false;
		}
	
		$("#mapLeftNavigation").off("tap");
		$("#mapRightNavigation").off("tap");
		if (showTour) {
			$("#mapArticle > .TourHeader").show();
			$("#mapPageTitle").text("Tour Map");
			
			if ( typeof (map) != "undefined") {
				pushpinLayer.show();
				highlightLayer.show();
			}

			if (referrer == "listOfStops") {
				stopID = -9999;
				$("#mapRightNavigation").hide();
				$("#mapLeftNavigation").on("tap", function() {
					$.UIGoToArticle("#listOfStops");
				});
				$("#mapRightNavigation").on("tap", function() {
					$.UIGoToArticle("#listOfStops");
				});
				stopID = 9999;
			} else if (referrer == "stopView") {
				$("#mapLeftNavigation").on("tap", function() {
					stopPlayer();
					$.UIGoBackToArticle("#listOfStops");
				});
				$("#mapRightNavigation").on("tap", function() {
					$.UIGoToArticle("#stopView");
				});
				$("#mapRightNavigation").show();

			}

		} else {
			$("#mapArticle > .TourHeader").hide();
			$("#mapPageTitle").text("Garden Map");
			if ( typeof (map) != "undefined") {
				pushpinLayer.hide();
				highlightLayer.hide();
			}
			changeView("Garden");
			$("#mapRightNavigation").hide();
			$("#mapLeftNavigation").on("tap", function() {
				$.UIGoToArticle("#main");
			});

		}
		if ( typeof (map) != "undefined") {
			map.resize();
			map.reposition();
		}
	} catch (err) {
		konsole.log("handled error: " + err.message);
	}

}

function highlightStop(stopID) {
	try {
		highlightLayer.clear();
		for (var i = 0; i < pushpinLayer.graphics.length; i++) {
			var tourFeature = pushpinLayer.graphics[i];
			if (parseInt(tourFeature.attributes["ID"]) == parseInt(stopID)) {
				var pictureMarker = new esri.symbol.PictureMarkerSymbol(imgArrayFocussed[tourFeature.attributes["Number"]].src, 36, 36);
				var graphic = new esri.Graphic(new esri.geometry.Point(tourFeature.geometry, map.spatialReference), pictureMarker, tourFeature.attributes);
				highlightLayer.add(graphic);
				highlightLayer.show();
				return;
			}
		}
	} catch (err) {
		konsole.log("handled error: " + err.message);
	}

}

function centerAtStop(stop) {
	try {
		var pt = new esri.geometry.Point(stop.location.x, stop.location.y, map.spatialReference);
		map.centerAt(pt);
	} catch (err) {
		konsole.log("handled error: " + err.message);
	}

}

function clearHighlighted() {
	if ( typeof (map) != "undefined") {
		highlightLayer.clear();
	}
}

function addTourPushpins(stops) {
	try {
		pushpinLayer.clear();
		highlightLayer.clear();
		GetPinImages();
		GetFocussedPinImages();
		var extent = new esri.geometry.Extent();
		extent.setSpatialReference(map.spatialReference);

		for (var i = stops.length - 1; i >= 0; i--) {
			var stop = stops[i];
			var tempFID = parseInt(stop.orderId);
			var stopNum = parseInt(stop.orderId);

			var attributes = {};
			attributes.ID = tempFID;
			attributes.Number = stopNum;
			var pt = [stop.location.x, stop.location.y];

			var pictureMarker = new esri.symbol.PictureMarkerSymbol(imgArray[stopNum].src, 24, 24);
			var graphic = new esri.Graphic(new esri.geometry.Point(pt, map.spatialReference), pictureMarker, attributes);
			pushpinLayer.add(graphic);
			if ( typeof (extent.xmin) == "undefined") {
				extent.xmin = stop.location.x;
				extent.ymin = stop.location.y;
				extent.xmax = stop.location.x;
				extent.ymax = stop.location.y;
			} else {
				if (stop.location.x < extent.xmin) {
					extent.xmin = stop.location.x;
				};
				if (stop.location.y < extent.ymin) {
					extent.ymin = stop.location.y;
				};
				if (stop.location.x > extent.xmax) {
					extent.xmax = stop.location.x;
				};
				if (stop.location.x > extent.ymax) {
					extent.ymin = stop.location.y;
				};
			}

		}
		map.setExtent(extent, true);
		pushpinLayer.show();
		highlightLayer.show();
	} catch (err) {
		konsole.log("error adding layer");
	}
}

function addTourLayer(tourFeatureSet) {
	try {
		pushpinLayer.clear();
		highlightLayer.clear();
		GetPinImages();
		GetFocussedPinImages();
		oidName = tourFeatureSet.objectIdFieldName;
		for (var i = tourFeatureSet.features.length - 1; i >= 0; i--) {
			var tourFeature = tourFeatureSet.features[i];
			var tempFID = parseInt(tourFeature.attributes[oidName]);
			var stopNum = parseInt(tourFeature.attributes["StopOrder"]);

			var attributes = {};
			attributes.ID = tempFID;
			attributes.Number = stopNum;
			var pt = tourFeature.geometry;

			var pictureMarker = new esri.symbol.PictureMarkerSymbol(imgArray[stopNum].src, 24, 24);
			var graphic = new esri.Graphic(new esri.geometry.Point(pt, map.spatialReference), pictureMarker, attributes);
			pushpinLayer.add(graphic);

		}
		pushpinLayer.show();
		highlightLayer.show();
	} catch (err) {
		konsole.log("error adding layer");
	}
}

function changeView(view) {

	konsole.log("changing to " + view);
	config.map.view = view;

	switch (view.toLowerCase()) {
	case "topo":
		if ( typeof (map) != "undefined") {
			map.setBasemap("topo");
			if (config.map.gardenServices) {
				for (var i = 0; i < config.map.gardenServices.length; i++) {
					config.map.gardenServices[i].hide();
				}
				
			}
			if (config.map.trailService) {
				config.map.trailService.show();
			}
			if (config.map.contourService) {
				config.map.contourService.show();
			}
			if (config.map.imageryServices) {
				for (var i = 0; i < config.map.imageryServices.length; i++) {
					config.map.imageryServices[i].hide();
				}
				//config.map.imageryService.hide();
			}
		}

		$("#hrefTopo").addClass("basemapSelected");
		$("#hrefAerial").removeClass("basemapSelected");
		$("#hrefGarden").removeClass("basemapSelected");
		break;
	case "garden":
		if ( typeof (map) != "undefined") {
			if (config.map.gardenServices) {
				for (var i = 0; i < config.map.gardenServices.length; i++) {
					config.map.gardenServices[i].show();
				}
				
			}
			if (config.map.trailService) {
				config.map.trailService.hide();
			}
			if (config.map.contourService) {
				config.map.contourService.hide();
			}
			if (config.map.imageryServices) {
				for (var i = 0; i < config.map.imageryServices.length; i++) {
					config.map.imageryServices[i].hide();
				}
			}
			map.setBasemap("streets");
		}
		config.map.view = "Garden";

		$("#hrefTopo").removeClass("basemapSelected");
		$("#hrefAerial").removeClass("basemapSelected");
		$("#hrefGarden").addClass("basemapSelected");
		break;
	case "imagery":
		if ( typeof (map) != "undefined") {
			map.setBasemap("satellite");
			if (config.map.imageryServices) {
				for (var i = 0; i < config.map.imageryServices.length; i++) {
					config.map.imageryServices[i].show();
				}
			}
			if (config.map.gardenServices) {
				for (var i = 0; i < config.map.gardenServices.length; i++) {
					config.map.gardenServices[i].hide();
				}
				
			}
			if (config.map.trailService) {
				if (isFromHome) {
					config.map.trailService.hide();
				} else {
					config.map.trailService.show();
				}
			}
			if (config.map.contourService) {
				config.map.contourService.hide();
			}

		}

		$("#hrefTopo").removeClass("basemapSelected");
		$("#hrefAerial").addClass("basemapSelected");
		$("#hrefGarden").removeClass("basemapSelected");
		break;
	}

}

function BackToTrail() {
	map.setExtent(config.map.fullExtent);

}