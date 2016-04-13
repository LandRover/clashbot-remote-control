let moduleName = 'app.controllers';

import angular from 'angular';
import MenuController from './ui/menu/menu_controller';
import ToolbarController from './ui/toolbar/toolbar_controller';
import SidebarController from './ui/sidebar/sidebar_controller';
import FacebookController from './facebook/facebook_controller';
import DashboardController from './dashboard/dashboard_controller';
import ProxyController from './proxy/proxy_controller';


angular.module(moduleName, [])
    .controller('FacebookController', FacebookController)
    .controller('DashboardController', DashboardController)
    .controller('ProxyController', ProxyController)
    .controller('ToolbarController', ToolbarController)
    .controller('SidebarController', SidebarController)
    .controller('MenuController', MenuController)
    ;

export default moduleName;