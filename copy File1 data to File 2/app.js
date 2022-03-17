var fs = require('fs');

// fs.readFile('file.txt', 'utf-8', function(err, data) {
//   if( !err )
//     fs.writeFile('file2.txt', data, (err)=>{
//       if( err ) {
//         throw err;
//       }
//     });
//   else
//     throw err;
// });


//step ONE  to read & write file using promise
// let done = true

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Read file & write into other file'
//     resolve(workDone)
//     fs.readFile('file.txt', 'utf-8', function(err, data) {
//       if( !err )
//         fs.writeFile('file2.txt', data, (err)=>{
//           if( err ) {
//             throw err;
//           }
//         });
//       else
//         throw err;
//     });
//   } else {
//     const why = 'stuck'
//     reject(why)
//   }
// })

// const checkIfItsDone = () => {
//   isItDoneYet
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }

// checkIfItsDone()


//step TWO  to read & write file using promise

const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject({
          message: "Error in reading file",
          error: err,
        });
        return;
      }
      resolve({
        message: "Data read successfully",
        data: data,
      });
    });
  });
};

const writeFilePromise = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        reject({
          message: "Error in writing file",
          error: error,
        });
        return;
      }
      resolve({
        message: "File written Successfully",
      });
    });
  });
};

readFilePromise("file.txt")
  .then((filedata) => {
    console.log("---------read file data", filedata);
    return filedata.data; 
  })
  .then((data2) =>{
    return writeFilePromise('file2.txt',data2);
    // return "hello world";
  })
  .then((finaldata)=>{
    console.log("-----final data", finaldata);
    return finaldata.data;
  })
  .catch((err) => {
    console.log("Error", err);
  });

  // Promise.all([readFilePromise]).then(function(values) {
  //   console.log("testingggggg", values);
  // });
  readFilePromise('file.txt').then((value) => {
    console.log('finallllyyyyy: ' + value);
  });
// writeFilePromise("file2.txt", filedata)
//   .then((status) => {
//     console.log(status);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
