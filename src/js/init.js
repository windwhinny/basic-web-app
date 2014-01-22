var config={
  baseUrl:'/js',
  paths:{
    angular:'lib/angular/angular',
    'angular-resource':'lib/angular-resource/angular-resource',
    'angular-ui-router':'lib/angular-ui-router',
    'angular-animate':'lib/angular-animate'
  },
  shim:{
    angular:{
      exports:'angular'
    },
    'angular-resource':{
      deps:['angular']
    },
    'angular-ui-router':{
      deps:['angular'] 
    },
    'angular-animate':{
      deps:['angular'] 
    }
  }
};
if(require&&require.config){
  require.config(config);
}

if(typeof(define)!='undefined'){
 define([
    'angular',
    'app'
  ],function(angular){
  }) 
}

if(typeof(module)!='undefined'){
 config.baseUrl="src/js";
 config.out="public/js/build.js";
 config.include=['init'];
 config.wrap=true;
  console.log(config);
 for(i in config.paths){
   var path=config.paths[i]; 
   config.paths[i]="../"+path;
 }
 module.exports=config; 
}
