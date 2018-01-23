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
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2017', 'react']
                }
            },
            {
                test : /\.jsx$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2017', 'react']
                }
            },
            {
                test : /\.css$/,
                loader : ['style-loader', 'css-loader'],
                exclude : /node_modules/
            }
        ]
    },
    devServer : {
        contentBase : path.join(__dirname, 'public'),
        host : 'localhost',
        port : 8081,
        hot : true
    },
};
