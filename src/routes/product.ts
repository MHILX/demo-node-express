import express from 'express';

const router = express.Router();

router.get('/products', (req: any,res: any) => {
    let now = new Date()
    res.send(`[${now}] Products...`);
});

module.exports = router;