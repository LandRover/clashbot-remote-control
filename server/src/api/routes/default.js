'use strict';

export default router => {
  router
    .get('/',
      async ctx => ctx.body = await 'ab')
};