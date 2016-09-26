/**
* NoteWrangler Module
*
* Description
*/
angular.module('NoteWrangler').controller('NoteIndexController', function(NoteService, $scope){
	$scope.notes = NoteService.query();
	$scope.search = {};
});