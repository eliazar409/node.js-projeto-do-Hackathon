const neDB = require('../configurations/database')
const api = {}

api.save = (request, response) => {
    const canonical = request.body
    neDB.insert(canonical, (exception, customer) => {
        if(exception) { // undefined ele é igual a false
            const setence = 'Deu ruim na tentativa de SALVAR o customer'
            console.error(setence, exception)

            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        console.log('Customer salvo com sucesso', customer)
        response.status(201)
        response.json(customer)
    })
}

api.findAll = (request, response) => {
    neDB.find({ }).sort({ name: 1 }).exec((exception, customers) => {
        if(exception) {
            const setence = 'Deu ruim na tentativa de LISTAR o customer'
            console.error(setence, exception)

            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        console.log('Lista de customers', customers)
        response.json(customers)
    })
}

module.exports = api