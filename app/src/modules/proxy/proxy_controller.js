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
            this.$scope.loadingProgress = false;
            this.$scope.remoteAppStatus = response.data.join('<br/>');
        });
    }
    

    donations() {
        console.log('donations list');
    }
    
    
    roaster() {
        this.$scope.remoteAppStatus = 'Loading Baraks...';
        this.$scope.loadingProgress = true;
        
        this.ClashbotService.log().then(response => {
            let data = response.data.slice().reverse();
            
            this.$scope.loadingProgress = false;
            //this.$scope.remoteAppStatus = response.data.join('<br/>');
            
            let required = this._parseBuild(this._searchArr('[Build] Required:', data)),
                trained = this._parseBuild(this._searchArr('[Build] Trained:', data)),
                training = this._parseBuild(this._searchArr('[Build] Training:', data)),
                need = this._parseBuild(this._searchArr('[Build] Need:', data));
            
            this.$scope.remoteAppStatus = 
                this.arrToTable('required', 'Required', required) + '<br/><br/>' +
                this.arrToTable('trained', 'Trained', trained) + '<br/><br/>' +
                this.arrToTable('training', 'Training', training) + '<br/><br/>' +
                this.arrToTable('need', 'Need', need);
        });
    }
    
    
    _searchArr(needle, haystack) {
        for (let i = 0, len = haystack.length; i < len; i++) {
            if (-1 < haystack[i].indexOf(needle)) {
                return haystack[i];
            }
        }
        
        return false;
    }
    
    
    _parseBuild(str) {
        let input = str.substr(str.indexOf(': ') + 2);

        let troops = input.split(', '),
            output = {};
        
        for (let i = 0, len = troops.length; i < len; i++) {
            let troop = troops[i].split(' ');
            
            output[troop[1]] = Number(troop[0]);
        }
        
        return output;
    }
    
    
    arrToTable(ID, title, haystack) {
        let output = '<h2>'+ title +'</h2>';
        
        output += '<table id="'+ ID +'" class="troops">';
        
        for (let i in haystack) {
            output += '<tr>';
                output += '<td class="name">'+ i +'</td>';
                output += '<td class="count">'+ haystack[i] +'</td>';
            output += '</tr>';
        }
        
        output += '</table><br/></br>';
        
        return output;
    }
}

ProxyController.$inject = ['$scope', '$location', '$sce', 'ClashbotService'];