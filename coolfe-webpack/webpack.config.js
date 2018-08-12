module.exports = (env, argv) => {
    return argv.mode === 'production' ?
        require('./config/webpack.production') : 
        require('./config/webpack.development')
}