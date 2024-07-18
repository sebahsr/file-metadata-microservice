var express = require('express');
var cors = require('cors')
const multer = require('multer');
const path = require('path');;
require('dotenv').config()

var app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  try {
    const { originalname, mimetype, size } = req.file;

    // Respond with JSON containing file metadata
    res.json({
      name: originalname,
      type: mimetype,
      size: size
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
