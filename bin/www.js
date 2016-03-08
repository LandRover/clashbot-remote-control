'use strict';

import app from '../src';

const port = process.env.PORT || 3000;

(async() => {
  try {
    await app.listen(port);
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.log(error);
  }
})();