import angular from 'angular';

export default class DashboardController {
    constructor($scope, FacebookService) {
        this.$scope = $scope;
        this.FacebookService = FacebookService;
    }
}

DashboardController.$inject = ['$scope', 'FacebookService'];