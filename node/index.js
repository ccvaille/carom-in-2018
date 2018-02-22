var hello = require('./lib/hello.js');
const fs = require('fs');
const coolfe = require('happy-coolfe');
coolfe();

fs.writeFile('./coolfe.md', 'some text',function(err,result){
    console.log('写入完毕');
});
fs.readFile('./coolfe.md',function(err,res){
    if(!err) {
        console.log(res.toString(),' 读取成功');

    }
})
hello();