const fs = require('fs');
const { error } = require("console");
let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('Problemas al grabar en el archivo', err);
    })
}

const cargarBD = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }
}

const crear = (desc) => {
    cargarBD();

    let porHacer = {
        desc,
        completado: false
    };
    listaPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListar = () => {
    cargarBD();
    return listaPorHacer;
}

const actualizar = (desc, comp = true) => {
    cargarBD();
    let index = listaPorHacer.findIndex(tarea => tarea.desc === desc);

    if (index >= 0) {
        listaPorHacer[index].completado = comp;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (desc) => {
    cargarBD();
    let index = listaPorHacer.findIndex(tarea => tarea.desc === desc);

    if (index >= 0) {
        listaPorHacer.splice(index, 1);
        guardarDB();
        return desc;
    } else {
        return false;
    }
}

module.exports = { crear, getListar, actualizar, borrar };