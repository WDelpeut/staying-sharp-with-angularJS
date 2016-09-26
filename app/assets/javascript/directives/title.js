// overrides default title attribute from Bootstrap

angular.module('NoteWrangler').directive('title', function($timeout) {
	return function(scope, element, attrs){
		$timeout(function(){
			$(element).tooltip();
		});
		// any time the directive is broken down this event is called. In order to clean up afterwards and prevent memory leaks
		scope.$on('$destroy', function(){
			$(element).tooltip('destroy');
		})
	}
});