'use strict';

import ClashBot from '../../controllers/clashbot';
import {apiPrefix} from '../config';

export default router => {
  let clasbot = new ClashBot();
  
  router
    .get(apiPrefix + '/is_running',
      async ctx => ctx.body = await clasbot.isRunning())
      
    .get(apiPrefix + '/is_started',
      async ctx => ctx.body = await clasbot.isStarted())
};