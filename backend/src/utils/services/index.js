const multer = require('multer');

const storageEngine = multer.diskStorage({
  destination: (_req, _, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replaceAll(' ', '-')}`);
  },
});

const upload = multer({ storage: storageEngine });

module.exports = { upload };
