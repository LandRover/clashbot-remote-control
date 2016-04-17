'use strict';

import Autoit from '../utils/autoit';

class Clasbot {
    constructor() {
        
    }
    
    
    start() {
        return this._execute('start');
    }
    
    
    log() {
        return new Promise((resolve, reject) => {
            Autoit.run('log').then(data => {
                data = data.replace('\r', '');
                let rows = data..split('\n');
                
                console.log(rows);
                resolve(rows);
            });
        });
    }
    
    
    stop() {
        return this._execute('stop');
    }
    
    
    close() {
        return this._execute('close');
    }
    
    
    isRunning() {
        return this._execute('is_running');
    }
    
    
    isStarted() {
        return this._execute('is_started');
    }
    
    
    _execute(method) {
        return new Promise((resolve, reject) => {
            Autoit.run(method).then(data => {
                resolve(data);
            });
        });
    }
}

export default Clasbot;