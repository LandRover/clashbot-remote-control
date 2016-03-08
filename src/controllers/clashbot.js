'use strict';

import Autoit from '../utils/autoit';

class Clasbot {
    constructor() {
        
    }
    
    
    isRunning() {
        return new Promise((resolve, reject) => {
            Autoit.run('start').then(data => {
                resolve(data);
            });
        });
    }
}

export default Clasbot;