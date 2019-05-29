
var shell = require('shelljs/global')
var res = exec('git status -s').stdout;
console.log('开始转换 git status')
var arrayResult= res.split('\n');

var array = []
console.log('开始筛选 git status')

array = arrayResult.filter((item) => {
    var i = item.trim()
    if(i[0] === 'M' || i[0] === 'A') {
        return true
    }
    return false
})
var host = 'https://github.com/zhouping920819/vant-H5.git'
console.log('开始转换 上传:',host)
array.forEach((item) => {
    var i = item.trim().replace(/^m|^a/i,'').trim()
    console.log('iiiii' + i)
    exec(i)
   // console.log(i)
})
