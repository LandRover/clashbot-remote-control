import angular from 'angular';

export default class FacebookService {

    constructor($facebook) {
        this.$facebook = $facebook;
        this._setLogin(false);
        this.user = null;
    }
    
    
    me() {
        let me = this.$facebook.api('/me');
        
        me.then(response => {
            this._setLogin(true);
            this.user = response;
            console.log('Logged in as ' + response.name);
        }, err => {
            console.log('Please log in');
        });
        
        return me;
    }
    
    getFBUserID() {
        if (null === this.user) {
            console.log('please login first');
            
            return 0;
        }
        
        return this.user.id;
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