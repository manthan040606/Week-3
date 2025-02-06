// const { log } = require('console');
// const fs = require('fs')
// const http = require('http')
// const os = require('os')
// const cpu = require('cpu')

// fs.readFile('log.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// const data = `OS Type : ${os.type()}`
// const data1 = `OS Total-Memory : ${os.totalmem()}`
// const data2 = `OS FreeMemory : ${os.freemem()}`


// const cpus = os.cpus();  
// const cpuInfo = cpus.map(cpu => {
//   return `Model: ${cpu.model}, Speed: ${cpu.speed} MHz, Cores: ${cpu.times.user}`;
// }).join('\n');
// const data3 = `OS CPUS:${cpuInfo}`


// const arr = [data,data1,data2,data3]

// fs.writeFile('log.txt',JSON.stringify(arr,null,2),"utf-8",(err)=>{ 
//     if(err) throw err;
// })



const os = require('os');
const fs = require('fs');
const path = require('path')
// Fetching system information
const platform = os.platform();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const cpuDetails = os.cpus();
// Displaying system information on the console
console.log(`Platform: ${platform}`);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`CPU: ${JSON.stringify(cpuDetails, null, 2)}`); // Using JSON.stringify for better formatting
const filepath = path.join(__dirname, 'logs', 'system-info.txt');
// Constructing the system information string
const sysinfo = `System Information
Platform: ${platform}
Total Memory: ${totalMemory}
Free Memory: ${freeMemory}
CPU: ${JSON.stringify(cpuDetails, null, 2)}
`;
// Writing the system information to the log file
fs.mkdirSync(path.join(__dirname, 'logs'), { recursive: true }); // Ensure 'logs' directory exists
fs.writeFileSync(filepath, sysinfo, 'utf8');
console.log(`System information saved to ${filepath}`);

