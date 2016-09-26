/**
*  Module
*
* Description
*/
angular.module('NoteWrangler').controller('NoteEditController', function($scope, NoteService, CategoryService, UserService, $routeParams, $location){
	$scope.note = NoteService.get({id: $routeParams.id});
	$scope.isSubmitting = false;
	$scope.categories = CategoryService.query();
	$scope.users = UserService.query();

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;

		note.$update().finally(function(){
			$scope.isSubmitting = false;
			$location.path("/notes/" + note.id);
		});
	}
});