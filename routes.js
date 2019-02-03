const fs = require('fs');
const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<body><h1>This is the greeting!</h1></body>');
        res.write('<form action="/create-user" method="post"><input type="text" name="message" /><button type="submit">Send</button></form>');
        return res.end();
      }
    if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<body>');
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
    res.write('</body>');
    return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log('user to be created is '+ message);
        // fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
        // return res.end();
        // });
    });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<body><h1>Welcome to nodejs programming</h1></body>');
}

module.exports = requestHandler;