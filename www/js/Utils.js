var konsole = {
    log: function () {
        if (typeof(debug) == "undefined" || debug == true) {
            console.log(arguments);
        }
    }
}
function GetPinImages() {
    imgArray = {};
    //imgArray = new Array();
    imgArray[1] = new Image();
    imgArray[1].src = "../www/images/pushpins/Normal/1Circle.png";

    imgArray[2] = new Image();
    imgArray[2].src = "../www/images/pushpins/Normal/2Circle.png";

    imgArray[3] = new Image();
    imgArray[3].src = "../www/images/pushpins/Normal/3Circle.png";

    imgArray[4] = new Image();
    imgArray[4].src = "../www/images/pushpins/Normal/4Circle.png";

    imgArray[5] = new Image();
    imgArray[5].src = "../www/images/pushpins/Normal/5Circle.png";

    imgArray[6] = new Image();
    imgArray[6].src = "../www/images/pushpins/Normal/6Circle.png";

    imgArray[7] = new Image();
    imgArray[7].src = "../www/images/pushpins/Normal/7Circle.png";

    imgArray[8] = new Image();
    imgArray[8].src = "../www/images/pushpins/Normal/8Circle.png";

    imgArray[9] = new Image();
    imgArray[9].src = "../www/images/pushpins/Normal/9Circle.png";

    imgArray[10] = new Image();
    imgArray[10].src = "../www/images/pushpins/Normal/10Circle.png";

    imgArray[11] = new Image();
    imgArray[11].src = "../www/images/pushpins/Normal/11Circle.png";

    imgArray[12] = new Image();
    imgArray[12].src = "../www/images/pushpins/Normal/12Circle.png";

    imgArray[13] = new Image();
    imgArray[13].src = "../www/images/pushpins/Normal/13Circle.png";

    imgArray[14] = new Image();
    imgArray[14].src = "../www/images/pushpins/Normal/14Circle.png";

    imgArray[15] = new Image();
    imgArray[15].src = "../www/images/pushpins/Normal/15Circle.png";

    imgArray[16] = new Image();
    imgArray[16].src = "../www/images/pushpins/Normal/16Circle.png";

    imgArray[17] = new Image();
    imgArray[17].src = "../www/images/pushpins/Normal/17Circle.png";

    imgArray[18] = new Image();
    imgArray[18].src = "../www/images/pushpins/Normal/18Circle.png";
    
    imgArray[19] = new Image();
    imgArray[19].src = "../www/images/pushpins/Normal/19Circle.png";
    imgArray[20] = new Image();
    imgArray[20].src = "../www/images/pushpins/Normal/20Circle.png";
    imgArray[21] = new Image();
    imgArray[21].src = "../www/images/pushpins/Normal/21Circle.png";
    imgArray[22] = new Image();
    imgArray[22].src = "../www/images/pushpins/Normal/22Circle.png";
    imgArray[23] = new Image();
    imgArray[23].src = "../www/images/pushpins/Normal/23Circle.png";
    imgArray[24] = new Image();
    imgArray[24].src = "../www/images/pushpins/Normal/24Circle.png";
    imgArray[25] = new Image();
    imgArray[25].src = "../www/images/pushpins/Normal/25Circle.png";

    return imgArray;
}

//Focussed pushpins
function GetFocussedPinImages() {
    imgArrayFocussed = {}
    //imgArrayFocussed = new Array();
    imgArrayFocussed[1] = new Image();
    imgArrayFocussed[1].src = "../www/images/pushpins/Focussed/1Circle.png";

    imgArrayFocussed[2] = new Image();
    imgArrayFocussed[2].src = "../www/images/pushpins/Focussed/2Circle.png";

    imgArrayFocussed[3] = new Image();
    imgArrayFocussed[3].src = "../www/images/pushpins/Focussed/3Circle.png";

    imgArrayFocussed[4] = new Image();
    imgArrayFocussed[4].src = "../www/images/pushpins/Focussed/4Circle.png";

    imgArrayFocussed[5] = new Image();
    imgArrayFocussed[5].src = "../www/images/pushpins/Focussed/5Circle.png";

    imgArrayFocussed[6] = new Image();
    imgArrayFocussed[6].src = "../www/images/pushpins/Focussed/6Circle.png";

    imgArrayFocussed[7] = new Image();
    imgArrayFocussed[7].src = "../www/images/pushpins/Focussed/7Circle.png";

    imgArrayFocussed[8] = new Image();
    imgArrayFocussed[8].src = "../www/images/pushpins/Focussed/8Circle.png";

    imgArrayFocussed[9] = new Image();
    imgArrayFocussed[9].src = "../www/images/pushpins/Focussed/9Circle.png";

    imgArrayFocussed[10] = new Image();
    imgArrayFocussed[10].src = "../www/images/pushpins/Focussed/10Circle.png";

    imgArrayFocussed[11] = new Image();
    imgArrayFocussed[11].src = "../www/images/pushpins/Focussed/11Circle.png";

    imgArrayFocussed[12] = new Image();
    imgArrayFocussed[12].src = "../www/images/pushpins/Focussed/12Circle.png";

    imgArrayFocussed[13] = new Image();
    imgArrayFocussed[13].src = "../www/images/pushpins/Focussed/13Circle.png";

    imgArrayFocussed[14] = new Image();
    imgArrayFocussed[14].src = "../www/images/pushpins/Focussed/14Circle.png";

    imgArrayFocussed[15] = new Image();
    imgArrayFocussed[15].src = "../www/images/pushpins/Focussed/15Circle.png";

    imgArrayFocussed[16] = new Image();
    imgArrayFocussed[16].src = "../www/images/pushpins/Focussed/16Circle.png";

    imgArrayFocussed[17] = new Image();
    imgArrayFocussed[17].src = "../www/images/pushpins/Focussed/17Circle.png";

    imgArrayFocussed[18] = new Image();
    imgArrayFocussed[18].src = "../www/images/pushpins/Focussed/18Circle.png";

 imgArrayFocussed[19] = new Image();
    imgArrayFocussed[19].src = "../www/images/pushpins/Focussed/19Circle.png";
     imgArrayFocussed[20] = new Image();
    imgArrayFocussed[20].src = "../www/images/pushpins/Focussed/20Circle.png";
     imgArrayFocussed[21] = new Image();
    imgArrayFocussed[21].src = "../www/images/pushpins/Focussed/21Circle.png";
     imgArrayFocussed[22] = new Image();
    imgArrayFocussed[22].src = "../www/images/pushpins/Focussed/22Circle.png";
     imgArrayFocussed[23] = new Image();
    imgArrayFocussed[23].src = "../www/images/pushpins/Focussed/23Circle.png";
     imgArrayFocussed[24] = new Image();
    imgArrayFocussed[24].src = "../www/images/pushpins/Focussed/24Circle.png";
     imgArrayFocussed[25] = new Image();
    imgArrayFocussed[25].src = "../www/images/pushpins/Focussed/25Circle.png";

    return imgArrayFocussed;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

String.prototype.trunc = String.prototype.trunc ||
      function (n) {
          return this.length > n ? this.substr(0, n - 1) + '&hellip;' : this;
      };

function matchYoutubeUrl(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
}
