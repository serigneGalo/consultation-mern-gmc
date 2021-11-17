const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    prenom: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    sexe: {
        type: String
    },
    numero: {
        type: Number
    },
    age: {
        type: Number,
        required: true

    },
    adress: {
        type: String,
        required: true
    },
    poids: {
        type: Number
    },
    pression_arterielle: {
        type: Number,
        required: true
    },
    symptome_1: {
        type: String,
        required: true
    },
    symptome_2: {
        type: String
    },
    symptome_3: {
        type: String
    }
    
}, {
    timestamp: true
})

module.exports = mongoose.model('Patient', patientSchema);