/**
*  Module
*
* Description
*/
angular.module('NoteWrangler').controller('NoteCreateController', function($scope, NoteService, $location){
	$scope.note = new NoteService();
	$scope.isSubmitting = false;

	$scope.saveNote = function(note){
		$scope.isSubmitting = true;
		note.$save().then(function(){
			$scope.isSubmitting = false;
		}).finally(function(){
			$location.path("/notes");
		});
	}
});