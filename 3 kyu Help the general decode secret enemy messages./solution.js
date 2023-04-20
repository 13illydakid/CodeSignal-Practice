console.log (device.encode ('What is this ?')) ;
device.decode = function (w) {
  for(let i = 0; i < 65; i++){
    w = device.encode(w);
  }
  return w ;
}
