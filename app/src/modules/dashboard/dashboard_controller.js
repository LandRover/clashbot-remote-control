import angular from 'angular';

const text = {
    'true': 'Im is running.. your donations are on their way',
    'false': 'Im is NOT running.. you may start me.'
};

export default class DashboardController {
    constructor($scope, FacebookService, ClashbotService) {
        this.$scope = $scope;
        this.FacebookService = FacebookService;
        this.ClashbotService = ClashbotService;

        this.checkStatus();
    }
    
    
    checkStatus() {
        this.$scope.remoteAppStatus = 'Checking status...';
        this.$scope.loadingProgress = true;
        
        this.ClashbotService.isStarted().then(response => {
            this.$scope.loadingProgress = false;
            this.$scope.remoteAppStatus = text[response.data];
            
        });
    }
}

DashboardController.$inject = ['$scope', 'FacebookService', 'ClashbotService'];