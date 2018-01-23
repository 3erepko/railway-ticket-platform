const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /(\.js|\.jsx)$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2017', 'react']
                }
            },
            {
                test : /(\.scss|\.css)$/,
                use : [
                    {loader : "style-loader"},
                    {
                        loader : "css-loader",
                        options : {
                            modules : true,
                            sourceMap : true,
                            importLoaders : 1,
                            localIdentName : "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    {loader : "sass-loader"}
                ]
            }
        ]
    },
    devServer : {
        contentBase : path.join(__dirname, 'public'),
        host : 'localhost',
        port : 8081,
        hot : true
    }
};
