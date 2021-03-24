const os = require('os');
const fs = require('fs');
const http = require('http');

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';


console.log("Hello");
console.log("Architecture " + os.arch());
console.log("CPUs " + os.cpus().length);
console.log("OS " + os.platform());

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});


// http.createServer((req,res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// }).listen(3000);

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});

// in postman type http://localhost:3000 and change it to the GET and click the send button you'll get the response as Hello World
/*
    in postman type http://localhost:3000 and change it to the POST and navigate to the Body section type your name then click send
    to get response as Hello <your name>
*/
