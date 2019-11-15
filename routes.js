const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
//el nombre con el formato barra nombre del canal (ejemplo: posta.id) van a ir a la pages channel
//  /posta
.add('channel', '/:slug.:id', 'channel')
// /posta/tenga-un-buen-dia
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')