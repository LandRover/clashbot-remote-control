import angular from 'angular';

export default class ProxyController {
    constructor($scope, $location, $sce, ClashbotService) {
        this.$sce = $sce;
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
        let text = {
            'true': 'Im running, please wait for your donations for the next 15minutes',
            'false': 'Waiting on Supercell preloader, wait few moments. Checking the status again in 3 seconds'
        };
        
        this.$scope.remoteAppStatus = 'Starting the bot...';
        this.$scope.loadingProgress = true;
        
        this.ClashbotService.start().then(response => {
            let status = text[response.data];
            
            this.$scope.loadingProgress = false;
            this.$scope.remoteAppStatus = status;
            
            return response.data;
        }).then(status => {
            if ('true' === status) return;
            
            console.log('Not started completly, restartin ...');
            setTimeout(() => {
                console.log('Starting again');
                this.start();
            }, 3000);
        });
    }
    
    
    stop() {
        let text = {
            'true': 'Stopped.. ',
            'false': 'Failed to stop...'
        };
        
        this.$scope.remoteAppStatus = 'Stopping the bot...';
        this.$scope.loadingProgress = true;
        
        this.ClashbotService.stop().then(response => {
            let status = text[response.data];
            
            this.$scope.loadingProgress = false;
            this.$scope.remoteAppStatus = status;
        });
    }
    
    
    log() {
        this.$scope.remoteAppStatus = 'Getting the log';
        this.$scope.loadingProgress = true;
        
        this.ClashbotService.log().then(response => {
            console.log(response.data);
            let log = JSON.parse(response.data);
            this.$scope.loadingProgress = false;
            this.$scope.remoteAppStatus = log.join('<br/>');
        });
    }
    

    donations() {
        console.log('donations list');
    }
    
    
    roaster() {
        console.log('TBD');
    }
}

ProxyController.$inject = ['$scope', '$location', '$sce', 'ClashbotService'];