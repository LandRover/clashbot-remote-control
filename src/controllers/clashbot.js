'use strict';

import Autoit from '../utils/autoit';

class Clasbot {
    constructor() {
        
    }
    
    
    isRunning() {
        return new Promise((resolve, reject) => {
            Autoit.run('is_running').then(data => {
                resolve(data);
            });
        });
    }
    
    
    isStarted() {
        return new Promise((resolve, reject) => {
            Autoit.run('is_started').then(data => {
                resolve(data);
            });
        });
    }
}

export default Clasbot;