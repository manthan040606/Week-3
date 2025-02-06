const { log } = require('console');
const fs = require('fs')
const http = require('http')
const os = require('os')
const cpu = require('cpu')

fs.readFile('log.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})

const data = `OS Type : ${os.type()}`
const data1 = `OS Total-Memory : ${os.totalmem()}`
const data2 = `OS FreeMemory : ${os.freemem()}`


const cpus = os.cpus();  
const cpuInfo = cpus.map(cpu => {
  return `Model: ${cpu.model}, Speed: ${cpu.speed} MHz, Cores: ${cpu.times.user}`;
}).join('\n');
const data3 = `OS CPUS:${cpuInfo}`


const arr = [data,data1,data2,data3]

fs.writeFile('log.txt',JSON.stringify(arr,null,2),"utf-8",(err)=>{ 
    if(err) throw err;
})




   

