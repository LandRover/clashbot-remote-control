'use strict';

export default function defaults(ctx, next) {
    return next().then(() => {
        if ('/' === ctx.path) {
            ctx.body = 'Hello';
        }
    });
}