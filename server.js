const http = require('http');
const port = 3000;
const data = [
    {
        index: 1,
        question: "What is the Capital of Pakistan?",
        optiona: "Islamabad",
        optionb: "Lahore",
        optionc: "Karachi",
        optiond: "Peshawar",
        correctAnswer: "Islamabad",
    },
    {
        index: 2,
        question: "What is the Capital of Punjab?",
        optiona: "Islamabad",
        optionb: "Lahore",
        optionc: "Karachi",
        optiond: "Peshawar",
        correctAnswer: "Lahore",
    },
    {
        index: 3,
        question: "What is the Capital of KPK?",
        optiona: "Islamabad",
        optionb: "Lahore",
        optionc: "Karachi",
        optiond: "Peshawar",
        correctAnswer: "Peshawar",
    },
    {
        index: 4,
        question: "What is the Capital of Sindh?",
        optiona: "Islamabad",
        optionb: "Lahore",
        optionc: "Karachi",
        optiond: "Peshawar",
        correctAnswer: "Karachi",
    },
    {
        index: 5,
        question: "What is the Capital of Balochistan?",
        optiona: "Islamabad",
        optionb: "Quetta",
        optionc: "Karachi",
        optiond: "Peshawar",
        correctAnswer: "Quetta",
    },
];

let myNewData = JSON.stringify(data);

http.createServer((req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow headers like 'Content-Type'

    if (req.url === "/") { // Ensure strict comparison
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(myNewData);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Not Found");
    }
}).listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
