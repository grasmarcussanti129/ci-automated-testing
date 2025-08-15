const { runTests } = require('./testRunner');

const start = async () => {
  console.log('Starting CI Automated Testing...');
  await runTests();
};

start();
