const path = require('path')
const { basename } = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

const PAGES_DIR = PATHS.src
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {

    externals:{
        paths: PATHS
    },

    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test:/node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module:{
        rules: [{
                    test:/\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loader: {
                            scss: 'vue-style-loader!css-loader!sass-loader'
                        }
                    }
                },{
                    test:/\.js$/,                    
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }, {
                test:/\.pug$/,
                oneOf: [{
                    resourceQuery: /^\?vue/,
                    use: ["pug-plain-loader"]
                }, {
                    use: [
                        "html-loader",
                        "pug-html-loader"
                    ]
                }]
            },{
                test:/\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }, {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `./postcss.config.js`}}
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true}
                    }
                ]
            }, {
                test:/\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `./postcss.config.js`}}
                    }
                ]
            }]
    },
    resolve: {
      alias: {
        '~': PATHS.src
      }
    },
    plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: `${PATHS.assets}css/[name].[hash].css`
            }),        
            new FaviconsWebpackPlugin({                
                logo: `${PATHS.src}/favicon/fvkn.svg`,                              
                publicPath: `/`,                
                outputPath: `${PATHS.assets}img/favicon`,        
                prefix: 'assets/img/favicon',                       
                inject: htmlPlugin => basename(htmlPlugin.options.filename) === 'index.html',      
                
            }),      
            new CopyWebpackPlugin([
                { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
                { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
                { from: `${PATHS.src}/static`, to: ''}
            ]), 
            
                     

            // Automatic creation any html pages (Don't forget to RERUN dev server)
            // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
            // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
            ...PAGES.map(page => new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/${page}`,
                filename: `./${page}`
            }))
    ],
}