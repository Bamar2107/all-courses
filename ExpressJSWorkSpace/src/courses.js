const express = require('express');
const route = express.Router();


route.get("/", (req,res) =>{
    var out = `<h2> Welcome to the Courses section </h2>`;
    out += `<a href="/courses">Courses Index page</a> <br> `;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a> <br> `;
    out += `<a href="/courses/angular">Angular Tutorial</a> <br> `;
    out += `<a href="/courses/PHP">PHP tuturial</a> <br> `;

    res.send(out);
});

route.get("/mongodb", (req,res) =>{
    var out = `<h2> Welcome to the MongoDB section </h2>`;
    out += `<a href="/courses">Courses Index page</a> <br> `;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a> <br> `;
    out += `<a href="/courses/angular">Angular Tutorial</a> <br> `;
    out += `<a href="/courses/PHP">PHP tuturial</a> <br> `;

    res.send(out);
});


route.get("/angular", (req,res) =>{
    var out = `<h2> Welcome to the Angular section </h2>`;
    out += `<a href="/courses">Courses Index page</a> <br> `;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a> <br> `;
    out += `<a href="/courses/angular">Angular Tutorial</a> <br> `;
    out += `<a href="/courses/PHP">PHP tuturial</a> <br> `;

    res.send(out);
});

route.get("/PHP", (req,res) =>{
    var out = `<h2> Welcome to the PHP section </h2>`;
    out += `<a href="/courses">Courses Index page</a> <br> `;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a> <br> `;
    out += `<a href="/courses/angular">Angular Tutorial</a> <br> `;
    out += `<a href="/courses/PHP">PHP tuturial</a> <br> `;

    res.send(out);
});

module.exports = route;