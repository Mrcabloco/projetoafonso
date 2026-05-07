const mongoose = require('mongoose'); 

// Alterado de 'AulaAfonsoRevisao' (Projeto) para 'projeto' (Banco de Dados real)
const DB_NAME = 'projeto'; 
const MONGO_URL = `mongodb+srv://leonardo03bastos_db_user:yaJuPxMp3LPDBYwe@cluster0.yrmhoug.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

async function connectDatabase() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log(`Banco "${mongoose.connection.name}" conectado com sucesso!`);
    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error.message);
        throw error;
    }
}

module.exports = connectDatabase;