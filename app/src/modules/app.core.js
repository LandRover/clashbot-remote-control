let moduleName = 'app.core';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import ngAria from 'angular-aria';
import ngRoute from 'angular-route';
import angularLoadingBar from 'angular-loading-bar';

export default angular
    .module(moduleName, [
        'ngRoute',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'angular-loading-bar',
    ]);