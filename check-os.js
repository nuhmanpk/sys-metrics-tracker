const { execSync } = require('child_process');
const os = require('os');

const isMacOS = os.platform() === 'darwin';

if (isMacOS) {
  try {
    execSync('npm install osx-temperature-sensor');
  } catch (error) {
    console.error('Error installing osx-temperature-sensor:', error.message);
    process.exit(1);
  }
}