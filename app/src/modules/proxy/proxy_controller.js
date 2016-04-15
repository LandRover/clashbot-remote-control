import angular from 'angular';

export default class ProxyController {
    constructor($scope, $location, ClashbotService) {
        this.$scope = $scope;
        this.$location = $location;
        this.ClashbotService = ClashbotService;
        
        this.dispatcher();
    }
    
    
    dispatcher() {
        let method = this.$location.$$path.split('/')[2];
        
        if ('function' !== typeof(this[method])) {
            console.log(method + ' not found.');
            return false;
        }
        
        return this[method]();
    }
    
    
    start() {
        console.log('STARTT');
        
        this.ClashbotService.start().then(response => {
            console.log('RESPONSE ARRIVED');
                        
            console.log(response);
        });
    }
    
    stop() {
        console.log('STOPP');
        
        this.ClashbotService.stop().then(response => {
            console.log('RESPONSE ARRIVED');
                        
            console.log(response);
        });
    }
}

ProxyController.$inject = ['$scope', '$location', 'ClashbotService'];