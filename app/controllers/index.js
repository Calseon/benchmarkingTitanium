function doClick(e) {
    alert($.label.text);
}

$.index.open();
function startTest(e){
	resetTest(e);
	var num = $.tf_numViews.value;
	for (var i = 0; i< num; i++){
		var lblspawn =  Ti.UI.createLabel({
		  shadowColor: '#aaa',
		  shadowOffset: {x:5, y:5},
		  shadowRadius: 3,
		  text: i.toString(),
		  top: 30,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
		$.viewGenContainer.add(lblspawn);
	}
}
function resetTest(e){
	
}
