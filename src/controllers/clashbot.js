'use strict';

import Autoit from '../utils/autoit';

class Clasbot {
    constructor() {
        
    }
    
    
    isRunning() {
        console.log('STARTING PROMISE??');
        
        return new Promise((resolve, reject) => {
            Autoit.run('start').then(data => {
                console.log('DONE??');
                resolve(data);
            });
        });
    }
}

export default Clasbot;