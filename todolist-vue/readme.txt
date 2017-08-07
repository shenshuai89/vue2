//****this is development environment.*****//
Git is a version control system.
Git is free software.
beach pro-env = production environment
beach dev-env = development environment
//when pro-env can see bundle.js(181K) 
$ webpack 
//when dev-env can see bundle.js(526k) and bundle.map.js(649K) 
$ webpack 
//run server 
$ webpack-dev-server --inline --hot

make =>(stats.js) to use http://webpack.github.io/analyse/   or  http://chrisbateman.github.io/webpack-visualizer/
$ webpack --profile --json > stats.json
