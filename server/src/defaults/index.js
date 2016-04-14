'use strict';

const fs = require('fs'),
      indexPath = __dirname + '/../../../app/index.html';

import Template from '../utils/template';
import Config from '../config';

export default function defaults(ctx, next) {
    let indexHTML = fs.readFileSync(indexPath).toString();

    let map = {
        'fbAppID': Config.fb.appID,
        'version': '1.0.0'
    };

    
    if ('/' === ctx.path) {
        return ctx.body = Template.bake(indexHTML, map);
    }
    
    return next();
}