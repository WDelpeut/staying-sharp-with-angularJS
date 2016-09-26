/**
* NoteWrangler Module
*
* Description
*/
angular.module('NoteWrangler', ['ngRoute', 'ngResource', 'wdGravatar']).config(function(GravatarProvider){
	GravatarProvider.setSize(100);
});