'use strict';

const fs = require('fs'),
      indexPath = __dirname + '/../../../app/index.html';

import Template from '../utils/template';

export default function defaults(ctx, next) {
    let indexHTML = fs.readFileSync(indexPath).toString();

    let map = {
        'fbAppID': '123',
        'version': '111'
    };

    return next().then(() => {
        if ('/' === ctx.path) {
            ctx.body = Template.bake(indexHTML, map);
        }
    });
}