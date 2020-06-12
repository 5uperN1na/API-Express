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

//POST method

router.post('/', (req, res) => {
    cStore.CreateChirp(req.body);
    res.sendStatus(200);

});


//DELETE method

router.delete('/:id?', (req, res) => {
    let id = req.params.id;
    id ? res.json(cStore.DeleteChirp(id)) : res.sendStatus(404);
});


//PUT method

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    id ? res.json(cStore.UpdateChirp(id)) : res.sendStatus(404);
});



module.exports = router;