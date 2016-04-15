import angular from 'angular';

export default class MenuController {
    constructor(MenuService, FacebookService, $scope, $mdSidenav, $mdBottomSheet, $log) {
        this.$log = $log;
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
        this.FacebookService = FacebookService;

        this.$scope.actions = [];
        this.$scope.selected = null;
        this.$scope.selectAction = this.selectAction.bind(this);
        this.$scope.toggleMenuSidebar = this.toggleMenuSidebar.bind(this);
        this.$scope.isLoggedIn = this.isLoggedIn.bind(this);

        // Load all registered actions
        MenuService
            .loadMenuItems()
            .then(actions => {
                this.$scope.actions = actions;
                this.$scope.selected = actions[0];
            });
    }
    
    
    isLoggedIn() {
        return this.FacebookService.isLoggedIn();
    }
    
    
    /**
     * Select the current avatars
     * @param menuId
     */
    selectAction(user) {
        this.$scope.selected = angular.isNumber(user) ? this.$scope.actions[user] : user;
        window.location.href = '#/proxy/'+this.$scope.selected.id;
        this.toggleMenuSidebar();
        
        return this;
    }
    
    
    /**
     * Hide or Show the 'left' sideNav area
     */
    toggleMenuSidebar() {
        this.$mdSidenav('left').toggle();
        
        return this;
    }
    
    
    /**
     * Show the Contact view in the bottom sheet
     */
    makeContact(selectedUser) {
        this.$mdBottomSheet.show({
            controllerAs: 'cp',
            templateUrl: './actions/view/contact_sheet.html',
            controller: ['$mdBottomSheet', ContactSheetController],
            parent: angular.element(document.getElementById('content'))
        }).then(clickedItem => {
            this.$log.debug(clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        let ContactSheetController = $mdBottomSheet => {
          this.user = selectedUser;
          
          this.actions = [
            {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
            {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
            {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
            {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
          ];
          
          this.contactUser = action => {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet
            $mdBottomSheet.hide(action);
          };
        }
    }

}

MenuController.$inject = ['MenuService', 'FacebookService', '$scope', '$mdSidenav', '$mdBottomSheet', '$log'];