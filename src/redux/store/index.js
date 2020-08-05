module.exports = process.env.REACT_APP_ENV === 'production' ? require('./store.prod') : require('./store.dev')
