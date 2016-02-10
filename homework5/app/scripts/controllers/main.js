'use strict';

/**
 * Controller of the homework5App
 */


 // ../../../tutorials.json

/*
angular.module('homework5App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

angular.module('homework5App')
  .controller('MainCtrl', ['$http', function($http){
  	//this.tutInfo =[];
    var main = this;
  	$http.get('scripts/controllers/tutorials.json').success(function(data){
      main.tutInfo=data;
    });
  }]);