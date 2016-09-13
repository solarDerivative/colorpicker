var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var colorHover = document.getElementById('color');
var colorSelected = document.getElementById('color2');
var colorDefined = document.getElementById('color3');
var img = new Image();
img.src = 'testimage.png';
img.crossOrigin = "Anonymous";

var colorA;
var colorB = [];
var colorC = [];

var allRGB = [];

img.onload = function() {
	ctx.drawImage(img, 0, 0);
	img.style.display = 'none';
};


app.controller('canvCtrl', ['$scope', function($scope) {
	$scope.clear = function() {
		ctx.clearRect(0,0,350,350);
	};
	$scope.drawTest = function() {
		ctx.drawImage(img,0,0);
	};

	$scope.colorSelected = 'rgba(0,0,0,1)';

	$scope.colorDefined = 'rgba(0,0,0,1)';

	$scope.colorVals = {r: 100, g: 100, b: 100, a: 1};

	$scope.submitVals = function(r, g, b, a) {
		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		var data = [r, g, b, a];
		colorDefined.style.background = rgba;
		colorDefined.textContent = rgba;
		
		for(i = 0; i < data.length; i++){
			colorB[i] = parseInt(data[i]);
		}
	};

	$scope.colorClick = function($event) {
		var x = event.layerX;
		var y = event.layerY;
		var pixel = ctx.getImageData(x, y, 1, 1);
		var data = pixel.data;
		var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';

		colorSelected.style.background = rgba;
		colorSelected.textContent = rgba;
		colorA = data;
	};
	
	$scope.colorPick = function($event) {
		var x = event.layerX;
		var y = event.layerY;
		var pixel = ctx.getImageData(x, y, 1, 1);
		var data = pixel.data;
		var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';

		colorHover.style.background = rgba;
		colorHover.textContent = rgba;
	};

	$scope.replaceColor = function(before, after){
		var canvasData = ctx.getImageData(0,0,350,350);
		var pixels = canvasData.data;
		before = colorA;
		after = colorB;

		for (var i = 0; i < pixels.length; i += 4){
			if(pixels[i] === before[0] && pixels[i+1] === before[1] && pixels[i+2] === before[2] && pixels[i+3] === before[3]){
				console.log("HEY SOMETHING SHOULD HAPPEN HERE??");
				pixels[i] = after[0];
				pixels[i+1] = after[1];
				pixels[i+2] = after[2];
				pixels[i+3] = after[3];

				ctx.putImageData(canvasData, 0, 0);
			}
		}
	};
}]);