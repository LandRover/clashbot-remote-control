import angular from 'angular';

import run from './config/run';
import route from './config/route';
import animate from './config/animate';
import icons from './config/icons';
import facebook from './config/facebook';
import exception from './config/exception';
import noSpace from './filters/nospace';

import appCore from './modules/app.core';
import appServices from './modules/app.services';
import appControllers from './modules/app.controllers';
import appDirectives from './modules/app.directives';

let appMain = 'app';

export default angular
    .module(appMain, [
        /**
         * Core componenets init
         */
        `${appMain}.core`,
        
        
        /**
         * Services componenets init
         */
        `${appMain}.services`,


        /**
         * Services componenets init
         */
        `${appMain}.controllers`,


        /**
         * Services componenets init
         */
        `${appMain}.directives`,
    ])
    
    // Config elements
    .config(exception)
    .config(animate)
    .config(facebook)
    .config(route)
    .config(icons)
    
    // filters
    .filter('nospace', noSpace)
    
    // RUNN!
    .run(run);