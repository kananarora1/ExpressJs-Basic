const express = require('express');
const app = express();

app.use(express.json());

let courses = [
     {
        id: 1,
        name: "java"
    },
     {
        id: 2,
        name: "javascript"
    },
     {
        id: 3,
        name: "python"
    }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/post', (req, res) => {
    let course = {
        id: courses.length + 1,
        name: req.body.name
    
    };
    courses.push(course);
    res.send(courses);
});

app.put('/put/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    course.name = req.body.name;
    res.send(course);
});

app.delete('/delete/:id', (req, res) => {  
    let course = courses.find(c => c.id === parseInt(req.params.id));
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

function middleware(req, res, next) {
    console.log('called');
    next();
}

//logger
// method, ip, hostname, date



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});