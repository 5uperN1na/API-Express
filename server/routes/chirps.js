const express = require('express');
const cStore = require('../chirpstore');


let router = express.Router();

// router.get('/', (req, res) => {
//     res.send("CHIRPS!");

// });



//GET method
router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(cStore.GetChirp(id));
    } else {
        res.send(cStore.GetChirps());
    }
});


router.post('/', (req, res) => {
    cStore.CreateChirp(req.body);
    res.sendStatus(200);

});



module.exports = router;