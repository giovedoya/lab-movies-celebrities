const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model')

/* GET form celebrities*/
/* ROUTE celebrities/create*/
router.get('/celebrities/create', async (req, res, next) => {
    res.render('./celebrities/new-celebrity')
})

/* POST create celebrities*/
/* ROUTE celebrities/create*/
router.post('/celebrities/create', async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    try {
        await Celebrity.create({ name, occupation, catchPhrase});
        res.redirect('/celebrities')
    } catch (error) {
        
    }
})




module.exports = router;