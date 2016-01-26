// This work for hire application was developed by Nathan Strout, Director of Spatial Technology at the University of Redlands // as a collaborative effort for the benefit of all parks and gardens. This application is derived from the Ventura Botanical // Gardens Tours App code base, Copyright 2015 Michele Dunham, and licensed under the copyleft, share and share-alike, // GNU General Public license.// Released under the GNU General Public License.  View full license text in the LICENSE.TXT file at the ROOT of// this GitHub repository.  View the short license text and DISCLAIMER in the README.TXT file located at the// ROOT of this GitHub repository.

function userProfile() {
    this.connectionState;
    this.location = {
        x: null,
        y: null,
        accuracy: null
    };
    this.lastActive = new Date();
    this.lastPause;
    this.lastTour;
    this.lastStop;
    this.guidedTourOn = false;
    this.currentStop;
    this.currentTour;
    this.lastGeofenceLocation;
    this.lastGeofenceTime;
    this.lastGeofenceStop = -1;
    this.geofenceSwipeAway = false;
}

function tourStop(tag, orderId, title) {
    this.tag = tag;
    this.orderId = orderId;
    this.title = title;
    this.description = "";
    this.primaryPhotoLink = null;
    this.flickrSetId = null;
    this.audioLink = null;
    this.videoLink = null;
    this.location = {};
}
function tourGroup(id,name){
	this.name = name;
	this.id = id;
	this.sortOrder = -1;
	this.description = "";
	this.tilePhoto = null;
	this.listPhoto = null;
}
function tour(name) {
    this._stopService = "";
    this.name = name;
    this.tag = "";
    this.description = "";
    this.distance = "";
    this.path = {};
    this.stops = [];
    this.basemap = null;
    this.sponsors = [];
    this.groupId = null;
}

function sponsor(name) {
    this.name = name;
    this.caption;
    this.level = 1;
    this.logoLink = null;
    this.website = null;
    this.address = null;
}

function app(configLink) {
    this._configLink = configLink;
    this._tourService = null;
    this._sponsorService = null;
    this.gardenMap = null;
    this.tours = [];
    this.sponsors = [];
    this.flickrAccount = null;
    this.map = new appMap();
    this.geofenceMaxInterval = 5;
    this.geofenceDistance = 35;
    this.accuracyUpdateInterval = 10;
    this.sponsorThankYou = "";
}

function appMap() {
    this.fullExtent = new extent();
    this.imageryServices = ["http://tiles.arcgis.com/tiles/UdNSRpyD8hxLx3jb/arcgis/rest/services/imagery/MapServer"];
    this.gardenServices = ["http://tiles.arcgis.com/tiles/UdNSRpyD8hxLx3jb/arcgis/rest/services/VBG_Garden/MapServer"];
    this.trailService = "http://services1.arcgis.com/UdNSRpyD8hxLx3jb/arcgis/rest/services/DemonstrationTrail/FeatureServer/0";
    this.contourService = "http://tiles.arcgis.com/tiles/UdNSRpyD8hxLx3jb/arcgis/rest/services/ContoursTiles/MapServer";
    this.imageryMapID = "3d7c1066f8bd44c69cbf591a0795c00e";
    this.gardenMapID = "51880ba7b0ce4b5b8764ebf82c349f41";
    this.topoMapID = "48b08c2919644b10b6a7aeaa0f2f2fdb";
    this.defaultView = "Garden";
    this.currentView = "Garden";
}

function extent() {
    this.minX = -13280005.826098137;
    this.minY = 4066747.6233484694;
    this.maxX = -13279145.909529906;
    this.maxY = 4067879.8468299727;
    this.wkid = 102100;
}
app.prototype.init = function () {
    var stApp = this;
    stApp.loadContent();

};
app.prototype.loadContent = function (callback) {
    var stApp = this;

    $.when($.ajax({
        type: 'get',
        data: {
            where: "not key_ is null and not Value is null",
            f: "json",
            outFields: "Key_,Value",
            returnGeometry: false
        },

        url: stApp._configLink + "/query",
        dataType: "json"
    })).done(function (config) {
        for (var i = 0; i < config.features.length; i++) {
            var item = config.features[i];
            var key = item.attributes.Key_.trim();
            var value = item.attributes.Value.trim();
            if (value == "" || value == null) continue;
            switch (key.toLowerCase()) {
            case "imageryservice":
            case "imageryservices":
            	var services = value.split(",");
            	for (var j = 0;j < services.length;j++){
            		if (stApp.map.imageryServices.indexOf(services[j]) == -1){
            			stApp.map.imageryServices.push(services[j]);
            		}
            		
            	}
            
                break;
            case "extent":
            	var coords = value.split(",");
            	stApp.map.fullExtent.minX = Number(coords[0].trim());
            	stApp.map.fullExtent.minY = Number(coords[1].trim());
            	stApp.map.fullExtent.maxX = Number(coords[2].trim());
            	stApp.map.fullExtent.maxY = Number(coords[3].trim());
            	break;
            case "extentwkid":
            	stApp.map.fullExtent.wkid = Number(value.trim());
            	break;
            case "gardenservice":
            case "gardenservices":
            var services = value.split(",");
            if (services.length >0){
            	stApp.map.gardenServices = [];
            	for (var j = 0;j < services.length;j++){
            		if (stApp.map.gardenServices.indexOf(services[j]) == -1){
            			stApp.map.gardenServices.push(services[j]);
            		}
            	}
            }
            
               // stApp.map.gardenService = value;
                break;
            case "contourservice":
                stApp.map.contourService = value;
                break;
            case "trailservice":
                stApp.map.trailService = value;
                break;
            case "tours":
                stApp._tourService = value;
                break;
            case "sponsors":
                stApp._sponsorService = value;
                break;
            case "flickraccount":
                stApp.flickrAccount = value;
                break;
            case "gardenmap":
                stApp.gardenMap = value;
                break;
            case "geofencedistance":
                stApp.geofenceDistance = Number(value);
                break;
            case "geofencemaxinterval":
                stApp.geofenceMaxInterval = Number(value);
                break;
            case "accuracyupdateinterval":
                stApp.accuracyUpdateInterval = Number(value);
                break;
            case "imagerymapid":
                stApp.map.aerialMapID = value;
                break;
            case "gardenmapid":
                stApp.map.gardenMapID = value;
                break;
            case "topomapid":
                stApp.map.topoMapID = value;
                break;
            case "defaultmapview":
                stApp.map.defaultView = value;
                break;
            case "sponsorthankyou":
                if (value != null) {
                    stApp.sponsorThankYou = value;
                } else {
                    stApp.sponsorThankYou = "";
                }
                break;
            }

        }
        var getAppSponsors = loadAppSponsors(stApp._sponsorService);
        var getTours = loadTours(stApp._tourService);
        $.when(getAppSponsors, getTours).done(function (sponsorAjaxResults, tourAjaxResults) {
            var sponsorResults = sponsorAjaxResults[0];
            var tourResults = tourAjaxResults[0];

            for (var i = 0; i < sponsorResults.features.length; i++) {
                var sponsorItem = sponsorResults.features[i].attributes;
                var name = sponsorItem.Name;
                var level = sponsorItem.SponsorLevel;
                var logo = sponsorItem.LogoURL;
                var website = sponsorItem.Website;
                var addr = sponsorItem.Address;
                var caption = sponsorItem.Caption;
                var spon = new sponsor(name);
                spon.logoLink = logo;
                spon.level = level;
                spon.website = website;
                spon.address = addr;
                spon.caption = caption;
                stApp.sponsors.push(spon);
            }
            for (var i = 0; i < tourResults.features.length; i++) {

                var tourItem = tourResults.features[i].attributes;
                var tag = tourItem.TourTag;
                var tName = tourItem.Name;
                var desc = tourItem.Description;
                var dist = tourItem.Distance;
                var image = tourItem.PrimaryImage;
                var stops = tourItem.StopService;
                
                if (typeof dist == "undefined" || dist == null) {
                    dist = "";
                }
                
                var basemap = tourItem.DefaultMap;
				if (stops.trim() == "" || tag.trim() == ""){
				continue;
				}
                if (typeof basemap == "undefined" || basemap == null) {
                    basemap = "garden";
                }
                switch (basemap.toUpperCase()) {
                case "AERIAL":
                case "IMAGERY":
                    basemap = "Imagery";
                    break;
                case "TOPO":
                case "TOPOGRAPHIC":
                    basemap = "Topo";
                    break;
                default:
                    basemap = "Garden";
                    break;
                }
                var t = new tour(tName);
                t._stopService = stops;
                t.description = desc;
                t.tag = tag;
                t.distance = dist;
                t.basemap = basemap;
                stApp.tours.push(t);
            }
            var i = 0;
            for (var i = 0; i < stApp.tours.length; i++) {

                var t = stApp.tours[i];
                konsole.log("working on " + t.name);
                var getTourSponsors = loadTourSponsors(stApp._sponsorService, stApp.tours[i].tag);
                var getStops = loadStops(stApp.tours[i]);

                var callbackDone = false;
                $.when(getStops, getTourSponsors).done(function (stopAjaxResults, tSponsorAjaxResults) {
                    var stopResults = stopAjaxResults[0];
                    var tSponsorResults = tSponsorAjaxResults[0];
                    for (var j = 0; j < stopResults.features.length; j++) {
                        var stopItem = stopResults.features[j].attributes;
                        var stopGeom = stopResults.features[j].geometry;
                        var sOrder = stopItem.StopOrder;
                        var sTag = stopItem.StopTag;
                        var sName = stopItem.Name;
                        var sCaption = stopItem.Caption;
                        var sImage = stopItem.PrimaryImage;
                        var sVideo = stopItem.VideoClip;
                        var sAudio = stopItem.AudioClip;
                        var tStop = new tourStop(sTag, sOrder, sName);

                        tStop.description = sCaption;
                        tStop.primaryPhotoLink = sImage;
                        tStop.audioLink = sAudio;
                        tStop.videoLink = sVideo;
                        tStop.location = stopGeom;
                        if (typeof (stopItem.FlickrSetId) != "undefined" && stopItem.FlickrSetId != null) {
                            tStop.flickrSetId = stopItem.FlickrSetId;
                        }
                        t.stops.push(tStop);
                    }
                    for (var i = 0; i < tSponsorResults.features.length; i++) {
                        var tSponsorItem = tSponsorResults.features[i].attributes;
                        var name = tSponsorItem.Name;
                        var level = tSponsorItem.SponsorLevel;
                        var logo = tSponsorItem.LogoURL;
                        var website = tSponsorItem.Website;
                        var addr = tSponsorItem.Address;
                        var tSpon = new sponsor(name);
                        tSpon.logoLink = logo;
                        tSpon.level = level;
                        tSpon.website = website;
                        tSpon.address = addr;
                        t.sponsors.push(tSpon);
                    }
                    konsole.log("callback done");
                    callbackDone = true;

                });
            }
            callback(stApp);

        });
    });

};

function loadStops(tour) {
    return $.ajax({
        url: tour._stopService + "/query",
        type: "GET",
        async: false,
        data: {
            where: "(Not Upper(Visible) in ('F','N','FALSE','NO','0') or (Visible is null)) and StopOrder > 0",
            f: "json",
            outFields: "StopOrder,StopTag,Name,Caption,PrimaryImage,AudioClip,VideoClip,FlickrSetId",
            orderByFields: "StopOrder",
            returnGeometry: true
        },
        dataType: "json",
        success: function (data) {
            return data;
        },
        error: function (data) {
            return 0;
        }

    });
}

function loadAppSponsors(sponsorService) {
    return $.ajax({
        url: sponsorService + "/query",
        type: "GET",

        data: {
            where: "Type = 'App' and not Name is null",
            f: "json",
            outFields: "Name,SponsorLevel,LogoURL,Website,Address,Caption",
            orderByFields: "SponsorLevel ASC",
            returnGeometry: false
        },
        dataType: "json",
        success: function (data) {
            return data;
        },
        error: function (data) {
            return 0;
        }
    });
}

function loadTourSponsors(sponsorService, tourTag) {
    return $.ajax({
        url: sponsorService + "/query",
        type: "GET",
        async: false,
        data: {
            where: "Upper(Type) = 'TOUR' and not Name is null and Upper(TourTag) = '" + tourTag.toUpperCase() + "'",
            orderByFields: "SponsorLevel ASC",
            f: "json",
            outFields: "Name,SponsorLevel,LogoURL,Website,Address",
            returnGeometry: false
        },
        dataType: "json",
        success: function (data) {
            return data;
        },
        error: function (data) {
            return 0;
        }
    });
}

function loadTours(tourService) {

    var sqlWhere = "Not Upper(Visible) in ('F','N','FALSE','NO','0') or Visible is null";
    if (debug == true) {
        sqlWhere = "1=1";
    }
    return $.ajax({
        url: tourService + "/query",
        type: "GET",
        data: {
            where: sqlWhere,
            f: "json",
            outFields: "TourTag,Name,Description,Distance,PrimaryImage,StopService,DefaultMap",
            returnGeometry: false
        },
        dataType: "json",
        success: function (data) {
            return data;
        },
        error: function (data) {
            return 0;
        }

    });
}

function getConfigInfo(url) {
    $.ajax({
        type: 'get',
        data: {
            where: "not key_ is null and not Value is null",
            f: "json",
            outFields: "Key_,Value",
            returnGeometry: false
        },

        url: url + "/query",
        dataType: "json",
        success: function (response) {
            for (var i = 0; i < response.features.length; i++) {
                var item = response.features[i];
                var key = item.attributes.Key_;
                var value = item.attributes.Value;
                switch (key.toLowerCase()) {
                case "tours":
                    this._tourService = item.attributes.Value;
                    break;
                case "sponsors":
                    this._sponsorService = item.attributes.Value;
                    break;
                case "flickraccount":
                    this.flickrAccount = item.attributes.Value;
                    break;
                case "gardenmap":
                    this.gardenMap = item.attributes.Value;
                    break;
                }


            }


        }
    });

}
var konsole = {
    log: function () {
        if (typeof (debug) == "undefined" || debug == true) {
            console.log(arguments);
        }


    }
};