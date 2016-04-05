let moduleName = 'app.services';

import angular from 'angular';
import MenuService from './ui/menu/menu_service';
import FacebookService from './facebook/facebook_service';
import ClashbotService from './api/clashbot_service';


angular.module(moduleName, [])
    .service('MenuService', MenuService)
    .service('FacebookService', FacebookService)
    .service('ClashbotService', ClashbotService)
    ;

export default moduleName;