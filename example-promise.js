function getTempCallBack (location, callback){
  callback(undefined,78);
  callback('city not found');

}

getTempCallBack('dublin', function(err, temp){
  if(err){
    console.log('error: ',err);
  }else{
    console.log('success: ',temp);
  }

});
