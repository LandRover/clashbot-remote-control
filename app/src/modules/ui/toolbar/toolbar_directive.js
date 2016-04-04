import ToolbarHTML from './view/toolbar.html';

export default class ToolbarDirective {
    constructor() {
        this.replace = true;
        this.template = ToolbarHTML;
        this.restrict = 'E';
        this.transclude = true;
        
        this.scope = {
            name: '@'
        };
        
        this.controller = 'ToolbarController';
    }
    
    link($scope, element, attrs, linkCtrl) {
        //this.$scope.isSelected = function() {
        //    return linkCtrl.isSelected(attrs.href);
        //};
    }
}

ToolbarDirective.$inject = [];