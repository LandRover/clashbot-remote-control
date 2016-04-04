export default function routeConfig($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/assets/html/dashboard.html'
        })
        
        .when('/:folder/:tpl', {
            templateUrl: attr => 'src/assets/html/' + attr.folder + '/' + attr.tpl + '.html'
        })
        
        .when('/:tpl', {
            templateUrl: attr => 'src/assets/html/' + attr.tpl + '.html'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}
 
routeConfig.$inject = ['$routeProvider'];