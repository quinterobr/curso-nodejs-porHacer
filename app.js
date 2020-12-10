const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(porHacer.crear(argv.descripcion));
        break;
    case 'listar':
        let listado = porHacer.getListar();
        for (let tarea of listado) {
            console.log(tarea.desc);
            console.log('==========================');
            console.log(tarea.completado);
        }
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado));
        break;
    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion));
        break;
    default:
        console.log('comando no encontrado');
        break;
}