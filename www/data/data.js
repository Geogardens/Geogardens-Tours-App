// This work for hire application was developed by Nathan Strout, Director of Spatial Technology at the University of Redlands // as a collaborative effort for the benefit of all parks and gardens. This application is derived from the Ventura Botanical // Gardens Tours App code base, Copyright 2015 Michele Dunham, and licensed under the copyleft, share and share-alike, // GNU General Public license.// Released under the GNU General Public License.  View full license text in the LICENSE.TXT file at the ROOT of// this GitHub repository.  View the short license text and DISCLAIMER in the README.TXT file located at the// ROOT of this GitHub repository.

var defaultData = {
   "_configLink":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/ArcGIS/rest/services/Geogardens_Config/FeatureServer/0",
   "_tourService":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/arcgis/rest/services/Geogardens_Demo_Tours/FeatureServer/0",
   "_sponsorService":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/arcgis/rest/services/Demo_Sponsors/FeatureServer/0",
   "gardenMap":null,
   "tours":[
      {
         "_stopService":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/arcgis/rest/services/VBG_Geology_Tour/FeatureServer/0",
         "name":"Ventura Botanical Gardens Geology Tour",
         "tag":"vbgGeology",
         "description":"Learn about the natural geology of the Ventura Botanical Gardens",
         "distance":"0.6 Miles",
         "path":{

         },
         "stops":[
            {
               "orderId":1,
               "title":"Geology Introduction",
               "description":"At this first tour stop we introduce you to the Pleistocene age Saugus Formation. Observe across the parking area, this rock formation is tilted toward the ocean.",
               "primaryPhotoLink":"https://farm9.staticflickr.com/8695/16845505215_f1076c7710.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/1-geology-introduction",
               "videoLink":null,
               "location":{
                  "x":-13279528.035295913,
                  "y":4067015.1549855205
               }
            },
            {
               "orderId":2,
               "title":"Saugus Formation",
               "description":"At this stop you can get a closer look at the sand layers in the Saugus Formation; note the sand layers are dipping toward the ocean.",
               "primaryPhotoLink":"https://farm9.staticflickr.com/8658/16844372032_c755114e8e.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/2-saugus-formation",
               "videoLink":null,
               "location":{
                  "x":-13279581.112429125,
                  "y":4066988.8507525036
               }
            },
            {
               "orderId":3,
               "title":"Ventura Anticline",
               "description":"The tilt of these sands toward the ocean forms the south limb of the Ventura Anticline.",
               "primaryPhotoLink":"https://farm9.staticflickr.com/8705/16819681086_bfa69b8744.jpg",
               "flickrSetId":72157600000000000,
               "audioLink":"http://soundcloud.com/geogardens/4-ventura-anticline",
               "videoLink":null,
               "location":{
                  "x":-13279592.166454561,
                  "y":4067018.3089647056
               }
            },
            {
               "orderId":4,
               "title":"Ventura Fault",
               "description":"This stop is on the up-thrown side of the Ventura Fault.",
               "primaryPhotoLink":"]https://farm9.staticflickr.com/8581/16819680786_d9c47ee657.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/5-ventura-fault",
               "videoLink":null,
               "location":{
                  "x":-13279610.4117191,
                  "y":4067004.376763414
               }
            },
            {
               "orderId":5,
               "title":"Offshore Oil Platforms",
               "description":"Looking toward the ocean, from extreme right to left, you see Platforms Grace, Gilda, Gail, and Gina.",
               "primaryPhotoLink":"https://farm9.staticflickr.com/8578/16659384429_ae5b36ecca.jpg",
               "flickrSetId":72157600000000000,
               "audioLink":"http://soundcloud.com/geogardens/6-offshore-oil-platforms",
               "videoLink":null,
               "location":{
                  "x":-13279600.39296493,
                  "y":4067052.878843695
               }
            },
            {
               "orderId":6,
               "title":"Stone Walls",
               "description":"This stone wall was made by people who terraced this hillside for farming during the last century.",
               "primaryPhotoLink":"https://farm8.staticflickr.com/7584/16659376619_8623c6b9fb.jpg",
               "flickrSetId":72157600000000000,
               "audioLink":"http://soundcloud.com/geogardens/3-stone-walls",
               "videoLink":null,
               "location":{
                  "x":-13279602.853125677,
                  "y":4067140.2908952287
               }
            },
            {
               "orderId":7,
               "title":"Channel Islands Geology",
               "description":"Anacapa Island is directly to the south, Santa Cruz is the big island to the right.",
               "primaryPhotoLink":"https://farm8.staticflickr.com/7632/16845494195_2a649b9e78.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/7-channel-islands-geology",
               "videoLink":null,
               "location":{
                  "x":-13279615.977693643,
                  "y":4067209.1647379217
               }
            },
            {
               "orderId":8,
               "title":"Boulder Conglomerate",
               "description":"This rock pile is a natural stream-channel deposit; it was not made by man.",
               "primaryPhotoLink":"https://farm9.staticflickr.com/8577/16223130824_6314baf1b8.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/8-boulder-conglomerate",
               "videoLink":null,
               "location":{
                  "x":-13279583.338818941,
                  "y":4067297.060333691
               }
            },
            {
               "orderId":9,
               "title":"Pleistocene Fossils",
               "description":"The small white chips are fossil shell fragments.",
               "primaryPhotoLink":"https://farm8.staticflickr.com/7284/16638228537_8f6647b34e.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/9-pleistocene-fossils",
               "videoLink":null,
               "location":{
                  "x":-13279564.770727877,
                  "y":4067351.979596559
               }
            },
            {
               "orderId":10,
               "title":"Geology Conclusion",
               "description":"You are now an honorary geologist!",
               "primaryPhotoLink":"https://farm9.staticflickr.com/8649/16658130750_75f6501701.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":"http://soundcloud.com/geogardens/10-geology-conclusion",
               "videoLink":null,
               "location":{
                  "x":-13279506.884592665,
                  "y":4067422.0403745156
               }
            }
         ],
         "basemap":"Imagery",
         "sponsors":[
            {
               "name":"John and Michele Dunham",
               "level":1,
               "logoLink":null,
               "website":null,
               "address":null
            }
         ],
         "groupId":null
      },
      {
         "_stopService":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/arcgis/rest/services/RSA_Demo_Tour/FeatureServer/0",
         "name":"Rancho Santa Ana Botanic Garden",
         "tag":"rsaDemoTour",
         "description":"Explore California Plant Communities",
         "distance":"About 1 mile",
         "path":{

         },
         "stops":[
            {
               "orderId":1,
               "title":"Tour Stop 1",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103959.531911733,
                  "y":4043687.4080078364
               }
            },
            {
               "orderId":2,
               "title":"Tour Stop 2",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103941.832112698,
                  "y":4043701.5899261157
               }
            },
            {
               "orderId":3,
               "title":"Tour Stop 3",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103929.21961439,
                  "y":4043698.455865861
               }
            },
            {
               "orderId":4,
               "title":"Tour Stop 4",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103925.49041145,
                  "y":4043707.1145329294
               }
            },
            {
               "orderId":5,
               "title":"Tour Stop 5",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103919.223124117,
                  "y":4043716.9671360254
               }
            },
            {
               "orderId":6,
               "title":"Tour Stop 6",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103923.030250702,
                  "y":4043743.018492311
               }
            },
            {
               "orderId":7,
               "title":"Tour Stop 7",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103916.384477103,
                  "y":4043749.5125174415
               }
            },
            {
               "orderId":8,
               "title":"Tour Stop 8",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103913.100552123,
                  "y":4043757.7234982075
               }
            },
            {
               "orderId":9,
               "title":"Tour Stop 9",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103914.146955337,
                  "y":4043768.02521523
               }
            },
            {
               "orderId":10,
               "title":"Tour Stop 10",
               "description":"add text",
               "primaryPhotoLink":"add flickr image url",
               "flickrSetId":1,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13103878.012648627,
                  "y":4043793.404426333
               }
            }
         ],
         "basemap":"Imagery",
         "sponsors":[

         ],
         "groupId":null
      },
      {
         "_stopService":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/arcgis/rest/services/SFBG_Demo_Tour/FeatureServer/0",
         "name":"San Francisco Botanical Garden",
         "tag":"sfbgDemoTour",
         "description":"Explore 22 tour stops in the garden.",
         "distance":"Approximately 1.5 miles",
         "path":{

         },
         "stops":[
            {
               "orderId":1,
               "title":"Entry Garden",
               "description":"As you walk into the Botanical Garden you are greeted by the vibrant and bold Entry Garden, planted in 1998. Here you will find dense plantings of brightly colored flowers and striking vegetation from subtropical and temperate zones",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5657/20524069486_330f32621c.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13632957.099247763,
                  "y":4546568.780363293
               }
            },
            {
               "orderId":2,
               "title":"Great Meadow",
               "description":"Walking along the paths around the great meadow leads you through an open landscape providing views of the fountain and surrounding trees. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5732/20363740239_e2b74d5101_z.jpg ",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633027.62014518,
                  "y":4546591.300369265
               }
            },
            {
               "orderId":3,
               "title":"Temperate Asia",
               "description":"The Temperate Asia collection showcases plants from milder climates within the extensive geographic region of Asia. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5795/19929435103_e10a6f870d.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633054.826628728,
                  "y":4546556.30932541
               }
            },
            {
               "orderId":4,
               "title":"Mesoamerican Cloud Forest",
               "description":"High above the tropical rain forests in Central and South America, the landscape rises to elevations upwards of 6,500 feet. The close tropical air-cools to mist and fog, which harbors an abundance of mosses, ferns and epiphytes. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5653/20362290120_c80734221b.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633123.889240816,
                  "y":4546561.798495391
               }
            },
            {
               "orderId":5,
               "title":"South Africa",
               "description":"The southwest tip of South Africa, near Cape Town, has a Mediterranean climate with dry summers and mild wet winters, much like coastal California.",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5632/20550321705_48b160f742_z.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633260.99032568,
                  "y":4546630.526021212
               }
            },
            {
               "orderId":6,
               "title":"Garden of Fragrance",
               "description":"The Garden of Fragrance was originally designed in 1965 as a garden for visually impaired visitors. It has undergone a few renovations since then to become a place for all visitors to enjoy. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5670/20362531190_7103250de5_z.jpg ",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633124.668477252,
                  "y":4546688.406483008
               }
            },
            {
               "orderId":7,
               "title":"Rhododendron Garden",
               "description":"John McLaren, the first superintendent of Golden Gate Park, loved rhododendrons and supervised the original plantings throughout the Park. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5780/19929433563_c86f4890d3_z.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633119.358537542,
                  "y":4546752.553878343
               }
            },
            {
               "orderId":8,
               "title":"Ancient Plant Garden",
               "description":"One of the most enjoyable ways to experience time unfolding is in our Ancient Plant Garden. There are groups of plants that are well represented in the fossil record, that still exist today relatively unchanged. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5684/20362302378_6d339009f9.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633311.217679925,
                  "y":4546834.636984049
               }
            },
            {
               "orderId":9,
               "title":"Australia Garden",
               "description":"Australia is an island continent that is as large as the continental United States. As a result of its isolation, there are many distinct plant species that have evolved over time representing extreme diversity. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5818/20362302488_6f8b153d65.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633333.937987996,
                  "y":4546818.639402394
               }
            },
            {
               "orderId":10,
               "title":"New Zealand",
               "description":"West Coast gardeners will recognize many of the plants in our New Zealand collection, as they have become valuable for gardens and landscaping due to their interesting foliage forms. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5639/19930012823_e723ff74b4_z.jpg ",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633330.231048953,
                  "y":4546747.936300397
               }
            },
            {
               "orderId":11,
               "title":"Chile Garden",
               "description":"The Chile Garden was among the original collections that opened the Garden in 1940. Nestled next to the Andean Cloud Forest, this small but important garden has seen upgrades and renovation in recent years. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5791/20363603119_3abc3cc1e0.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633432.544792939,
                  "y":4546814.499187201
               }
            },
            {
               "orderId":12,
               "title":"Andean Cloud Forest",
               "description":"The Andean Cloud Forest, currently under renovation, grew from SFBG's close relationship with the Botany Department at the California Academy of Sciences, in particular Senior Curator of Botany, Frank Almeda. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5627/20524055386_7a69304db9.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633417.015723974,
                  "y":4546809.722451174
               }
            },
            {
               "orderId":13,
               "title":"Zellerbach Garden of Perennials",
               "description":"Anchoring the west end of the major east-west axial vista, the Jennie B. Zellerbach Garden, is one of the most prominent and architecturally important gardens at San Francisco Botanical Garden. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5746/19929450553_5d18efbd0e.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633525.429776058,
                  "y":4546766.060199965
               }
            },
            {
               "orderId":14,
               "title":"Southeast Asian Cloud Forest",
               "description":"The Southeast Asian Cloud Forest was set aside for plants from the mountains of Southeast Asia in the early days of the garden. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5765/20362300238_c7df617bbb_z.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633545.656527534,
                  "y":4546687.215129694
               }
            },
            {
               "orderId":15,
               "title":"Moon Viewing Garden",
               "description":"Designed in 1973, this garden was a gift from the San Francisco Bay Area chapter of Ikebana International. Reminiscent of traditional Japanese gardens, our Moon Viewing Garden is a place for quiet contemplation and relaxation. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5638/20524053836_b79c8827c2_z.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633458.838456666,
                  "y":4546683.504473371
               }
            },
            {
               "orderId":16,
               "title":"Camellia Garden",
               "description":"Camellias are evergreen shrubs and trees native to East Asia with most species clustered in southwestern China. The name Camellia is taken from the Latinized name of Rev. Georg Kamel (1661 - 1706) a Czech-born Jesuit missionary to the Philippines. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5622/20363603299_6b298e53b6.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633461.832950966,
                  "y":4546694.588566819
               }
            },
            {
               "orderId":17,
               "title":"Succulent Garden",
               "description":"Succulents are appreciated for their varied patterns of growth, ranging from spiny stems to soft leafy rosettes in a variety of green and gray shades, with many offering surprising, extremely colorful flowers. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5645/20556775071_8367dc779a_z.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633551.36721741,
                  "y":4546563.685486257
               }
            },
            {
               "orderId":18,
               "title":"Dry Mexico",
               "description":"In southern Mexico, as the elevation decreases along on the edges of the cloud forest, there is a transition zone to pine and oak woodlands that are very rich in plant species. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5637/20362303450_2976bf096f.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633566.818362735,
                  "y":4546498.9154245425
               }
            },
            {
               "orderId":19,
               "title":"Children's Garden",
               "description":"On the way to the Children's Garden you will walk along the Coastal California Trail. Here you can see plants growing in a more natural setting that are indicative of many coastal habitats found in California. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5642/20550336415_b724383893.jpg",
               "flickrSetId":7215770000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633789.379420677,
                  "y":4546457.439983804
               }
            },
            {
               "orderId":20,
               "title":"Redwood Grove",
               "description":"Redwoods: the original San Francisco Giants! Stands of old-growth coast redwoods once flourished on more than two million acres in coastal California but have been drastically reduced by extensive logging during the last 150 years. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5818/20362922548_8960d57568_z.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633460.920131141,
                  "y":4546524.302368008
               }
            },
            {
               "orderId":21,
               "title":"California Native Garden",
               "description":"California boasts close to 6,000 native plants, more than all the other states combined! In fact, California was named one of the 25 biodiversity hotspots on the planet, areas with some of the highest concentrations of plant life on Earth. ",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5673/20550322735_be075d76ce.jpg",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633231.724431548,
                  "y":4546470.033415788
               }
            },
            {
               "orderId":22,
               "title":"Mediterranean Basin",
               "description":"This area has been transformed into a stunning new Mediterranean garden after sitting undisturbed for 25 years.  Named Heidelberg Hill for the 1894 Midwinter Fair; it was the site of a former German village and beer garden.",
               "primaryPhotoLink":"https://farm6.staticflickr.com/5698/19927681204_a7ee297ca5_z.jpg ",
               "flickrSetId":72157700000000000,
               "audioLink":null,
               "videoLink":null,
               "location":{
                  "x":-13633205.608879007,
                  "y":4546691.2017983515
               }
            }
         ],
         "basemap":"Imagery",
         "sponsors":[

         ],
         "groupId":null
      },
      {
         "_stopService":"http://services6.arcgis.com/4uAfQe3k1vJfJNXE/arcgis/rest/services/USBG_Demonstration_Tour/FeatureServer/0",
         "name":"United States Botanical Garden",
         "tag":"USBG",
         "description":"Discover some of the highlights of the USBG",
         "distance":".25 miles",
         "path":{

         },
         "stops":[
            {
               "orderId":1,
               "title":"Welcome!",
               "description":"Welcome to this Care for the Rare tour! Just approach the next tour stop and you'll see and hear about some of the important threatened plants at the U.S. Botanic Garden.",
               "primaryPhotoLink":"https://c2.staticflickr.com/2/1534/24470220736_c523c7d107.jpg",
               "flickrSetId":"72157663756731685",
               "audioLink":"https://soundcloud.com/geogardens/1-welcome",
               "videoLink":null,
               "location":{
                  "x":-8573039.494410813,
                  "y":4705670.009984349
               }
            },
            {
               "orderId":2,
               "title":"Pitcher plants",
               "description":"The U.S. Botanic Garden is building an important collection of pitcher plants (Sarracenia) as an insurance policy against extinction.",
               "primaryPhotoLink":"https://c2.staticflickr.com/6/5783/23743732700_07b9501ee7.jpg",
               "flickrSetId":"72157662860764546",
               "audioLink":"https://soundcloud.com/geogardens/2-sarracenia",
               "videoLink":null,
               "location":{
                  "x":-8573074.577812456,
                  "y":4705653.8865487
               }
            },
            {
               "orderId":3,
               "title":"Sunset aloe",
               "description":"Sunset aloe is over-harvested by nearby vilages in Tanzania. Make sure the mecines and cosmetics you buy are responsibly grown and harvested!",
               "primaryPhotoLink":"https://c2.staticflickr.com/2/1676/23743616410_1e5d8c6baf.jpg",
               "flickrSetId":null,
               "audioLink":"https://soundcloud.com/geogardens/3-aloe-dorothea",
               "videoLink":null,
               "location":{
                  "x":-8573060.245869657,
                  "y":4705617.45952742
               }
            },
            {
               "orderId":4,
               "title":"Anthurium eggersii",
               "description":"This member of the Aroid family is threatened by land development in Ecuador, and the U.S. Botanic Garden cares for this plant as a safety net against extinction.",
               "primaryPhotoLink":"https://c2.staticflickr.com/6/5684/23956804101_071a0e4838.jpg",
               "flickrSetId":"72157662749036442",
               "audioLink":"https://soundcloud.com/geogardens/4-anthurium-eggersii",
               "videoLink":null,
               "location":{
                  "x":-8573039.494410813,
                  "y":4705624.028334536
               }
            },
            {
               "orderId":5,
               "title":"Welwitschia mirabilis",
               "description":"Found in coastal dunes of southwestern Africa, Welwitschia mirabilis is threatened with extinction by recreational vehicles. Tred lightly when you visit habitats like sand dunes!",
               "primaryPhotoLink":"https://c2.staticflickr.com/6/5788/23956938371_1bbf9b355c.jpg",
               "flickrSetId":"72157662932754195",
               "audioLink":"https://soundcloud.com/geogardens/5-welwitschia-mirabilis",
               "videoLink":null,
               "location":{
                  "x":-8573021.131609103,
                  "y":4705618.056691703
               }
            },
            {
               "orderId":6,
               "title":"Golden Barrel Cactus",
               "description":"Golden barrel cactus is over-harvested in the wild, which has caused sever decline of the species. Make sure the nursery plants you buy are responsibly grown - just ask!",
               "primaryPhotoLink":"https://c2.staticflickr.com/2/1686/23931284752_15d034c6eb.jpg",
               "flickrSetId":"72157662932754195",
               "audioLink":"https://soundcloud.com/geogardens/6-echinocactus-grusonii",
               "videoLink":null,
               "location":{
                  "x":-8573005.157464525,
                  "y":4705619.2510202695
               }
            },
            {
               "orderId":7,
               "title":"Cabbage on a stick",
               "description":"There are only a few individuals left of cabbage on a stick, and the U.S. Botanic Garden is partnering with other gardens to multiply plants in order to prevent complete extinction.",
               "primaryPhotoLink":"https://c2.staticflickr.com/2/1526/23931209712_433df88f9c.jpg",
               "flickrSetId":"72157662860764556",
               "audioLink":"https://soundcloud.com/geogardens/7-brighamia-insignis",
               "videoLink":null,
               "location":{
                  "x":-8572994.557798496,
                  "y":4705619.549602411
               }
            },
            {
               "orderId":8,
               "title":"Garden Primeval",
               "description":"Cycas taiwaniana is over-collected in its home in China, and may actually have disappeared completely from the wild. The U.S. Botanic Garden is growing some of the last known plants of this species to make sure it does not disappear forever.",
               "primaryPhotoLink":"https://c2.staticflickr.com/2/1641/24013321806_9fb6d7e67a.jpg",
               "flickrSetId":"72157662218874629",
               "audioLink":"https://soundcloud.com/geogardens/8-cycas-taiwaniana",
               "videoLink":null,
               "location":{
                  "x":-8572993.66205207,
                  "y":4705632.388634502
               }
            }
         ],
         "basemap":"Garden",
         "sponsors":[

         ],
         "groupId":null
      }
   ],
   "sponsors":[
      {
         "name":"Geogardens",
         "level":1,
         "logoLink":"https://farm6.staticflickr.com/5580/14898996192_03e181f065_m.jpg",
         "website":"http://geogardens.org",
         "address":null,
         "caption":"Engage, Educate, and Show the Way"
      },
      {
         "name":"Nate Strout",
         "level":1,
         "logoLink":null,
         "website":null,
         "address":null,
         "caption":null
      }
   ],
   "flickrAccount":"GeogardensFlickr",
   "map":{
      "fullExtent":{
         "minX":-122.545637,
         "minY":34.083194,
         "maxX":-117.629942,
         "maxY":37.830766,
         "wkid":4326
      },
      "imageryServices":[
         "http://tiles.arcgis.com/tiles/UdNSRpyD8hxLx3jb/arcgis/rest/services/imagery/MapServer",
         "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
         "http://tiles.arcgis.com/tiles/4uAfQe3k1vJfJNXE/arcgis/rest/services/AerialImagery_2011_LARIAC_1ft/MapServer"
      ],
      "gardenServices":[
         "http://tiles.arcgis.com/tiles/4uAfQe3k1vJfJNXE/arcgis/rest/services/US_Botanical_Garden_Map/MapServer",
         "http://tiles.arcgis.com/tiles/4uAfQe3k1vJfJNXE/arcgis/rest/services/VBG_Garden/MapServer"
      ],
      "trailService":"http://services1.arcgis.com/UdNSRpyD8hxLx3jb/arcgis/rest/services/DemonstrationTrail/FeatureServer/0",
      "contourService":"http://tiles.arcgis.com/tiles/UdNSRpyD8hxLx3jb/arcgis/rest/services/ContoursTiles/MapServer",
      "imageryMapID":"3d7c1066f8bd44c69cbf591a0795c00e",
      "gardenMapID":"51880ba7b0ce4b5b8764ebf82c349f41",
      "topoMapID":"48b08c2919644b10b6a7aeaa0f2f2fdb",
      "defaultView":"Garden",
      "currentView":"Garden"
   },
   "geofenceMaxInterval":5,
   "geofenceDistance":35,
   "accuracyUpdateInterval":10,
   "sponsorThankYou":""
};