var fs = require('fs')
  , request = require('request')

module.exports = function (pliers) {

  return function (done) {
    fs.createReadStream('./npm-shrinkwrap.json').pipe(
      request.post('https://nodesecurity.io/validate/shrinkwrap', function (error, res) {
        if (error) done(new Error('Problem contacting nodesecurity.io web service'))
        if (JSON.parse(res.body).length !== 0) {
          pliers.logger.error('NPM packages with security warnings found')
          JSON.parse(res.body).forEach(function (module) {
            pliers.logger.error('module:', module.dependencyOf.join(' -> '), '->', module.module + '@' + module.version
              , 'https://nodesecurity.io/advisories/' + module.advisory.url)
          })
        }
      }))
  }

}
