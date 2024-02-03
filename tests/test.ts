// test.ts
import {
    getSystemInformation,
    getSystemUUID,
    getBIOS,
    getCpuSpeed,
    getCurrentLoad,
    getFullLoad,
    getProcesses,
    getMysqlServices,
    getCpuInformation
  } from '../src/general';

  import {
    calculateCurrentCpuLoad,
    calculateCurrentMemoryLoad,
    calculateCpuCoreLoads,
    calculateNetworkRates,
  } from '../src/utils'
  
  async function runTests() {
    try {
      // stats

      const data = setInterval(async ()=>{
        let res = await calculateNetworkRates()
        console.log(res)
        // let res1 = await calculateCurrentCpuLoad()
        // console.log(res1)
      },3000);

      // general

      // let data = await getCpuInformation()
      // console.log(data)
      
    } catch (error) {
      console.error('Error running tests:', error);
    }
  }
  
  // Run the tests
  runTests();
  