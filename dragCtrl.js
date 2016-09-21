// http://www.w3schools.com/html/html5_draganddrop.asp
// element.addEventListener is not a function lmao? probably shouldnt be using in angular directive
app.controller('dragCtrl', ['$scope', function($scope) {

	$scope.allowDrop = function(ev) {
		ev.preventDefault();
	};

	$scope.drag = function(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	};

	$scope.drop = function(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	};

	$scope.handleDragStart = function(e) {
    	this.style.opacity = '0.4';
    //e.dataTransfer.setData('text', this.innerHTML);
      e.dataTransfer.setData('text', this.id);
    };

    $scope.handleDragEnd = function(e) {
      this.style.opacity = '1';
    };

    $scope.handleDragEnter = function(e) {
      this.classList.add('over-drop-area');
    };
    $scope.handleDragLeave = function(e) {
      this.classList.remove('over-drop-area');
    };

    $scope.handleDrop = function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.stopPropogation) {
        e.stopPropogation();
      }
    };

    $scope.handleDragOver = function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'copy';
      return false;
    };

}]);