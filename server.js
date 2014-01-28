var express=require('express'),
    app=express(),
    port=3000,
		gzipStatic=require('connect-gzip-static');
    devMode=(process.env.NODE_ENV=='development')?true:false;

app.use(function(req,res,next){
  console.log('%s %s',req.method,req.url);
  return next();
})
if(devMode){
  app.use('/js',gzipStatic('./src/js'));
  app.use('/js/lib',gzipStatic('./src/lib'));
  app.use('/less',gzipStatic('./src/less'));
  app.use('/',gzipStatic('./public',{index:'index-dev.html'}));
}else{
  app.use('/',gzipStatic('./public'));
}
app.use('/views',gzipStatic('./src/views'));
app.listen(port);
console.log("Server run at port "+port);
