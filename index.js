const customExpress = require("./Config/customExpress")

const app = customExpress()
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

app.get('/', (req, res) => res.send('Você não esta em uma rota, use o /atendimentos'))

