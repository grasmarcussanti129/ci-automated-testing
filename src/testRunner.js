const { spawn } = require('child_process');
const config = require('../config.json');

const runTests = () => {
  return new Promise((resolve, reject) => {
    const command = config.testFramework === 'jest' ? 'jest' : 'mocha';
    const testProcess = spawn(command, [config.testDirectory], { stdio: 'inherit' });

    testProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Tests completed successfully.');
        resolve();
      } else {
        console.error(`Tests failed with code: ${code}`);
        reject(new Error('Test execution failed'));
      }
    });
  });
};

module.exports = { runTests };