import angular from 'angular';

export default class ToolbarController {
    constructor($scope, $mdSidenav) {
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
        
        this.$scope.toggleList = this.toggleList.bind(this);
    }
    
    toggleList() {
        this.$mdSidenav('left').toggle();
    }
    
}

ToolbarController.$inject = ['$scope', '$mdSidenav'];