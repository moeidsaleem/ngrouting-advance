

app.config(function ($routeProvider,$locationProvider) {

 
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

	
});