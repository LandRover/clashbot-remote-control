import angular from 'angular';

export default class FacebookController {
    constructor($scope, $facebook) {
        this.$scope = $scope;
        this.$facebook = $facebook;
        
        $scope.isLoggedIn = false;
        
        $scope.login = () => {
            $facebook.login().then(() => {
                this.refresh();
            });
        };

        this.refresh();
    }
    
    
    refresh() {
        this.$facebook.api('/me').then(
            response => {
                this.$scope.welcomeMsg = 'Welcome ' + response.name;
                this.$scope.isLoggedIn = true;
            },
            err => {
                this.$scope.welcomeMsg = 'Please log in';
            });
        
    }
}

FacebookController.$inject = ['$scope', '$facebook'];