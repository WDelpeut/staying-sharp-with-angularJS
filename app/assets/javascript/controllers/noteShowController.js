/**
*  Module
*
* Description
*/
angular.module('NoteWrangler').controller('NoteShowController', function(NoteService, $scope, $routeParams, $location){
	$scope.note = NoteService.get({id: $routeParams.id});

	$scope.deleteNote = function(note){
		note.$remove().then(function(){
			$location.path("/notes");
		});
	}
});