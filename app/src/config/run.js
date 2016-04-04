import AppDefinitions from '../modules/app.definitions';
import fbInit from '../utils/facebook';

export default function RunConfig($rootScope) {
     $rootScope.APP = AppDefinitions;
     fbInit();
}

RunConfig.$inject = ['$rootScope'];