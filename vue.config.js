const webpack = require('webpack')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const env = {
    SERVER_URL: "'" + (process.env.SERVER_URL || 'http://localhost:1337') + "'",
    LOGGER: 'console'
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/quasar.variables.styl'),
            ],
        })
}

console.log("Env: ", env)

module.exports = {
    pluginOptions: {
      quasar: {
        importStrategy: 'manual',
        rtlSupport: true
      },
      'style-resources-loader': {
        preProcessor: 'stylus',
        patterns: []
      }
    },
    transpileDependencies: [
        'quasar'
    ],
    runtimeCompiler: true,
    lintOnSave: false,

    configureWebpack: config => {

        // get a reference to the existing ForkTsCheckerWebpackPlugin
        const existingForkTsChecker = config.plugins.filter(
            p => p instanceof ForkTsCheckerWebpackPlugin,
        )[0]
        // remove the existing ForkTsCheckerWebpackPlugin
        // so that we can replace it with our modified version
        config.plugins = config.plugins.filter(
            p => !(p instanceof ForkTsCheckerWebpackPlugin),
        )
        // copy the options from the original ForkTsCheckerWebpackPlugin
        // instance and add the memoryLimit property
        const forkTsCheckerOptions = existingForkTsChecker.options;
        forkTsCheckerOptions.memoryLimit = 8192;
        forkTsCheckerOptions.workers = 2;
        config.plugins.push(new ForkTsCheckerWebpackPlugin(forkTsCheckerOptions));
        config.plugins.push(new webpack.DefinePlugin({
            __SERVER_URL: env.SERVER_URL,
            __LOGGER: env.LOGGER
        }))
        config.node.fs = 'empty'
    },

    // This is used to import Quasar's variables automatically to use in any style tag.
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },

    devServer: {
        public: '0.0.0.0:8080',
        disableHostCheck: true
    }
}
