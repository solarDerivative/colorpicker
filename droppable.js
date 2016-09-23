var domElement = document.getElementById('colorTotal');
app.directive('myDroppable', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'templates/droppableTemp.html',
		link : function(scope, element, attrs) {

			element.css({
        		position: 'absolute',
     		});

			element[0].addEventListener("drop", scope.handleDrop, false);
			element[0].addEventListener("dragover", scope.handleDragOver, false);
		}
	}
});