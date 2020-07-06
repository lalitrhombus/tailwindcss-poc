const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        (process.env.NODE_ENV === 'production') ?
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/abc.js'},
              { from: 'src/tailwind.output.css'}
            ],
          }) :
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/abc.js', to: 'dist'},
                {from: 'src/tailwind.output.css', to: 'dist'}
            ],
        })
    );

    return config;
}