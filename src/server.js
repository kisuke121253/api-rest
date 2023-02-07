import app from './app.js'

const PORT = process.env.PORT || 9097


app.listen(PORT, () => {
    console.log("O servidor está online na porta " + `${PORT}`)
})



