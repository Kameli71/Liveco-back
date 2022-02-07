const router = require('express').Router();
const godsRouter = require('./gods.routes');
const saintsRouter = require('./saints.routes');

router.use('/gods', godsRouter);
router.use('/saints', saintsRouter);

module.exports = router;