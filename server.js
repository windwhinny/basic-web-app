var express=require('express'),
    app=express(),
    port=3000,
    staticFileHandler=express.static('./public');

app.use(staticFileHandler);

app.listen(port);

console.log("Server run at port "+port);
