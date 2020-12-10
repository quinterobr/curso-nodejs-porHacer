const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea'
    },
    completado: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        },
        alias: 'c',
        default: true,
        desc: 'Actualizar el estado de una tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'crear una tarea', opts)
    .command('borrar', 'borra una tarea', opts)
    .command('actualizar', 'actualiza el estado de una tarea', opts).help().argv;

module.exports = { argv };