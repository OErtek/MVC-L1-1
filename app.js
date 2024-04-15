const http = require('http');
const student = require('./student');

const server = http.createServer((req, res) => {
    let id = req.url.split("/").pop();
    id = isNaN(id) ? 0 : Number(id);  
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>My name is ${student.getStudentFullName(id)}. My student ID is ${student.getStudentId(id)}</p>`);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});