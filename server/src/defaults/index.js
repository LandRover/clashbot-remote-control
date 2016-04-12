'use strict';

const fs = require('fs'),
      indexPath = __dirname + '/../../../app/index.html';

export default function defaults(ctx, next) {
    let index = fs.readFileSync(indexPath);

    return next().then(() => {
        if ('/' === ctx.path) {
            ctx.body = index.toString();
        }
    });
}