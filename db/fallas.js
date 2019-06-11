const name = 'fallas'

let schema = {
    id: 'number',
    empleadoid: 'number',
    hora: 'string',
    causa: 'string',
    perdida: 'number'
}

// contenido inicial
let data = [
    {
        id: 1,
        empleadoid: 1,
        hora: "10:35",
        causa: "Accidente en cocina",
        perdida: 600
    }
]

module.exports = {
    schema,
    data,
}
