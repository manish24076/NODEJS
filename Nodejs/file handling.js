//...Read.....//
//*1/////
//const { error, log } = require("console")
const { log, error } = require("console")
const fs = require("fs")
//fs.writeFileSync("./text.txt","hello monu your file is created")

//*2//////
fs.writeFileSync("./sec.txt","hello monu your sec file is created", (err)=>{
    console.log(err)
    
})


//.......Read....////
//const res =fs.readFileSync("./text.txt","utf8")
 //console.log(res);

 const re =fs.readFileSync("./sec.txt","utf8")
 console.log(re);
  
 fs.readFile("./text.txt","utf-8",(error,Response)=>{
    if(error){
        console.log(error);
        
    }
    else{
        console.log(Response);
        
    }
 })
