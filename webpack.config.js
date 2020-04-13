const path = require('path');
module.exports = {
    /**
     写法
     1. [单入口] string类型 `entry:'./src/index.js'` ，将string对应的文件作为入口，chunkName 默认为name
     2. [单入口] []string类型 `entry:['./src/index.js','./src/a.js']` ，将数组内的文件打包成一个chunk , chunkName 默认为name
        2.1 有时候需要将html写进这个数组里
     3. [单/多入口] object类型 `entry:{chunkName:'filepathname'}` ，每个属性作为一个入口，属性名为 chunkName ，属性值为入口文件(支持string和array，同1，2点)
     */
    // entry:'./src/index.js',
    // entry:['./src/index.js','./src/a.js'],
    entry:{
        index:'./src/index.js',
        amain:['./src/index.js','./src/a.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 目标输出目录 path 的绝对路径，所以要用到path.resolve
        /**
         可以使用占位符
         [name]:模块名称-chunkName (entry对象的属性名，默认是main)
         [id]: 模块标识符(module identifier)
         [hash]: 模块标识符(module identifier)的 hash ，[每次打包生成一次hash，即同一次打包，所有输入文件的hash 值是一样的]
         [chunkhash]: chunk 内容的 hash [根据每个chunk的内容生成的hash]
         */
        filename: 'js/[name]-[id]-[chunkhash].js' //  用于输出文件的文件名
    }
};