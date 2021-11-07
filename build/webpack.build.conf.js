const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf')


const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');


const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    performance: {
      hints: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ImageminPlugin({         
            // test: /\.(jpe?g|png|gif|svg)$/i,  
            svgo: {
              plugins: [
                {removeViewBox: false}
              ]
            },
            plugins: [
              imageminMozjpeg({
                progressive: true,
                quality: 65
              })              
            ]
        })
    ],
    resolve: {
        alias: {          
          'vue$': 'vue/dist/vue.min',
        }
      }
})


module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})