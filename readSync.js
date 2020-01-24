var sleep = require('system-sleep');

module.exports={
  readCsvPromise:function (path1) {
console.log(path1)
  const csv = require('csv-parser')
  const fs = require('fs')
  const results = [];


  function getIdRequest(path2) {
    console.log(path2)
    return new Promise((resolve, reject) => {

     
      fs.createReadStream(path2)
        .pipe(csv(path2))
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
    });
  }
  console.log(path1)
  return getIdRequest(path1);
},


readCsvSync:function (path1) {
  let testdata=this.readCsvPromise(path1).then()
  testdata.then(function(b){testdata=b});
  while(typeof testdata.then === 'function'){
    sleep(1)
  }
return(testdata)

}

}