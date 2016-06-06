var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: "./src/entry.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: __dirname + '/app/src/index.html', to: __dirname + '/dist/index.html' },
        ], {
            ignore: [
                // Doesn't copy any files with a txt extension
                '*.txt',

                // Doesn't copy any file, even if they start with a dot
                //{ glob: '**/*', dot: true }
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};