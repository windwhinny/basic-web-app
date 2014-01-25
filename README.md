BasicWebApp
=============

BWA是专为静态前端而打造的开发环境。所谓静态前端，是与传统由php或者其它模板系统生成的前端相区别，主要由静态资源所组成的前端。基于此项目开发的webapp，建议使用RESTfull风格与后端交互，单页面，且前后端分离。

##特性

1. 前端js和css代码自动压缩。
2. 开发环境和部署环境分离。
3. 前端依赖包自动安装。
4. 使用requirejs做js模块管理。
5. 使用less做css处理。

##初始化

本项目使用nodejs和npm，bower作为资源服务器和包管理器。  
运行<code>npm install</code>，它将会自动安装前后端所有的依赖，而具体所依赖的包，可以在<code>/package.json</code>（后端）和<code>/bower.json</code>（前端）中修改。

##运行环境

本项目分为两种运行环境：开发环境和部署环境。  
两者的区别主要为开发环境下，js和css代码都是未经压缩的，而部署环境中的js和css都压缩并集合在了一个单一文件里。
BWA通过检测环境变量<code>NODE_ENV</code>来判断当前环境为何种。 
使用<code>grunt</code>可以将环境变量<code>NODE_ENV</code>设置为<code>development</code>，并且运行服务器。所以<code>grunt</code>可以进入开发环境。
而<code>node server.js</code>则不设置环境变量，直接运行服务器，所以会进入部署环境。此时前端只能访问<code>/public</code>下的文件，<code>/src</code>下的文件不能访问。

两种环境的入口文件不同，分别为<code>/public/index-dev.html</code>和<code>/public/index.html</code>。
而两种环境，所引用的js和css也不同。  

开发时会使用<code>requirejs</code>作为模块管理，将<code>/src/js/init.js</code>作为js的入口文件，从而加载整个项目的前端js。  
而css则使用less，并将<code>/src/less/init.less</code>作为入口文件。  
当开发完成后，需要在项目根目录运行<code>grunt build</code>，将js和css代码压缩。压缩后的文件会保存为<code>/public/js/build.js</code>和<code>/public/css/build.css</code>。

运行服务器后，在浏览器中打开<code>localhost:3000</code>即可查看。

##目录安排

图片和其它需要直接访问的文件归类放入<code>/public</code>里。  
js放入<code>/src/js</code>。  
css放入<code>/src/css</code>。
