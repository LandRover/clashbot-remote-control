import angular from 'angular';

export default class ClashbotService {

    constructor($http) {
        this.$http = $http;
    }
    
    
    
}

ClashbotService.$inject = ['$http'];