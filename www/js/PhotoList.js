var pointLayer;
var map;
var mapOnListView;
var thisExt;
var lineLayer;
var selectedTourIndex;
var imgArray;
var scale = 1;
var x = 0;
var y = 0;
var lastScale;
var photoArray;
var index;
var isShowing;
var isSlideUpTextVisible;
var mySwiper;
function initSwiper() {
    mySwiper = new Swiper('.swiper-container', {
        autoResize: true,
        updateOnImagesReady:true,
        onSlideChangeEnd: function (s, d) {
            if (s.activeIndex > -1) {
                getPhotoInfo(s.activeIndex);
            }
            $("#rightPhotoImage").show();
            $("#leftPhotoImage").show();
            if (s.activeIndex == mySwiper.slides.length - 1) {
                $("#rightPhotoImage").hide();

            }
            if (s.activeIndex == 0) {
                $("#leftPhotoImage").hide();
            }
        },
        onImagesReady: function () {
            konsole.log("images ready");
        },
        onInit: function () {
        konsole.log("on init");
    }

    });
}
function initPhotoEvents() {
    $("#photoOverlay").on('singletap', function () {
        if ($("#photoOverlay").hasClass("MaxPhotoInfo")) {
            $("#photoOverlay").removeClass("MaxPhotoInfo");
            $("#PhotoDesc").css("overflow", "hidden");
            $("#PhotoOverlayExpander").css("-webkit-transform", "rotate(0deg)");


        }
        else {
            $("#photoOverlay").addClass("MaxPhotoInfo");
            $("#PhotoOverlayExpander").css("-webkit-transform", "rotate(180deg)");
            $("#PhotoDesc").css("overflow", "auto");
        }

    });
    $("#PicDiv").on('singletap', function () {

        if (isShowing) {
            konsole.log("Pic Div single tap  - Is Showing  " + isShowing);
            //hide
            //$(".OverlayText").addClass("SlideUp");
            $(".OverlayText").removeClass("SlideUpPhotoList");
            $(".OverlayText").addClass("SlideDownPhotoList");
            $("#leftPhotoImage").removeClass("FadeIn");
            $("#leftPhotoImage").addClass("FadeOut");
            $("#rightPhotoImage").addClass("FadeOut");
            isSlideUpTextVisible = false;
        } else {
            //show
            //$(".OverlayText").removeClass("SlideUp");
            $(".OverlayText").removeClass("SlideDownPhotoList");
            $(".OverlayText").addClass("SlideUpPhotoList");
            $("#leftPhotoImage").removeClass("FadeOut");
            $("#rightPhotoImage").removeClass("FadeOut");
            isSlideUpTextVisible = true;
        }

        isShowing = !isShowing;
    });
}
function GetPhotosFromSet(setId) {
    $("#PhotoListUL").html("");


    $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d6293a23487e45319120ca0e850d2847&photoset_id=" + setId + "&extras=description&jsoncallback=BindPhotosForSwiper&format=json",
        cache: 'true',
        dataType: "jsonp"
    });
}
function GetPhotoList(stopTag) {
	$("#PhotoListUL").html("");

	
	$.ajax({
		type : "GET",
		url : "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6293a23487e45319120ca0e850d2847&user_id=110297684@N04&extras=description&tags=" + stopTag + "&jsoncallback=BindPhotosForSwiper&format=json",
		cache : 'true',
		dataType : "jsonp"
	});
}
function getPhotoInfo(id) {
    if (photoArray[id]){
    $("#PhotoTitle").html(photoArray[id].title);
    $("#PhotoDesc").html(photoArray[id].description._content);
    $("#NavBarPhotoTitle").text("Photo " + parseInt(id + 1) + " of " + parseInt(photoArray.length));
    }
    //$("#NavBarPhotoTitle").html(photoArray[id].title);
}
function BindPhotosForSwiper(json) {
    mySwiper.removeAllSlides();
    //$("#PhotoListUL").html("");
    $("#PhotoListTable").html("");
    var photos;
    if (typeof (json.photoset) == "undefined" && typeof(json.photos) != "undefined") {
        photos = json.photos;
    }
    else if (typeof(json.photoset) != "undefined"){
        photos = json.photoset;
    }
    else{
    	
    	 $("#NoPhoto").show();
        $(".TopText").hide();
        konsole.log("Can't find photos");
        return;
    }
    
    
    if (photos.photo.length > 0) {
        photoArray = photos.photo;
        $("#NoPhoto").hide();
        $(".TopText").show();
        for (var i = 0; i < photos.photo.length; i++) {
            var photo = photos.photo[i];
            var tr = $('<tr style="width:100%;"></tr>');
            var tdLeft = $('<td class="thumb" ></td>');
            var tdRight = $('<td class = "thumbDesc"></td>');
            var linkToIndividual = $('<a onclick="GoToSlideShow('+i+');"></a>');
            
            var thumbnail = $('<img class="ListImg"></img>');
            thumbnail.attr('src', "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_t.jpg");
            var url = 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
            linkToIndividual.append(thumbnail);
            tdLeft.append(linkToIndividual);
            //var newSlide = mySwiper.createSlide("<div style='height:" + $(".swiper-container").height() + "px;width:" + $(".swiper-container").width() + "px;background: url(" + url + ") no-repeat center center fixed;background-size: 100%;'></div>");
            var photoID ="photo"+i;
            var newSlide = mySwiper.createSlide("<img id='"+photoID +"' src='" + url + "' style='max-width: 100%;max-height:100%;position:relative'>");

            newSlide.append();
            
            var linkToIndividual_Label = $('<a onclick="GoToSlideShow(' + i + ');"></a>');
            var labelTitle = $('<label style="vertical-align:middle;">' + photo.title + '</label>');

            linkToIndividual_Label.append(labelTitle);
            tdRight.append(linkToIndividual_Label);

            tr.append(tdLeft);
            tr.append(tdRight);

            $("#PhotoListTable").append(tr);
            //$("#PhotoListTable").append('<tr><td colspan="2"><hr/></td><tr>');

        }
        //mySwiper.calculateWidth();
        mySwiper.reInit();


    } else {
        //nophotos;
        $("#NoPhoto").show();
        $(".TopText").hide();
    }

    localStorage.setItem('PhotoList', JSON.stringify(photos.photo));

    //var x = JSON.parse(localStorage.getItem('PhotoList'));

}
//

function BindPhotos(json) {
	//$("#PhotoListUL").html("");
    $("#PhotoListTable").html("");

	if (json.photos.photo.length != 0) {
		$("#NoPhoto").hide();
		$(".TopText").show();
		for (var i = 0; i < json.photos.photo.length; i++) {
		    var tr = $('<tr style="width:100%;"></tr>');
		    var tdLeft = $('<td class="thumb" ></td>');
		    var tdRight = $('<td class = "thumbDesc"></td>');
		    var linkToIndividual = $('<a onclick="GetSpecificPhoto(\'' + i + '\');"></a>');
		    
		  	var thumbnail = $('<img class="ListImg"></img>');
            thumbnail.attr('src', "http://farm" + json.photos.photo[i].farm + ".staticflickr.com/" + json.photos.photo[i].server + "/" + json.photos.photo[i].id + "_" + json.photos.photo[i].secret + "_t.jpg");
            var url = 'http://farm' + json.photos.photo[i].farm + '.staticflickr.com/' + json.photos.photo[i].server + '/' + json.photos.photo[i].id + '_' + json.photos.photo[i].secret + '.jpg';
            linkToIndividual.append(thumbnail);
            tdLeft.append(linkToIndividual);


            var linkToIndividual_Label = $('<a onclick="GetSpecificPhoto(\'' + i + '\');"></a>');
            var labelTitle = $('<label style="vertical-align:middle;">' + json.photos.photo[i].title + '</label>');
          
            linkToIndividual_Label.append(labelTitle);
            tdRight.append(linkToIndividual_Label);

            tr.append(tdLeft);
            tr.append(tdRight);
            
            $("#PhotoListTable").append(tr);
            //$("#PhotoListTable").append('<tr><td colspan="2"><hr/></td><tr>');

		}
		
	} else {
		//nophotos;
		$("#NoPhoto").show();
		$(".TopText").hide();
	}

	localStorage.setItem('PhotoList', JSON.stringify(json.photos.photo));

	//var x = JSON.parse(localStorage.getItem('PhotoList'));

}//
function GoToSlideShow(selectedPhoto) {
    for (var i = 0; i < mySwiper.slides.length; i++) {
        var slide = mySwiper.slides[i];
        var imageHeight = slide.firstChild.height;
        var containerHeight = $(".swiper-container").height();

        if (containerHeight > imageHeight) {
            slide.firstChild.style.marginTop = ((containerHeight - imageHeight) / 2) + "px";
        }
    }
    $(".RightSwitchArrowPhotoList").off("singletap");
    $(".LeftSwitchArrowPhotoList").off("singletap");
    $("#PicDiv").off("swipeleft");
    $("#PicDiv").off("swiperight");
    $("#photoOverlay").removeClass("MaxPhotoInfo");
    $("#PhotoDesc").css("overflow", "hidden");
    $("#PhotoOverlayExpander").css("-webkit-transform", "rotate(0deg)");
    $(".OverlayText").removeClass("SlideDownPhotoList");
    $(".OverlayText").removeClass("SlideUpPhotoList");
    
    $(".OverlayText").addClass("SlideUpPhotoList");
    $("#leftPhotoImage").removeClass("FadeOut");
    $("#rightPhotoImage").removeClass("FadeOut");
    isShowing = true;
    isSlideUpTextVisible = true;
    //$("#PicDiv").off("singletap");
    konsole.log("Selected Photo " + selectedPhoto);
    index = parseInt(selectedPhoto);

    photoArray = JSON.parse(localStorage.getItem('PhotoList'));

    //SetPageElements(parseInt(index), photoArray);
    $.UIGoToArticle("#individualPhotos");
    $("#rightPhotoImage").show();
    $("#leftPhotoImage").show();
    if (index == mySwiper.slides.length - 1) {
        $("#rightPhotoImage").hide();

    }
    if (index == 0) {
        $("#leftPhotoImage").hide();
    }
    mySwiper.swipeTo(index, 500);
    getPhotoInfo(index);

    $("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));

    //left gestures
    $(".RightSwitchArrowPhotoList").on("singletap", function (ev) {
        konsole.log("Right Single Tap ");
        mySwiper.swipeNext();
        ev.preventDefault();
        ev.stopPropagation();
       
    });
 
    //right gestures
    $(".LeftSwitchArrowPhotoList").on("singletap", function (ev) {
        mySwiper.swipePrev();
        ev.preventDefault();
        ev.stopPropagation();
     
    });
 

}
function GetSpecificPhoto(selectedPhoto) {
    $(".RightSwitchArrowPhotoList").off("singletap");
    $(".LeftSwitchArrowPhotoList").off("singletap");
    $("#PicDiv").off("swipeleft");
    $("#PicDiv").off("swiperight");
    $("#photoOverlay").removeClass("MaxPhotoInfo");
    $("#PhotoDesc").css("overflow", "hidden");
    $("#PhotoOverlayExpander").css("-webkit-transform", "rotate(0deg)");
    $(".OverlayText").addClass("SlideUpPhotoList");
    $("#leftPhotoImage").removeClass("FadeOut");
    $("#rightPhotoImage").removeClass("FadeOut");
    isShowing = true;
    isSlideUpTextVisible = true;
    //$("#PicDiv").off("singletap");
    konsole.log("Selected Photo " + selectedPhoto);
	index = parseInt(selectedPhoto);

	photoArray = JSON.parse(localStorage.getItem('PhotoList'));

	SetPageElements(parseInt(index), photoArray);
	$.UIGoToArticle("#individualPhotos");

	
	$("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));
	

	/*	$("#PicDiv").on("swipeleft", function() {
	 index = index + 1;
	 if (index == photoArray.length) {
	 index = 0;
	 }
	 SetPageElements(index, photoArray);
	 $("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));
	 console.log(index);
	 });
	 $("#PicDiv").on("swiperight", function() {
	 index = index - 1;
	 if (index < 0) {
	 index = photoArray.length - 1;
	 }
	 SetPageElements(index, photoArray);
	 $("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));

	 console.log(index);
	 });
	 */
	function SetPageElements(index, photoArray) {
	    //$('#PicDiv').clear();
	   
	    $("#MainPic").attr("src", "images/loaderCS6.gif");
		var srcUrl = 'http://farm' + photoArray[index].farm + '.staticflickr.com/' + photoArray[index].server + '/' + photoArray[index].id + '_' + photoArray[index].secret + '.jpg';
		$("#MainPic").attr("src", srcUrl);

		$("#PhotoTitle").html(photoArray[index].title);
		$("#PhotoDesc").html(photoArray[index].description._content);
		$("#NavBarPhotoTitle").html(photoArray[index].title);
    }

	var element = document.getElementById('PicDiv');
	/*
	 $("#PicDiv").on("doubletap", function() {
	 scale = scale + 1;
	 $("#PicDiv").css("transform", "scale(" + scale + ")")
	 });
	 $("#PicDiv").on("longtap", function() {
	 x = x + 15;
	 y = y + 15;
	 $("#PicDiv").css("transform", "translate(" + x + "px," + y + "px)")
	 });
	 */
	var doubletapBit = false;
	$("#PicDiv").on("doubletap", function(event) {
	    konsole.log("Double Tap ");
		if (scale == 1) {
			posX = 0;
			posY = 0;
			scale = 2;
			console.log("In");

		} else {
			posX = 0;
			posY = 0;
			scale = 1;
			console.log("Out");
		}

		$("#MainPic").css("transform", "translate(" + posX + "px, " + posY + "px) scale(" + scale + ")");

	});

	$("#BackButton").on('tap', function() {
		$("#BackButton").addClass("Tapped");
		window.location = "PhotoList.html";
	});
	var posX = 0;
	var posY = 0;

	$('#PicDiv').hammer().on("transform drag", function(event) {
	    konsole.log("Hammer ");
		if (event.type == "transform") {
			posX = event.gesture.deltaX;
			posY = event.gesture.deltaY;
			scale = Math.max(1, Math.min(scale * event.gesture.scale * .5, 10));
		}
	    //scale = 1;
		if (scale != 1) {
			if (event.type = "drag") {
				posX = event.gesture.deltaX;
				posY = event.gesture.deltaY;
			}
			//$("#PicDiv").off("swiperight");

			//$("#PicDiv").off("swipeleft");

			swiperLeft = null;
			swiperRight = null;
		} else if (scale == 1) {
			posX = 0;
			posY = 0;

		}
		$("#MainPic").css("transform", "translate(" + posX + "px, " + posY + "px) scale(" + scale + ")");

	});

    //left gestures
	$(".RightSwitchArrowPhotoList").on("singletap", function () {
	    konsole.log("Right Single Tap ");
	    //$("#PicDiv").off('singletap');
	    //setTimeout(function () {
	    //    $("#PicDiv").on("singletap");
	    //},500);
	   
	    //console.log("Scale " + scale + " index " + index);
	    if (scale == 1) {
	        index = index + 1;
	        if (index == photoArray.length) {
	            index = 0;
	        }
	        SetPageElements(index, photoArray);
	        $("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));
	        //console.log(index);
	        if (isShowing) {
	            isShowing = false;
	        }
	    }
	    //$(".RightSwitchArrowPhotoList").off("singletap");
        //try this on Monday
	    
	//    $("#PicDiv").on('singletap', function () {
	//        console.log("IS Showing " + isShowing);
	//        if (isShowing) {
	//            //hide
	//            //$(".OverlayText").addClass("SlideUp");
    //                $(".OverlayText").removeClass("SlideUpPhotoList");
	//            $(".OverlayText").addClass("SlideDownPhotoList");
	//        } else {
	//            //show
	//            //$(".OverlayText").removeClass("SlideUp");
	//            $(".OverlayText").removeClass("SlideDownPhotoList");
	//            $(".OverlayText").addClass("SlideUpPhotoList");
	//        }

	//        isShowing = !isShowing;
	//    });
	});
	var swiperLeft = $("#PicDiv").on("swipeleft", function () {
	    konsole.log("Swipe Left  - move to the next ");
		if (scale == 1) {
			index = index + 1;
			if (index == photoArray.length) {
				index = 0;
			}
			SetPageElements(index, photoArray);
			$("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));
			//console.log(index);
		}
		//$("#PicDiv").off("swipeleft");
	    //try this on Monday
		//$("#PicDiv").off("singletap");
	});

    //right gestures
	$(".LeftSwitchArrowPhotoList").on("singletap", function () {
	    konsole.log("Left single tap");
	    //$("#PicDiv").off('singletap');
	    if (scale == 1) {
	        index = index - 1;
	        if (index < 0) {
	            index = photoArray.length - 1;
	        }
	        SetPageElements(index, photoArray);
	        $("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));

	        //console.log(index);
	        if (isShowing) {
	            isShowing = false;
	        }
	    }
	    //$(".LeftSwitchArrowPhotoList").off("singletap");
	    //	alert("end");
	    //$("#PicDiv").on('singletap', function () {
	    //    console.log("IS Showing " + isShowing);
	    //    if (isShowing) {
	    //        //hide
	    //        //$(".OverlayText").addClass("SlideUp");
	    //        $(".OverlayText").removeClass("SlideUpPhotoList");
	    //        $(".OverlayText").addClass("SlideDownPhotoList");
	    //    } else {
	    //        //show
	    //        //$(".OverlayText").removeClass("SlideUp");
	    //        $(".OverlayText").removeClass("SlideDownPhotoList");
	    //        $(".OverlayText").addClass("SlideUpPhotoList");
	    //    }

	    //    isShowing = !isShowing;
	    //});
	});
	var swiperRight = $("#PicDiv").on("swiperight", function () {
	    //console.log("Swipe right - move back ");
		if (scale == 1) {
			index = index - 1;
			if (index < 0) {
				index = photoArray.length - 1;
			}
			SetPageElements(index, photoArray);
			$("#NavBarPhotoTitle").text("Photo " + parseInt(index + 1) + " of " + parseInt(photoArray.length));

			//$("#PicDiv").off("swiperight");
			//console.log(index);
		}
	});

}
