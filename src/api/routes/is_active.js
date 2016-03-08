'use strict';

import ClashBot from '../../controllers/clashbot';

export default router => {
  let clasbot = new ClashBot();
  
  router
    .get('/is_active',
      async ctx => ctx.body = await clasbot.isRunning({}))
};