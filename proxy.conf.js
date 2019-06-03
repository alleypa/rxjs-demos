const PROXY_CONFIG = [
  {
    context: [
      '/api',
      '/course-images'
    ],
    target: 'http://localhost:9000',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
