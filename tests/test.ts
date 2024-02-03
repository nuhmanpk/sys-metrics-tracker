// test.ts
import {
    getSystemInformation,
    getSystemUUID,
    getBIOS
  } from '../src/general';
  
  async function runTests() {
    try {
      // Test System Information
      const data = await getBIOS();
      console.log('System Information:', data);
    } catch (error) {
      console.error('Error running tests:', error);
    }
  }
  
  // Run the tests
  runTests();
  