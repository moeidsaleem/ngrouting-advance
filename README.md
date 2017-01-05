# ngrouting-advance
Complete AngularJS routing for making advance views using angular route.


Basically this let you make advance angular Routing using ngRoute, by passing the data and serving the data in the sub view. 

### for e.g 
you want to make a shopping website to display items. When you click one item you want this to view detailed template of the selected products.


## requirement (install via bower)
1. Angularjs 1. (angular)
2. ngRoute  (angular-route)

## How i did this!


``` js

   $locationProvider.hashPrefix('');
	$routeProvider.when('/products', {
		controller: 'homeCtrl',
		template:`
		<h2> Hello </h2>
		<div ng-repeat='x in myData'>
	    <h5>{{x.name}}</h5>
	    <button ng-click="dx()"><a href='#/products/{{x.id}}'>view </a></button>

		</div>
`
	})
	.when('/products/:id', {
		controller: 'homeCtrl',
		templateUrl:'app/views/product-template.html'

	})
	.otherwise({ redirectTo: '/products' });

```


#### For controller
``` js

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
```

### Working

Whenever i click the button , <a href="#/products/{{x.id}}"> , The key 'id' of the object is passed into location, that i catched by <b>s</b>.
Basically '/products/123' or whatever is the id is placed in s. so what i did was create a function that will remove '/products/' and just save the id i.e.'123',
and using some js fundamentals for Array, <b>s.charAt(0)</b> will fetch the starting digital of the string, and <b>s.substr(10)</b> will remove the 10 digits from the starting point.

And then just filtered my array in product-template.html by the function returning the <b> id</b>.


This is just a simple approach to making better routing. 


By
<b> Moeid Saleem Khan </b>
Team Leader,
<b><a href="http://atrixdigital.com">Atrix Digital Solutions</a></b>


