import angular from 'angular';

export default class FacebookController {
    constructor($scope, FacebookService) {
        this.$scope = $scope;
        this.FacebookService = FacebookService;
        
        this.setLogin(false);

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
                this.setLogin(true);
                this.$scope.welcomeMsg = 'Welcome ' + response.name;
            },
            err => {
                this.$scope.welcomeMsg = 'Please log in';
            });
        
    }
    
    
    setLogin(isLoggedIn) {
        this.$scope.isLoggedIn = isLoggedIn;
        
        return this;
    }
}

FacebookController.$inject = ['$scope', 'FacebookService'];