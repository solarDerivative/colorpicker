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

hInput = document.getElementById("h");
sInput = document.getElementById("s");
vInput = document.getElementById("v");

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
var colorC;

function hsv(h, s, v) {
	return "hsv(" + h + "," + s + "%," + v +"%)";
}

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

	$scope.rgbVals = {r: 100, g: 100, b: 100, a: 255};
	colorC = $scope.rgbToHsv($scope.rgbVals.r.value, $scope.rgbVals.g.value, $scope.rgbVals.b.value);
	$scope.hsvVals = {h: colorC[0], s: colorC[1], v: colorC[2]};

	$scope.allrgbVals = [];

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
		$scope.rgbVals.r = colorA[0];
		$scope.rgbVals.g = colorA[1];
		$scope.rgbVals.b = colorA[2];
		$scope.rgbVals.a = colorA[3];
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
		colorB = [$scope.rgbVals.r, $scope.rgbVals.g, $scope.rgbVals.b, $scope.rgbVals.a];
		before = colorA;
		after = colorB;

		$scope.setGradient(rInput, ["rgb(" + 0 + "," + $scope.rgbVals.g + "," + $scope.rgbVals.b +")", "rgb(" + 255 + "," + $scope.rgbVals.g + "," + $scope.rgbVals.b +")"]);
		$scope.setGradient(gInput, ["rgb(" + $scope.rgbVals.r + "," + 0 + "," + $scope.rgbVals.b +")", "rgb(" + $scope.rgbVals.r + "," + 255 + "," + $scope.rgbVals.b +")"]);
		$scope.setGradient(bInput, ["rgb(" + $scope.rgbVals.r + "," + $scope.rgbVals.g + "," + 0 +")", "rgb(" + $scope.rgbVals.r + "," + $scope.rgbVals.g + "," + 255 +")"]);

		$scope.setGradient(hInput, [hsv(0, sInput.value, vInput.value), hsv(60, sInput.value, vInput.value), hsv(120, sInput.value, vInput.value), hsv(180, sInput.value, vInput.value), hsv(300, sInput.value, vInput.value), hsv(360, sInput.value, vInput.value)]);
		$scope.setGradient(sInput, [hsv(hInput.value, 0, vInput.value), hsv(hInput.value, 100, vInput.value)]);
		$scope.setGradient(vInput, [hsv(hInput.value, sInput.value, 0), hsv(hInput.value, sInput.value, 50), hsv(hInput.value, sInput.value, 100)]);

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
		$scope.allrgbVals = colorArray;
		colorTotal.style.display = "block";
		colorMsg.textContent = "There are a total of " + $scope.allrgbVals.length + " colors in this image.";
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
	};

	$scope.setColorFromHsl = function() {
		rgbValues = hslToRgb(hInput.value, sInput.value, lInput.value);

			setRgbSliders(rgbValues[0], rgbValues[1], rgbValues[2]);

			setColor();
	};

	$scope.setColorFromRgb = function() {
		$scop = rgbToHsl(rInput.value, gInput.value, bInput.value);
		setHslSliders(hslValues[0], hslValues[1], hslValues[2]);

		setColor();
	};

	$scope.hsvToRgb = function(h, s, v) {
		var m1, m2, r, g, b;

		h = h / 360;
		s = s / 100;
		v = v / 100;

		m2 = v <= 0.5 ? v * (s + 1) : v + s - v * s;

		m1 = v * 2 - m2;

		r = hueToRgb(m1, m2, h + 1/3);
		g = hueToRgb(m1, m2, h);
		b = hueToRgb(m1, m2, h - 1/3);

		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	};

	$scope.hueToRgb = function(m1,m2, h) {
		if(h < 0){
			h = h + 1;
		} else if (h > 1) {
			h = h -1;
		}

		if(h*6 < 1) {
			return m1 + (m2 - m1) * h * 6;
		} else if (h * 2 < 1){
			return m2;
		} else if (h * 3 < 2){
			return m1 + (m2 - m1) * (2/3 - h) * 6;
		}

		return m1;
	};

	$scope.rgbToHsv = function(r, g, b) {
		var max, min, h, s, l;

		r = r / 255;
		g = g / 255;
		b = b / 255;
		max = Math.max(r, g, b);
		min = Math.min(r, g, b);

		v = (min + max) / 2;

		diff = max - min;

		if (diff = 0) {
			s = 0;
			h = 0;
		} else {
			if (v > 0.5) {
				s = diff / (2 - min - max);
			} else {
				s = diff / (max + min);
			}

			switch(max) {
				case r:
					h = (g - b) / diff + (g < b ? 6 : 0);
					break;
				case g:
					h = (g - b) / diff + 2;
					break;
				case b:
					h = (r - g) / diff + 4;
					break;
			}
		}

		return [Math.round(h * 60), Math.round(s * 100), Math.round(1 * 100)];
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