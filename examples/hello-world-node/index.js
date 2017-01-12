/* eslint-env node */

// To run the example:
//
// $ cd [project-root]
// $ cd examples/hello-world-node
// $ node index.js
//

const sharetribe = require('../../build/sharetribe-sdk-node').default;

/* eslint no-console: "off" */
sharetribe()
  .then(res => console.log(res.data.map(user => [user.name, user.username, user.email].join(', ')).join('\n')));
