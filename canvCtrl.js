var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var colorHover = document.getElementById('color');
var colorSelected = document.getElementById('color2');
var colorDefined = document.getElementById('color3');
var colorTotal = document.getElementById('colorTotal');
var colorMsg = document.getElementById('colorMsg');

rInput = document.getElementById("r");
gInput = document.getElementById("g");
bInput = document.getElementById("b");

var img0 = new Image();
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var img7 = new Image();
var img8 = new Image();
img0.src = 'testimage0.png';
img1.src = 'testimage1.png';
img2.src = 'testimage2.png';
img3.src = 'testimage3.png';
img4.src = 'testimage4.png';
img5.src = 'testimage5.png';
img6.src = 'testimage6.png';
img7.src = 'testimage7.png';
img8.src = 'testimage8.png';
/*
img.crossOrigin = "Anonymous";
img2.crossOrigin = "Anonymous";
*/
var colorA;
var colorB = [];

app.controller('canvCtrl', ['$scope', function($scope) {

	/*

	$scope.characters = [{
		charId: 0,
		charName: 'Link',
		source: img0,
		colors: [{
			sectId:0, sectName: 'Hair', vals:[{
				r: 122, g: 53, b: 0, a: 255
			}],
			sectId:1, sectName: 'Tunic', vals:[{
				r: 122, g: 192, b: 0, a: 255
			}],
			sectId:2, sectName: 'Skin', valus:[{
				r: 214, g: 133, b: 17, a: 255
			}]
		}]
	}, {
		charId: 1,
		charName: 'Zetterburn',
		source: img1,
		colors: [{
			sectId:0, sectName: 'Body', vals: [{
	
			}],
			sectId:1, sectName: 'Hands', vals: [{
	
			}],
			sectId:2, sectName: 'Fire1', vals: [{
	
			}],
			sectId:3, sectName: 'Fire2', vals: [{
	
			}],
			sectId:4, sectName: 'Fire3', vals: [{
	
			}],
			sectId:5, sectName: 'Uneditables', vals: [{
	
			}]
		}]
	}, {
		charId: 2,
		charName: 'Orcane',
		source: img2,
		colors: [{
			sectId:0, sectName: 'Body', vals: [{
	
			}],
			sectId:1, sectName: 'Belly', vals: [{
	
			}],
			sectId:2, sectName: 'Uneditables', vals: [{
	
			}]
		}]
	}, {
		charId: 3,
		charName: 'Kragg',
		source: img3,
		colors: [{
			sectId:0, sectName: 'Rock', vals: [{
	
			}],
			sectId:1, sectName: 'Skin', vals: [{
	
			}],
			sectId:2, sectName: 'Armor', vals: [{
	
			}],
			sectId:3, sectName: 'Shading', vals: [{
	
			}],
			sectId: 4, sectName: 'Uneditables', vals: [{
	
			}]
		}]
	}, {
		charId: 4,
		charName: 'Wrastor',
		source: img4,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
				
			}],
			sectId: 1, sectName: 'Hands', vals [{
				
			}],
			sectId: 2, sectName: 'Scarf', vals [{
				
			}],
			sectId: 3, sectName: 'Belly', vals [{
				
			}],
			sectId: 4, sectName: 'Beak', vals [{
				
			}],
			sectId: 5, sectName: 'Uneditables', vals [{
	
			}]
		}]
	}, {
		charId: 5,
		charName: 'Forsburn',
		source: img5,
		colors: [{
			sectId: 0, sectName: 'Cloak 1', vals [{
				
			}],
			sectId: 1, sectName: 'Body', vals [{
				
			}],
			sectId: 2, sectName: 'Fire 1', vals [{
				
			}],
			sectId: 3, sectName: 'Fire 2', vals [{
				
			}],
			sectId: 4, sectName: 'Fire 3', vals [{
				
			}],
			sectId: 5, sectName: 'Cloak 2', vals [{
				
			}],
			sectId: 6, sectName: 'Skull', vals [{
				
			}],
			sectId: 7, sectName: 'Uneditables', vals [{
				
			}]
		}]
		
	}, {
		charId: 6,
		charName: 'Maypul',
		source: img6,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
				
			}],
			sectId: 1, sectName: 'Belly', vals [{
				
			}],
			sectId: 2, sectName: 'Leaf', vals [{
				
			}],
			sectId: 3, sectName: 'Marks', vals [{
				
			}],
			sectId: 4, sectName: 'Vines', vals [{
				
			}],
			sectId: 5, sectName: 'Uneditables', vals [{
				
			}]
		}]
	}, {
		charId: 7
		charName: 'Absa',
		source: img7,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
	
			}],
			sectId: 1, sectName: 'Hair', vals [{
	
			}],
			sectId: 2, sectName: 'Lightning', vals [{
	
			}],
			sectId: 3, sectName: 'Horns', vals [{
	
			}],
			sectId: 4, sectName: 'Belly', vals [{
	
			}],
			sectId: 5, sectName: 'Uneditables', vals [{
	
			}]
		}]
	}, {
		charId: 8
		charName: 'Etalus',
		source: img8,
		colors: [{
			sectId: 0, sectName: 'Body', vals [{
	
			}],
			sectId: 1, sectName: 'Ice', vals [{
	
			}],
			sectId: 2, sectName: 'Shading', vals [{
	
			}],
			sectId: 3, sectName: 'Uneditables', vals [{
	
			}],
		}]
	}]

	*/

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
	}, {
		id: 3,
		name: 'Kragg',
		source: img3
	}, {
		id: 4,
		name: 'Wrastor',
		source: img4
	}, {
		id: 5,
		name: 'Forsburn',
		source: img5
	}, {
		id: 6,
		name: 'Maypul',
		source: img6
	}, {
		id: 7,
		name: 'Absa',
		source: img7
	}, {
		id: 8,
		name: 'Etalus',
		source: img8
	}];

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

	$scope.colorVals = {r: 100, g: 100, b: 100, a: 255};

	$scope.allColorVals = [];

	/*
	$scope.submitVals = function(r, g, b, a) {
		var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		var data = [r, g, b, a];
		colorDefined.style.background = rgba;
		colorDefined.style.color = $scope.setTextColor(data[0], data[1], data[2]);
		
		for(var i = 0; i < data.length; i++){
			colorB[i] = parseInt(data[i]);
		}
	};
	*/

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
		$scope.colorVals.r = colorA[0];
		$scope.colorVals.g = colorA[1];
		$scope.colorVals.b = colorA[2];
		$scope.colorVals.a = colorA[3];
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
		var cWidth = c.width;
		var cHeight = c.height;
		var canvasData = ctx.getImageData(0,0,cWidth,cHeight);
		pixels = canvasData.data;
		colorB = [$scope.colorVals.r, $scope.colorVals.g, $scope.colorVals.b, $scope.colorVals.a];
		before = colorA;
		after = colorB;

		$scope.setGradient(rInput, ["rgb(" + 0 + "," + $scope.colorVals.g + "," + $scope.colorVals.b +")", "rgb(" + 255 + "," + $scope.colorVals.g + "," + $scope.colorVals.b +")"]);
		$scope.setGradient(gInput, ["rgb(" + $scope.colorVals.r + "," + 0 + "," + $scope.colorVals.b +")", "rgb(" + $scope.colorVals.r + "," + 255 + "," + $scope.colorVals.b +")"]);
		$scope.setGradient(bInput, ["rgb(" + $scope.colorVals.r + "," + $scope.colorVals.g + "," + 0 +")", "rgb(" + $scope.colorVals.r + "," + $scope.colorVals.g + "," + 255 +")"]);

		for(var i = 0, len = pixels.length; i < len; i += 4){
			if(pixels[i] == before[0] && pixels[i+1] == before[1] && pixels[i+2] == before[2]){
					pixels[i] = after[0];
					pixels[i+1] = after[1];
					pixels[i+2] = after[2];
				}
			}

			colorA = colorB;

			var rgba = 'rgba(' + colorA[0] + ',' + colorA[1] + ',' + colorA[2] + ',' + colorA[3] + ')';
			colorSelected.style.background = rgba;
			colorSelected.style.color = $scope.setTextColor(colorA[0], colorA[1], colorA[2]);
			colorSelected.textContent = rgba;

			ctx.putImageData(canvasData, 0, 0);
			$scope.allColors();
			colorDefined.style.color = $scope.setTextColor(colorB[0], colorB[1], colorB[2]);
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
		colorMsg.textContent = "There are a total of " + $scope.allColorVals.length + " colors in this image.";
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

	$scope.setGradient = function(el, steps){

		var gradientString = "linear-gradient(to right,";

		var stepSize = 100 / (steps.length - 1);

		for(var i = 0; i < steps.length; i++) {
			gradientString += (i > 0 ? "," : "") + steps[i] + (i * stepSize) + "%";
		}
		el.style.backgroundImage = gradientString + ")";
	}

	

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