import angular from 'angular';

export default class MenuService {
    constructor($q) {
        this.$q = $q;
        
        this.menuList = [
            {
                id: 'dashboard',
                url: '#/',
                name: 'Dashboard',
                avatar: 'svg-6',
                content: 'Dashboard and quick status',
                level: 1
            },
            {
                id: 'start',
                url: '#/proxy/start',
                name: 'Start Bot',
                avatar: 'svg-2',
                content: 'Starts all bots',
                level: 1
            },
            {
                id: 'stop',
                url: '#/proxy/stop',
                name: 'Stop Bot',
                avatar: 'svg-3',
                content: 'Stops all bot',
                level: 1
            },
            {
                id: 'donations',
                url: '#/proxy/donations',
                name: 'Donations List',
                avatar: 'svg-4',
                content: 'All possible donation keywords and baraks defaults',
                level: 1
            },
            {
                id: 'roaster',
                url: '#/proxy/roaster',
                name: 'Baraks Status',
                avatar: 'svg-5',
                content: 'Current baraks status',
                level: 1
            }
        ];
    }
    
    
    loadMenuItems() {
        // Simulate async nature of real remote calls
        return this.$q.when(this.menuList);
    }
}

MenuService.$inject = ['$q'];