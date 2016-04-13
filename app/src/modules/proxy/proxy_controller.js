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
        
        this.ClashbotService.start().then(() => {
            console.log('RESPONSE ARRIVED');
                        
            console.log(arguments);
        });
    }
    
    stop() {
        console.log('STOPP');
        
        this.ClashbotService.start().then(() => {
            console.log('RESPONSE ARRIVED');
                        
            console.log(arguments);
        });
    }
    
    status() {
        console.log('STATUSS');
        
        this.ClashbotService.start().then(() => {
            console.log('RESPONSE ARRIVED');
                        
            console.log(arguments);
        });
    }
}

ProxyController.$inject = ['$scope', '$location', 'ClashbotService'];