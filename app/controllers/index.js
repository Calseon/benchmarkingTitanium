$.index.open();
var hide = true;

$.lblTime.setColor("#000");
$.tf_numViews.setColor("#000");
$.btnHide.setTitle(hide ? "Hide: On" : "Hide: Off");



function startTest(e){
	resetTest(e);
	var start = new Date().getTime();
	var num = $.tf_numViews.value;
	if (hide)
		$.viewGenContainer.hide();
	for (var i = 0; i< num; i++){
		var lblspawn =  Ti.UI.createLabel({
		  text: i.toString(),
		  backgroundColor: "lightgray",
		  top: 10,
		  width: Ti.UI.FILL, height: Ti.UI.SIZE,
		  color: '#000'
		});
		$.viewGenContainer.add(lblspawn);
	}
	if (hide)
		$.viewGenContainer.show();
	var end = new Date().getTime();
	$.lblTime.setText("Time: " + (end-start).toString());
}
function resetTest(e){
	if (hide)
		$.viewGenContainer.hide();
	$.viewGenContainer.removeAllChildren();
	if (hide)
		$.viewGenContainer.show();
}

function toggleHide(e){
	hide = !hide;
	$.btnHide.setTitle(hide ? "Hide: On" : "Hide: Off");
}
