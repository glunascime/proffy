const express = require('express');
const server = express();

const {
    pageLanding, 
    pageStudy, 
    pageGiveClasses, 
    saveClasses
} = require('./pages.js');

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.urlencoded({extended:true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500);

/* 


function pageGiveClasses(req, res) {
    console.log("Give classes, ok");
    const data = req.query;

    const isNotEmpty = Object.keys(data).lengh !=0;

    if(isNotEmpty) {

        data.subject = getSubjects(data.subject);
        proffys.push(data);

        return res.redirect("/study");
    }

    return res.render("give-classes.html", {subjects, weekdays});
}

const express = require('express');
const server = express();

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500); */