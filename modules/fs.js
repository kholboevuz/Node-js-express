const fs = require("fs");
const path   = require("path")

// fs.mkdir(path.join(__dirname , "templates") , err =>{
//     if(err) throw new Error()

//     console.log("Folder was crated succesfully");
// })

// fs.mkdir(path.join(__dirname , "notes") , (err) =>{
//     if(err) throw new Error()

//     console.log("Created new folder sucessfilly");
// })

fs.writeFile(path.join(__dirname , 'notes' , 'user.txt') , 'Created new users' ,  (err) =>{
if(err) throw new Error()

console.log("Created new users succesfelly");


fs.appendFile(path.join(__dirname , "notes" , "user.txt") , " Sodiqov Abdukarim" , (err) =>{
    if(err) throw new Error()

console.log("User documation change succesfley");
})
fs.readFile(path.join(__dirname , "notes" , "user.txt") , "utf-8" , (err , data) =>{
  if (err)throw new Error()
  
//   console.log(Buffer.from(data).toString()); 1-usul
console.log(data);
} )
})
 