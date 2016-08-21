/**
*  Module
*
* Description
*/
angular.module('NoteWrangler').controller('UserShowController', function(UserService, $scope, $routeParams){
	$scope.user = UserService.get({id: $routeParams.id});
});