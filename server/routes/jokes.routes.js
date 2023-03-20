const jokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', jokeController.findAllJokes)
    app.post('/api/jokes', jokeController.createJoke)
    app.get('/api/jokes/:id', jokeController.findOneSingleJoke)
    app.put('/api/jokes/:id', jokeController.updateJoke)
    app.delete('/api/jokes/:id', jokeController.delteJoke)
}
