'use strict';

import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';

import api from './api';
import defaults from './defaults';
import middleware from './middleware';


const app = new Koa();

app.use(middleware());
app.use(api());
app.use(defaults);
app.use(serve('../app/dist'));
app.use(ctx => ctx.status = 404);

export default app;