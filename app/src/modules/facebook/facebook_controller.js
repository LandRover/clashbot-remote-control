import angular from 'angular';

export default class FacebookController {
    constructor($scope, FacebookService) {
        this.$scope = $scope;
        this.FacebookService = FacebookService;
        
        $scope.isLoggedIn = false;
        
        $scope.login = () => {
            FacebookService.login().then(() => {
                this.refresh();
            });
        };

        this.refresh();
    }
    
    
    refresh() {
        this.FacebookService.me().then(
            response => {
                this.$scope.welcomeMsg = 'Welcome ' + response.name;
                this.$scope.isLoggedIn = true;
            },
            err => {
                this.$scope.welcomeMsg = 'Please log in';
            });
        
    }
}

FacebookController.$inject = ['$scope', 'FacebookService'];