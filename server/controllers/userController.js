/**
 * userContoller.js
 *
 * plantilla de controlador
 *
 * @type {exports|module.exports}
 */
var crypto = require('crypto'),
    User = require('../model/users.js');

function registrar(req, res, next) {
   return res.status(400).send("No está implementado")
}

var projects =  [
    {
        id: 1,
        name: "EM",
        img: "img",
        createAt: "Ruben",
        access: ["Jose", "Maria"]
    },
    {
        id: 2,
        name: "U2Date",
        img: "img",
        createAt: "Ruben",
        access: ["Jose", "Maria"]
    },
    {
        id: 3,
        name: "SKMO",
        img: "img",
        createAt: "Ruben",
        access: ["Jose", "Maria"]
    }
];
function createProject(req, res, next) {
    console.log(req.body)
    var project = {
        id: projects.length + 1,
        name: req.body.pojectName,
        img: "img",
        createAt: "Ruben",
        access: ["Jose", "Maria"]
    }

    projects.push(project);
    return res.status(200).send(projects)
}

function getUsers(req, res, next) {

    return res.status(200).send(projects)
    /*User.getUsers(function(err,user) {
        return res.status(200).send(user);
    })*/
}

function login(req, res, next) {
   return res.status(400).send("No está implementado")
}

exports.registrar = registrar;
exports.getUsers = getUsers;
exports.login = login;
exports.createProject = createProject;