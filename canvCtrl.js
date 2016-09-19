var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var colorHover = document.getElementById('color');
var colorSelected = document.getElementById('color2');
var colorDefined = document.getElementById('color3');
var colorTotal = document.getElementById('colorTotal');
var colorMsg = document.getElementById('colorMsg');
var img0 = new Image();
var img1 = new Image();
var img2 = new Image();
img0.src = 'testimage0.png';
img1.src = 'testimage1.png';
img2.src = 'testimage2.png';
/*
img.crossOrigin = "Anonymous";
img2.crossOrigin = "Anonymous";
*/
var colorA;
var colorB = [];

app.controller('canvCtrl', ['$scope', function($scope) {

	$scope.images = [{
		id: 0,
		name: 'Link',
		source: img0
	}, {
		id: 1,
		name: 'Zetterburn',
		source: img1
	}, {
		id: 2,
		name: 'Orcane',
		source: img2
	}, ];

	$scope.parseInt = parseInt;

	$scope.clear = function($scope) {
		ctx.clearRect(0,0,400,400);
		colorTotal.style.display = "none";
	};

	$scope.drawTest = function(e) {
		$scope.clear();
		ctx.canvas.width = $scope.images[e].source.width;
		ctx.canvas.height = $scope.images[e].source.height;
		ctx.drawImage($scope.images[e].source,0,0);
		$scope.allColors();
	};

	$scope.colorSelected = 'rgba(0,0,0,1)';

	$scope.colorDefined = 'rgba(0,0,0,1)';

	$scope.colorVals = {r: 100, g: 100, b: 100, a: 1};

	$scope.allColorVals = [];

	$scope.submitVals = function(r, g, b, a) {
		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		var data = [r, g, b, a];
		colorDefined.style.background = rgba;
		colorDefined.style.color = $scope.setTextColor(data[0], data[1], data[2]);
		colorDefined.textContent = rgba;
		
		for(var i = 0; i < data.length; i++){
			colorB[i] = parseInt(data[i]);
		}
	};

	$scope.setClicked = function(r, g, b, a) {
		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		var data = [r, g, b, a];
		colorSelected.style.background = rgba;
		colorSelected.style.color = $scope.setTextColor(data[0], data[1], data[2]);
		colorSelected.textContent = rgba;
		
		colorA = data;
	};

	$scope.colorClick = function($event) {
		var x = event.layerX;
		var y = event.layerY;
		var pixel = ctx.getImageData(x, y, 1, 1);
		var data = pixel.data;
		var rgba = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] + ')';

		colorSelected.style.background = rgba;
		colorSelected.style.color = $scope.setTextColor(data[0], data[1], data[2]);
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
		colorHover.style.color = $scope.setTextColor(data[0], data[1], data[2]);
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

		$scope.allColors();
	};

	$scope.allColors = function(){
		var canvasData = ctx.getImageData(0,0,400,400);
		var pixels = canvasData.data;
		var format;
		var colorArray = [];
		console.log("I am running?");

		for (var i = 0; i < pixels.length; i += 4){
			format = [pixels[i], pixels[i+1], pixels[i+2], pixels[i+3]];
			colorArray = $scope.pushUnique(colorArray, format);
		}
		$scope.allColorVals = colorArray;
		colorTotal.style.display = "block";
		colorMsg.textContent = "There are a total of " + $scope.allColorVals.length + " colors in this sprite.";
	};

	$scope.pushUnique = function(clrArr, format){
		//assume we should add the format
		var shouldPush = true;
		var badFormat = [0, 0, 0, 0];

		//check the array of currently found colors
		for(var j = 0; j < clrArr.length; j++) {
			var currentPixel = clrArr[j];
			//compare the current pixel's color values to our input colors
			if (currentPixel[0] === format[0] &&
				currentPixel[1] === format[1] &&
				currentPixel[2] === format[2] &&
				currentPixel[3] === format[3]) {
				shouldPush = false;
			}
		}

		if(format[3] === 0){
			shouldPush = false;
		}

		//if we never found an instance of the pixel in our current array, add it
		if(shouldPush){
			clrArr.push(format);
		}
		//send back the array
		return clrArr;
	};

	$scope.setTextColor = function(r, g, b){

    	var o = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);

    	if(o > 75){
    		return 'black';
    	} else {
    		return 'white';
    	}
	};

	

	/*

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
	*/

}]);