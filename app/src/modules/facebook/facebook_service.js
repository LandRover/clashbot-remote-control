import angular from 'angular';

export default class FacebookService {

    constructor($facebook) {
        this.$facebook = $facebook;
        this._setLogin(true);
    }
    
    
    me() {
        let me = this.$facebook.api('/me');
        
        me.then(response => {
            this._setLogin(true);
            console.log('Logged in as ' + response.name);
        }, err => {
            console.log('Please log in');
        });
        
        return me;
    }
    
    
    login() {
        return this.$facebook.login();
    }
    
    
    isLoggedIn() {
        return true === this.loggedIn;
    }
    
    
    _setLogin(isLoggedIn) {
        this.loggedIn = isLoggedIn;
        
        return this;
    }
}

FacebookService.$inject = ['$facebook'];