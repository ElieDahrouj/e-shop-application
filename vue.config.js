module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://heavens-shop.herokuapp.com'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 30,
                        cacheName: 'heavensShop-cache',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
}
