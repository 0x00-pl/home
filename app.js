const http         = require('http'),
      express      = require('express'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      info         = require('./info'),
      typing       = require('./typing'),
      doc          = require('./doc'),
      env          = process.env

let app = express()

// IMPORTANT: Your application HAS to respond to GET /health with status 200
//            for OpenShift health monitoring
app.get('/health', (req, res)=>{
    res.status(200).end()
})

;[
    ['/info', info],
    ['/tping', typing],
    ['/doc', doc]
].forEach(([mounted, r])=>app.use(mounted, r))


let server = http.createServer(app)

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
