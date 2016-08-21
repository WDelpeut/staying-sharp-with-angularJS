/**
*  Module
*
* Description
*/
angular.module('NoteWrangler').controller('NoteEditController', function($scope,NoteService, $routeParams, $location){
	$scope.note = NoteService.get({id: $routeParams.id});
	$scope.isSubmitting = false;

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;

		note.$update().finally(function(){
			$scope.isSubmitting = false;
			$location.path("/notes/" + note.id);
		});
	}
});