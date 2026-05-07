const express = require('express');

const connectDatabase = require('./config/database');
const Alunos = require('./models/Alunos');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API REST em Node.js com Express.' });
});

app.get('/alunos', async (req, res) => {
  try {
    const alunos = await Alunos.find();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({
      mensagem: 'Erro ao buscar alunos.',
      erro: error.message,
    });
  }
});

app.post('/alunos', async (req, res) => {
  try {
    const aluno = await Alunos.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Nao foi possivel iniciar a aplicacao.', error.message);
  }
}

startServer();