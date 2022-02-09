// Importação do gerenciador de rotas
import express from 'express';

// Importação das rotas
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';


// Instância da biblioteca
const app = express();

// Midwares
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// Rotas
app.use(usersRoute);

// Rota para o teste
app.use(statusRoute)

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
})

