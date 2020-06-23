const express = require('express');
const cStore = require('../chirpstore');


let router = express.Router();

// router.get('/', (req, res) => {
//     res.send("CHIRPS!");

// });

let customers = [];

//GET method
router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(cStore.GetChirp(id));
    } else {
        const raw = cStore.GetChirps()
        const customers = Object.keys(raw).map(key =>{
            return{
                id: key,
                comment: raw[key].comment,
                firstname: raw[key].firstname

            }
        })
        customers.pop();
        res.send(customers);
    }
});

//POST method

router.post('/', (req, res) => {
    cStore.CreateChirp(req.body);
    //res.sendStatus(200);
    let customer = {};
    customer.firstname = req.body.firstname;
    customer.comment = req.body.comment;
    
    customers.push(customer);
    
    return res.send(customer);

});


 

//DELETE method

router.delete('/:id?', (req, res) => {
    let id = req.params.id;
    cStore.DeleteChirp(id)
    id ? res.send("deleted") : res.sendStatus(404);
});


//PUT method

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    cStore.UpdateChirp(id, data)
    id ? res.send("edited"): res.sendStatus(404);
});



module.exports = router;