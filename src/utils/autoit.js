'use strict';

const spawn = require('child_process').spawn,
      autoit_exe = 'c:\\progra~2\\AutoIt3\\AutoIt3.exe',
      autoit_scripts = __dirname + '/../../autoit/',
      fs = require('fs');

class Autoit {
    constructor() {
        
    }
    
    
    run(script) {
        let scriptPath = autoit_scripts + script + '.au3',
            outputBuffer = '';
        
        
        console.log(['DEBUG', 'running', autoit_exe, __dirname, scriptPath]);
        
        return new Promise((resolve, reject) => {
            let child = spawn(autoit_exe, [scriptPath]);

            child.stdout.on('data', data => {
                outputBuffer += data;
            });
            
            child.on('error', e => {
                reject(e);
            });
            
            child.on('close', () => {
                resolve(outputBuffer);
            });
        });
    }
}

export default new Autoit();