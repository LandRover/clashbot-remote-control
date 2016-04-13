export default function routeConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/html/dashboard.html'
        })
        
        .when('/proxy/:action', {
            templateUrl: attr => 'assets/html/proxy.html'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}
 
routeConfig.$inject = ['$routeProvider'];