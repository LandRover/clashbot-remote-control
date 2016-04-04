import angular from 'angular';

export default class FacebookController {
    constructor($scope, $facebook) {
        $scope.isLoggedIn = false;
        
        $scope.login = () => {
            $facebook.login().then(() => {
              refresh();
            });
        }
        
        function refresh() {
            $facebook.api('/me').then(
                response => {
                    $scope.welcomeMsg = 'Welcome ' + response.name;
                    $scope.isLoggedIn = true;
                },
                err => {
                    $scope.welcomeMsg = 'Please log in';
                });
            
        }
        
        refresh();
    }
}

FacebookController.$inject = ['$scope', '$facebook'];