'use strict';

import ClashBot from '../../controllers/clashbot';

export default router => {
  let clasbot = new ClashBot();
  
  router
    .get('/start',
      async ctx => ctx.body = await clasbot.start())
      
    .get('/stop',
      async ctx => ctx.body = await clasbot.stop())
      
    .get('/close',
      async ctx => ctx.body = await clasbot.close())
      
    .get('/log',
      async ctx => ctx.body = await clasbot.log())
};