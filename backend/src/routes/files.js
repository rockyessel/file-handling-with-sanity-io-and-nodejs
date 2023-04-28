const express = require('express');
const { PostFile } = require('../controllers/files');
const { upload } = require('../utils/services');

const router = express.Router();

router.post('/', upload.single('file'), PostFile);
// router.get('/all', GuestGetAll);
// router.get('/:identifier', GuestGet);
// router.get('/path/:cms_id', GuestFileSlug);
// router.delete('/:identifier', GuestDelete);

module.exports = router;
