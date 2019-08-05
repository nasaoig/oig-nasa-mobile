// vue.config.js


module.exports = {

    // Project Build Settings

    runtimeCompiler: false,
    filenameHashing: true,
    assetsDir: "assets",
    indexPath: "index.html",
    publicPath: "/",
    outputDir: "dist",
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 1337, 
        https: false,
        hotOnly: false,
    },

    // PWA Build Settings
    // These props will automatically be added to index.html meta tags
    // see: https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config

    // Bug: theme-color is set in manifest.json, but then vue pwa overrides that by adding a meta tag
    // to index.html with Vue green (default). To make the theme-color work correctly set the prop
    // here in vue.config.json to the same value in manifest.json

    pwa: {
        themeColor: '#0b3d91',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',    // 'no' < iOS 11.3 
        appleMobileWebAppStatusBarStyle: 'black',
        iconPaths: {
            favicon16: 'img/oig/favicon-16x16.png',
            favicon32:  'img/oig/favicon-32x32.png',
            appleTouchIcon: 'img/oig/apple-touch-icon-152x152.png',
            maskIcon: 'img/oig/safari-pinned-tab.svg',
            msTileImage: 'img/oig/msapplication-icon-144x144.png'
        }
    }
}