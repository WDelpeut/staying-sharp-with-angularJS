/**
* NoteWrangler Module
*
* Description
*/
angular.module('NoteWrangler').controller('UserIndexController', function(UserService, $scope){
	$scope.users = UserService.query();
});