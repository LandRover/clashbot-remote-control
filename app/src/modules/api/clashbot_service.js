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
    
    
    is_started() {
        return this._api('is_started');
    }
    
    
    is_running() {
        return this._api('is_running');
    }
    
    
    _api(method) {
        console.log(['sending', method]);
        
        return this.$http({
            method: 'GET',
            url: '/proxy/' + method,
            data: {
                id: this.FacebookService.getFBUserID()
            }
        });
    }
}

ClashbotService.$inject = ['$http', 'FacebookService'];