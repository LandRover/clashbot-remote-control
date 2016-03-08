'use strict';

const spawn = require('child_process').spawn,
      autoit_exe = 'C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe',
      autoit_scripts = __dirname + '/../../autoit';

class Autoit {
    constructor() {
        
    }
    
    
    run(script) {
        let scriptPath = autoit_scripts + '/' script + '.au3';
        
        console.log(['DEBUG', 'running', autoit_exe, scriptPath]);
        
        let proc = spawn(autoit_exe, [scriptPath]);
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