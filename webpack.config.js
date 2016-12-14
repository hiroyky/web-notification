var path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        root:[path.join(__dirname,'node_modules')],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};
