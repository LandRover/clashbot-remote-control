'use strict';

export default router => {
  router
    .get('/proxy/start',
      async ctx => ctx.body = 'proxy start')
      
    .get('/proxy/stop',
      async ctx => ctx.body = 'proxy stop')
      
    .get('/proxy/close',
      async ctx => ctx.body = 'proxy close')
};