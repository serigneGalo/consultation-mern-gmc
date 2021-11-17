const Patient = require('../models/user.model');

module.exports.addNewPatient = (req, res) => {
    const patient = new Patient(req.body);
    patient.save((err, patient) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                patient
            });
        }
    });
}

module.exports.updatePatient = (req, res) => {
    Patient.findByIdAndUpdate(req.params.id, req.body, (err, patient) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Patient uptade succefully',
                patient
            });
        }
    });
}

module.exports.deletePatient = (req, res) => {
    Patient.findByIdAndRemove(req.params.id, (err, patient) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Patient deleted successfully',
                patient
            });
        }
    });
}

module.exports.getAllPatients = (req, res) => {
    Patient.find({}, function (err, patients) {
            if (err) {
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200).json(
                    patients
                );
            }
        });
}