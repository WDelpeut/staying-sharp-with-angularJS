/**
* NoteWrangler lefactory('categoryService', function($resource) {
	
	return $resource('/categories/:id');})
*
* Description
*/
angular.module('NoteWrangler').factory('CategoryService', function($resource) {
	return $resource('/categories/:id');
})