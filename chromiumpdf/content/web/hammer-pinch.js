$(document).ready(function () {
var HammerPinch = function (ev) {
    console.log("got a pinch event");
    if (ev.scale > 1){
        console.log("zooming in");
        webViewerZoomIn();
    } else {
        console.log("zooming out");
        webViewerZoomOut();
    }
};
$('#viewer').hammer(
    {
	prevent_default: false, //allow native vertical scroll of the pdf
	drag : false,  //prevent hammer js hijack the veritcal scroll touch event
	swipe : false,
	tap : false,
	hold : false
    }
).bind('transform', HammerPinch);
});
