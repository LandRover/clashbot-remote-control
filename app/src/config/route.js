export default function routeConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/html/dashboard.html'
        })
        
        .when('/:folder/:tpl', {
            templateUrl: attr => 'assets/html/' + attr.folder + '/' + attr.tpl + '.html'
        })
        
        .when('/:tpl', {
            templateUrl: attr => 'assets/html/' + attr.tpl + '.html'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}
 
routeConfig.$inject = ['$routeProvider'];