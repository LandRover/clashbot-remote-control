'use strict';

import Autoit from '../utils/autoit';

class Clasbot {
    constructor() {
        
    }
    
    
    isRunning() {
        return new Promise((resolve, reject) => {
            Autoit.run('is_running').then(data => {
                console.log(data);
                resolve(data);
            });
        });
    }
}

export default Clasbot;