
const fs=require('fs');


var counter=1;
function write(){
    counter++;
    var message="welcome "+ counter;
    fs.writeFile("hello.txt",
                message,
                ()=>{
                    console.log('content i written in file successfully');
                });


}

function read(){
    fs.readFile("hello.txt",
    (err, data)=>{

    });


}

setInterval(write,5000);