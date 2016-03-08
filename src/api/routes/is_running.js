'use strict';

import ClashBot from '../../controllers/clashbot';

export default router => {
  let clasbot = new ClashBot();
  
  router
    .get('/is_running',
      async ctx => ctx.body = await clasbot.isRunning().then(() => {
          return true;
      }))
};