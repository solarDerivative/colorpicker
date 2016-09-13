var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var colorHover = document.getElementById('color');
var colorSelected = document.getElementById('color2');
var colorDefined = document.getElementById('color3');
var img = new Image();
var img2 = new Image();
img.src = 'testimage.png';
img2.src = 'testimage2.png';
/*
img.crossOrigin = "Anonymous";
img2.crossOrigin = "Anonymous";
*/
var colorA;
var colorB = [];

img.onload = function() {
	ctx.drawImage(img, 0, 0);
	img.style.display = 'none';
};




app.controller('canvCtrl', ['$scope', function($scope) {

	$scope.myImgs = [img, img2];
	$scope.allRGB = [0, 0, 0, 0];

	$scope.clear = function($scope) {
		ctx.clearRect(0,0,400,400);
	};
	$scope.drawTest = function(e) {
		$scope.clear();
		ctx.drawImage($scope.myImgs[e],0,0);
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
		var canvasData = ctx.getImageData(0,0,400,400);
		var pixels = canvasData.data;
		before = colorA;
		after = colorB;

		for (var i = 0; i < pixels.length; i += 4){
			if(pixels[i] == before[0] && pixels[i+1] == before[1] && pixels[i+2] == before[2] && pixels[i+3] == before[3]){
				console.log("HEY SOMETHING SHOULD HAPPEN HERE??");
				pixels[i] = after[0];
				pixels[i+1] = after[1];
				pixels[i+2] = after[2];
				pixels[i+3] = after[3];

				ctx.putImageData(canvasData, 0, 0);
			}
		}
	};

	$scope.pushUnique = function(item){
		var j = 0;
		while(j < $scope.allRGB.length-3) {
			if(item[0] == $scope.allRGB[j] && item[1] == $scope.allRGB[j+1] && item[2] == $scope.allRGB[j+2] && item[3] == $scope.allRGB[j+3]){
				if(j < $scope.allRGB.length-3){
					j += 4;
				} else {
					return false;
				}
			} else {
				console.log("How did I get here");
				$scope.allRGB.push(item[0], item[1], item[2], item[3]);
			}
		}
	};

	$scope.allColors = function(){
		var canvasData = ctx.getImageData(0,0,400,400);
		var pixels = canvasData.data;
		console.log("I am running?");

		for (var i = 0; i < pixels.length-3; i += 4){
			if(pixels[i] != pixels[i-4] || pixels[i+1] != pixels[i-3] || pixels[i+2] != pixels[i-2] || pixels[i+3] != pixels[i-1]){
				$scope.pushUnique([pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]]);
			}
		}
	};

}]);