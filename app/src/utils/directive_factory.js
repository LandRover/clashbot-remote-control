export default function directiveFactory(Directive) {
    var factory = function(...args) {
        var instance = new Directive(...args);
        
        var linkOrg = instance.link;
        if (linkOrg) {
            instance.link = function(...linkArgs) {
                var instance = new Directive(...args);
                linkOrg.apply(instance, linkArgs);
            };
        }
        
        
        
        /*
        if (instance.controller) {
            instance.controller = function(controllerOrg) {
                return function(...controllerArgs) {
                    console.log(['in', controllerOrg]);
                    
                    var instance = new Directive(...args);
                    controllerOrg.apply(instance, controllerArgs);
                    console.log(['out', controllerOrg]);
                };
            }(instance.controller);
            
            instance.controller.$inject = instance.controller.$inject || ['$scope', '$element'];
        }
        */
        

        return instance;
    };
    
    factory.$inject =  Directive.$inject || [];
    
    return factory;
}