/**
* NoteWrangler Module
*
* Description
*/
angular.module('NoteWrangler').factory('NoteService', function($resource){
	return $resource('/notes/:id', {id: "@id"}, {
		update: {
			method: "PUT"
		}
	});
})