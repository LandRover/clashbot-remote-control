import angular from 'angular';

export default class ClashbotService {

    constructor($http) {
        this.$http = $http;
    }
    
    
    start() {
        return this._api('start');
    }
    
    
    stop() {
        return this._api('stop');
    }
    
    
    close() {
        return this._api('close');
    }
    
    
    is_started() {
        return this._api('is_started');
    }
    
    
    is_running() {
        return this._api('is_running');
    }
    
    
    _api(method) {
        return this.$http({
            method: 'GET',
            url: '/api/' + method
        });
    }
}

ClashbotService.$inject = ['$http'];