const name = 'empleados'

let schema = {
    id: 'number',
    name: 'string',
    lastname: 'string',
    sucursal: 'string',
    turno: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        name: "Pedro",
        lastname: "Perez",
        sucursal: "Mexicali",
        turno: "Matutino"

    }
]

module.exports = {
    schema,
    data,
}
