

var app = angular.module('app', ['ngRoute']);


app.controller('homeCtrl', function ($scope,$http,$location) {
  

   $scope.myData = [{
   	id:123,
   	name:"moeid",
   	description:"lorem ipsum"
   },
   {
   	id:124,
   	name:"alina",
   	description:"lorem ipsum"
   },
   {
   	id:125,
   	name:"rabia",
   	description:"lorem ipsum"
   }];

   let s = $location.path();
   $scope.d = function(){
   	while(s.charAt(0) === '/')
      s = s.substr(10);
      console.log(s);
      return s;
   }

 



  
	
});