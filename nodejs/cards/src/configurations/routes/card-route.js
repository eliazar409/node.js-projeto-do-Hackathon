const api = require('../controllers/card-controller')

module.exports = (app) => {

    app.route('/cards')
        .post(api.save)
        .get(api.findAll)

}