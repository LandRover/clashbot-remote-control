let moduleName = 'app.controllers';

import angular from 'angular';
import UserController from './users/user_controller';


angular.module(moduleName, [])
    .controller('UserController', UserController)
    ;

export default moduleName;