var express = require('express');
var router = express.Router();
var multer = require('multer');

multer({ dest: './src/uploads/' });
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage });

router.use(express.static('./src/uploads'));
router.post('/file-upload', upload.any(), (req, res, next) => {
    console.log(req.params, 'Body');
    console.log(req.files, 'files');
    res.end();
});

module.exports = router;
