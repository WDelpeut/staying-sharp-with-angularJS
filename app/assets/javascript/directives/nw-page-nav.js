/**
*  Module
*
* Description
*/
angular.module('NoteWrangler').directive('nwPageNav', function(){
	return {
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/nw-page-nav.html",
		controller: function($scope, $location){
			$scope.currentPage = function(name) {
				return new RegExp("/" + name + "($|/)").test($location.path());
			};
		}
	};
});