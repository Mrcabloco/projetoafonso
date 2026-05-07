// src/server.js
const express = require('express');
const { limiter } = require('./config/security'); // Importando o módulo de segurança
const connectDatabase = require('./config/database');
const Alunos = require('./models/Alunos');

const app = express();
const PORT = 3000;

// Aplicando o Rate Limit globalmente
app.use(limiter);

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.json({ mensagem: 'API REST Alunos rodando com sucesso.' });
});

// Listagem de alunos
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

// Cadastro de alunos
app.post('/alunos', async (req, res) => {
  try {
    const aluno = await Alunos.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ 
      mensagem: 'Erro ao cadastrar aluno.',
      erro: error.message 
    });
  }
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Não foi possível iniciar a aplicação.', error.message);
  }
}

startServer();