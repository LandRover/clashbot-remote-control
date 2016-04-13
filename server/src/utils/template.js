'use strict';

class Template {
    constructor() {
        
    }
    
    
    bake(template, obj) {
      let keys = Object.keys(obj);
      let func = Function(...keys, "return `" + template + "`;");
    
      return func(...keys.map(k => obj[k]));
    }
}

export default new Template();