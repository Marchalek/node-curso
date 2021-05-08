module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos e esta realizando um GET no pagina'))


    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você esta na rota de atendimentos e esta realizando um post')
        })
}