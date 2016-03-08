'use strict';

const spawn = require('child_process').spawn,
      autoit_exe = 'C:\Program Files (x86)\AutoIt3\AutoIt3.exe';

class Autoit {
    constructor() {
        
    }
    
    
    run(script) {
        console.log(['DEBUG', 'running', autoit_exe]);
        
        let proc = spawn(autoit_exe, [script]);
        proc.stdout.setEncoding('utf8');
        
        return new Promise((resolve, reject) => {
            proc.stdout.on('data', data => {
                let str = data.toString(),
                    lines = str.split(/(\r?\n)/g);
                
                resolve(str);
            });
            
            proc.on('error', e => {
                reject(e);
            });
            
            proc.on('close', () => {
                // ended.
            });
        });
    }
}

export default new Autoit();