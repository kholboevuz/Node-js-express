const os = require("os")
const fs  = require("fs")
const path = require('path')

const pcinfo = os.cpus()[0].model;



// fs.mkdir(path.join(__dirname , 'CPU') , (err)=> {
//  if(err) throw new Error()

//  console.log("Succes!");
// })

fs.writeFile(path.join(__dirname , 'CPU' , "info.txt") , pcinfo , (err) =>{
    if(err) throw new Error()

    console.log("Succes upload");

    fs.readFile(path.join(__dirname , "CPU" , 'info.txt'), "utf-8" , (err , data) => {
    if(err) throw new Error()

    console.log(data);
    } )
})




//platform name
// console.log(os.platform());

//archekture

// console.log(os.arch());





