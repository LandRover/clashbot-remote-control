let moduleName = 'app.services';

import angular from 'angular';
import UserService from './users/user_service';

angular.module(moduleName, [])
    .service('UserService', UserService)
    ;

export default moduleName;