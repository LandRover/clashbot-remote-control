import angular from 'angular';

export default class SidebarController {
    constructor($element, $location, $rootScope) {
        this.$element = $element;
        this.$location = $location;
        this.$rootScope = $rootScope;
    }
    
    getName(name) {
        if (name !== undefined) {
            return name;
        }
        
        return this.$element.find('a').text().trim();
    }
    
    
    setBreadcrumb(name) {
        this.$rootScope.pageTitle = this.getName(name);
    }
    
    
    isSelected(href) {
        return this.$location.path() == href.slice(1, href.length);
    }
}

SidebarController.$inject = ['$element', '$location', '$rootScope'];