// function getTempCallBack (location, callback){
//   callback(undefined,78);
//   callback('city not found');
// }
//
// getTempCallBack('dublin', function(err, temp){
//   if(err){
//     console.log('error: ',err);
//   }else{
//     console.log('success: ',temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('Not found from promise');
//     },2000);
//
//   });
// }
//
// getTempPromise('dublin').then(function(temp){
//   console.log('Promise Success: ',temp);
//
// },function(err){
//   console.log('Promise error: ',err);
// })


//exercies

function addPromise(a, b){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Numbers not valid');
      }
      },2000);

    });
  }


  addPromise(5,2).then(function(result){
    console.log('Promise Success result is: ',result);

  },function(err){
    console.log('Promise error numbers: ',err);
  })

  addPromise(5,"hello").then(function(result){
    console.log('Promise Success result is: ',result);

  },function(err){
    console.log('Promise error numbers: ',err);
  })
