let moduleName = 'app.directives';

import angular from 'angular';
import directiveFactory from '../utils/directive_factory';

import ToolbarDirective from './ui/toolbar/toolbar_directive';


angular.module(moduleName, [])
    .directive('clToolbar', directiveFactory(ToolbarDirective))
    ;

export default moduleName;