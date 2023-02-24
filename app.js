const express = require('express');

const app = express();

app.use(express.json());


let tanks = [
    { "id": 1, "name": "Tiger I", "country": "Germany"},
    { "id": 2, "name": "Tiger II", "country": "Germany"},
    { "id": 3, "name": "Panther", "country": "Germany"},
    { "id": 4, "name": "Panther II", "country": "Germany"},
    { "id": 5, "name": "Panther II", "country": "Germany"},
]

let visitorsCount = 0;

const PORT = 8080;
// the express.static() method is used to serve static files such as images, CSS files, and JavaScript files.
// because of security reasons, you can only access files that are in the public folder
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});


app.get("/api/tanks", (req, res) => {
    res.send({ "data": tanks});
});

app.get("/api/tanks/:id", (req, res) => {
    const id = req.params.id;
    const foundTank = tanks.find((tank) => tank.name === Number(id));
    res.send({ "data": foundTank});
});




app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
});


app.get("/api/visitors", (req, res) => {
res.send({ "data": visitorsCount});
});

app.put("/api/visitors", (req, res) => {
    visitorsCount++;
    res.send({ "data": visitorsCount});
});





app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port " + PORT);
});