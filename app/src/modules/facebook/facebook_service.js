import angular from 'angular';

export default class FacebookService {

    constructor($facebook) {
        this.$facebook = $facebook;
    }
    
    
    me() {
        return this.$facebook.api('/me');
    }
    
    
    login() {
        return this.$facebook.login();
    }
}

FacebookService.$inject = ['$facebook'];