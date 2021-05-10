module.exports = app  => {
    app.get('/', (req, res) => res.send('Você não esta em uma rota, use o /atendimentos'))
}