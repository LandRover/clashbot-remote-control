let moduleName = 'app.services';

import angular from 'angular';
import UserService from './users/user_service';
import FacebookService from './facebook/facebook_service';
import ClashbotService from './api/clashbot_service';


angular.module(moduleName, [])
    .service('UserService', UserService)
    .service('FacebookService', FacebookService)
    .service('ClashbotService', ClashbotService)
    ;

export default moduleName;