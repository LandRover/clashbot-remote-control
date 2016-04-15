import angular from 'angular';

export default class ClashbotService {

    constructor($http, FacebookService) {
        this.$http = $http;
        this.FacebookService = FacebookService;
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
    
    
    isStarted() {
        return this._api('is_started');
    }
    
    
    isRunning() {
        return this._api('is_running');
    }
    
    
    _api(method) {
        console.log(['sending', method]);
        
        return this.$http({
            method: 'GET',
            url: '/api/proxy/' + method,
            params: {
                id: this.FacebookService.getFBUserID()
            }
        });
    }
}

ClashbotService.$inject = ['$http', 'FacebookService'];