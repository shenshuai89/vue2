module.exports = {
	//这是一个主文件包括其他模块
	entry: './src/index.js',
	//编译文件输出的路径
	output:{
	//输出的文件夹路径
		path: './dist',
		publicPath: 'dist/',
	//输出的文件名称
		filename: 'build.js'
	},
	//使用vue2.0的时候需要添加，为了使npm包使用独立构建
	resolve: {
	  alias: {
	    'vue$': 'vue/dist/vue.js'
	  }
	},
	devServer:{
		contentBase:"./",
		host:"127.0.0.1",
		port:'1234',
		color:true
	},

	module:{
		loaders:[
		{
	//让webpack验证文件是否是以.js结尾，并将其转换
			test: /\.js$/,
	// 通过babel转换
			loader: 'babel',
	// 不用转换的node_modules文件夹
			exclude: /node_modules/
		},
		 {
		 test: /\.vue$/,
		 loader: 'vue'
		 }
		]
	},
	vue: {
	 loaders: {
	 js: 'babel'
	 }
	}
}