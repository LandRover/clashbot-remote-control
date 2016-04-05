import MenuHTML from './view/menu_list.html';

export default class MenuDirective {
    constructor() {
        this.replace = true;
        this.template = MenuHTML;
        this.restrict = 'E';
        this.transclude = true;
        
        this.scope = {
            name: '@'
        };
        
        this.controller = 'MenuController';
    }
    
    link($scope, element, attrs, linkCtrl) {
        //this.$scope.isSelected = function() {
        //    return linkCtrl.isSelected(attrs.href);
        //};
    }
}

MenuDirective.$inject = [];