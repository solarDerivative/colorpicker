app.directive('myDroppable', function() {
	return {
		template: '<div ondrop="{{drop(event)}}" ondragover="{{allowDrop(event)}}" class="dropTest"></div>',
		restrict : "A",
		link : function(scope, element, attrs) {

			element.css({
        		position: 'absolute',
     		});

			element.addEventListener("drop", scope.handleDrop, false);
			element.addEventListener("dragover", scope.handleDragOver, false);
			

		}
	}
});