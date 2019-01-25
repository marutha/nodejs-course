const fs = require('fs');
const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<body><form action="/message" method="post"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        return res.end();
      }
      if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
      }
      res.setHeader('Content-Type', 'text/html');
      res.write('<body><h1>Welcome to nodejs programming</h1></body>');
}

module.exports = requestHandler;