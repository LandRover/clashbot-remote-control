let moduleName = 'app.controllers';

import angular from 'angular';
import UserController from './users/user_controller';
import MenuController from './ui/menu/menu_controller';
import ToolbarController from './ui/toolbar/toolbar_controller';
import SidebarController from './ui/sidebar/sidebar_controller';
import FacebookController from './facebook/facebook_controller';


angular.module(moduleName, [])
    .controller('FacebookController', FacebookController)
    .controller('UserController', UserController)
    .controller('ToolbarController', ToolbarController)
    .controller('SidebarController', SidebarController)
    .controller('MenuController', MenuController)
    ;

export default moduleName;