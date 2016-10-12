// http://www.w3schools.com/html/html5_draganddrop.asp
// element.addEventListener is not a function lmao? probably shouldnt be using in angular directive

app.controller('dragCtrl', ['$scope', function($scope) {

	//placeholder/debug variable to hold a target class name
	//$scope.DBclassName = "";

  $scope.dropboxHeight = 100;

	$scope.allowDrop = function(ev) {
		ev.preventDefault();
	};

	$scope.drag = function(ev) {
		ev.dataTransfer.setData('Text', ev.target.id);
	};

	$scope.drop = function(ev) {
		if($scope.dropZoneIsValid(ev)){
      $scope.dropboxHeight += 50;
			console.log(ev.target.id);
			ev.preventDefault();
			var data = ev.dataTransfer.getData('Text');
			ev.target.appendChild(document.getElementById(data));
		}
	};

	$scope.handleDragStart = function(ev) {
    	this.style.opacity = '0.8';
    //e.dataTransfer.setData('text', this.innerHTML);
    };

    $scope.handleDragEnd = function(ev) {
      this.style.opacity = '1';
    };

    /*
    $scope.handleDragEnter = function(ev) {
    	console.log("DragEnter: " + ev.target.id);
    	if($scope.dropZoneIsValid(ev)){
		    ev.target.style.borderStyle = "dotted";
 		}
    };
    $scope.handleDragLeave = function(ev) {
    	if($scope.dropZoneIsValid(ev)){
    		ev.target.style.borderStyle = "solid";
      	}
    };
    */

    $scope.handleDrop = function(ev) {
      if (ev.preventDefault) {
        ev.preventDefault();
      }
      if (ev.stopPropogation) {
        ev.stopPropogation();
      }
    };

    $scope.handleDragOver = function(ev) {
    	console.log("DragOver " + ev.target.id);
      if (ev.preventDefault) {
        ev.preventDefault();
      }
      ev.dataTransfer.dropEffect = 'move';
      return false;
    };

    $scope.dropZoneIsValid = function(ev) {
    	if(ev.target.id == "dropTest"){
			return true;
		} else {
			return false;
		}
    };

}]);