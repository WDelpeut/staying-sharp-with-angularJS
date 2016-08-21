/**
* NoteWrangler Module
*
* Description
*/
angular.module('NoteWrangler').factory('UserService', function($resource){
	return $resource('/users/:id');
});