'use strict';

export default router => {
  router
    .get('/is_active',
      async ctx => ctx.body = await Active.find({}))
};