let moduleName = 'app.controllers';

import angular from 'angular';
import UserController from './users/user_controller';
import ToolbarController from './ui/toolbar/toolbar_controller';
import SidebarController from './ui/sidebar/sidebar_controller';


angular.module(moduleName, [])
    .controller('UserController', UserController)
    .controller('ToolbarController', ToolbarController)
    .controller('SidebarController', SidebarController)
    ;

export default moduleName;