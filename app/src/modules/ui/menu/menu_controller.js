import angular from 'angular';

export default class MenuController {
    constructor(UserService, FacebookService, $scope, $mdSidenav, $mdBottomSheet, $log) {
        this.$log = $log;
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
        this.FacebookService = FacebookService;

        this.$scope.users = [];
        this.$scope.selected = null;
        this.$scope.selectUser = this.selectUser.bind(this);
        this.$scope.toggleUsersList = this.toggleUsersList.bind(this);
        this.$scope.isLoggedIn = this.isLoggedIn.bind(this);

        // Load all registered users
        UserService
            .loadAllUsers()
            .then(users => {
                this.$scope.users = users;
                this.$scope.selected = users[0];
            });
    }
    
    
    isLoggedIn() {
        return this.FacebookService.isLoggedIn();
    }
    
    /**
     * Select the current avatars
     * @param menuId
     */
    selectUser(user) {
        this.$scope.selected = angular.isNumber(user) ? this.$scope.users[user] : user;
        
        return this;
    }
    
    
    /**
     * Hide or Show the 'left' sideNav area
     */
    toggleUsersList() {
        this.$mdSidenav('left').toggle();
        
        return this;
    }
    
    
    /**
     * Show the Contact view in the bottom sheet
     */
    makeContact(selectedUser) {
        this.$mdBottomSheet.show({
            controllerAs: 'cp',
            templateUrl: './src/users/view/contact_sheet.html',
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

MenuController.$inject = ['UserService', 'FacebookService', '$scope', '$mdSidenav', '$mdBottomSheet', '$log'];