'use strict';

import RemoteAutoit from '../../controllers/remote_autoit';

export default router => {
  let remoteAutoIt = new RemoteAutoit();
  
  router
    .get('/proxy/start',
      async ctx => ctx.body = await remoteAutoIt.start())
      
    .get('/proxy/stop',
      async ctx => ctx.body = await remoteAutoIt.stop())
      
    .get('/proxy/close',
      async ctx => ctx.body = await remoteAutoIt.close())
};