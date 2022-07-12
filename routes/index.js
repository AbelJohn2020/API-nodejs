const { Router } = require("express");
const router = Router();

router.get('/api', (req, res) => {
    res.json({'id': 1, name: 'Abel'})
});


module.exports = router;