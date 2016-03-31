'use strict';

import ClashBot from '../../controllers/clashbot';
import {apiPrefix} from '../config';

export default router => {
  let clasbot = new ClashBot();
  
  router
    .get(apiPrefix + '/start',
      async ctx => ctx.body = await clasbot.start())
      
    .get(apiPrefix + '/stop',
      async ctx => ctx.body = await clasbot.stop())
      
    .get(apiPrefix + '/close',
      async ctx => ctx.body = await clasbot.close())
};