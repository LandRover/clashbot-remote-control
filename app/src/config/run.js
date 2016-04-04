import AppDefinitions from '../modules/app.definitions';
import fbInit from '../modules/facebook/fb_init';

export default function RunConfig($rootScope) {
     $rootScope.APP = AppDefinitions;
     fbInit();
}

RunConfig.$inject = ['$rootScope'];