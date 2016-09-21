app.directive('myDraggable', function() {
  return {
    restrict: "A",
    template: '<div id="allClr-{{$index}}" draggable="true" ondragstart="{{drag(event)}}" class="seriously" style="background: rgba({{color[0]}}, {{color[1]}}, {{color[2]}}, {{color[3]}}); color: {{setTextColor(color[0], color[1], color[2])}};">rgba {{color}}</div>',
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

      element.addEventListener("dragstart", scope.handleDragStart, false);
      element.addEventListener("dragenter", scope.handleDragEnter, false);
      element.addEventListener("dragleave", scope.handleDragLeave, false);
      element.addEventListener("dragend", scope.handleDragEnd, false);
      

    }
  };
});
