var domElement = document.getElementById('colorTotal');
app.directive('myDraggable', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/draggableTemp.html',
    link: function(scope, element, attr){

      /*
      element.css({
        position: 'relative'
      });

      var startX = 0;
      var startY = 0;
      var x = 0;
      var y = 0;

      element.on('mousedown', function(event) {
        console.log("mouse down...?");
        event.preventDefault();
        startX = event.screenX - x;
        startY = event.screenY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.screenY - startY;
        x = event.screenX - startX;

        element.css({
          top: y + 'px',
          left: x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
      */

      element[0].addEventListener("dragstart", scope.handleDragStart, false);
      /*element[0].addEventListener("dragenter", scope.handleDragEnter, false);
      element[0].addEventListener("dragleave", scope.handleDragLeave, false);*/
      element[0].addEventListener("dragend", scope.handleDragEnd, false);
      

    }
  };
});
