import angular from 'angular';

export default class ClashbotService {

    constructor($http) {
        this.$http = $http;
    }
    
    
    start() {
        
    }
    
    
    stop() {
        
    }
    
    
    close() {
        
    }
    
    
    is_started() {
        
    }
    
    
    is_running() {
        
    }
    
    
    _api() {
        return this.$http();
    }
}

ClashbotService.$inject = ['$http'];