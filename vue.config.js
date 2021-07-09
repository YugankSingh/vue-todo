module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-todo/'
    : '/'
}

console.log('environment : ', process.env.NODE_ENV) 