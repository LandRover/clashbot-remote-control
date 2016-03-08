'use strict';

import Autoit from '../utils/autoit';

class Clasbot {
    constructor() {
        
    }
    
    
    isRunning() {
        console.log('STARTING PROMISE??11111');
        
        return new Promise((resolve, reject) => {
            console.log('STARTING PROMISE?2222222222222222222?');
            
            Autoit.run('is_running').then(data => {
                console.log(data);
                resolve(data);
            });
        });
    }
}

export default Clasbot;