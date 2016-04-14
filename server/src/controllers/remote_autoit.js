'use strict';

import Request from 'request-promise';
import Config from '../config';

class RemoteAutoit {
    constructor() {}
    
    
    start() {
        return this._execute('start');
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
        return Request(Config.autoit + method);
    }
}

export default RemoteAutoit;