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
        this.$scope.status = 'checking status... please wait.'
        this.$scope.loadingProgress = true;
        
        this.ClashbotService.status().then(response => {
            this.$scope.loadingProgress = false;
            
            this.$scope.status = text[response];
            
        });
    }
}

DashboardController.$inject = ['$scope', 'FacebookService', 'ClashbotService'];