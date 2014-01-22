var express=require('express'),
    app=express(),
    port=3000,
    devMode=(process.env.NODE_ENV=='development')?true:false;

app.use(function(req,res,next){
  console.log('%s %s',req.method,req.url);
  return next();
})
if(devMode){
  app.use('/js',express.static('./src/js'));
  app.use('/js/lib',express.static('./src/lib'));
  app.use('/less',express.static('./src/less'));
  var staticFileHandler=express.static('./public',{index:'index-dev.html'});
}else{
  var staticFileHandler=express.static('./public');
}
app.use('/views',express.static('./src/views'));
app.use(staticFileHandler);

app.listen(port);

console.log("Server run at port "+port);
