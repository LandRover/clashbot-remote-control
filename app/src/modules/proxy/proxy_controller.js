import angular from 'angular';

export default class ProxyController {
    constructor($scope, FacebookService) {
        this.$scope = $scope;
        this.FacebookService = FacebookService;
    }
}

ProxyController.$inject = ['$scope', 'FacebookService'];