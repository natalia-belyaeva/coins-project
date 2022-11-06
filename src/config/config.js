let config = {
    apiHost: 'localhost',
    apiProtocol: 'http',
    apiPort: '3302'
}

config = {
    ...config,
    apiHostURL: `${config.apiProtocol}://${config.apiHost}:${config.apiPort}`
}

export default config;