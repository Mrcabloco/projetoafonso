const mongoose = require('mongoose');

const alunosSchema = new mongoose.Schema(
    {
        nome: { 
            type: String, 
            required: true, 
            trim: true 
        },
        curso: { 
            type: String, 
            required: true, 
            trim: true 
        },
    },
    {
        versionKey: false,
    }
)

module.exports = mongoose.model('Aluno', alunosSchema, 'alunos');