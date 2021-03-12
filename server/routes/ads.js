var express = require('express');
var router = express.Router();

const ads = [
  {
    src: 'assets/img/pp-1.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'assets/img/pp-2.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'assets/img/pp-3.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'assets/img/pp-4.jpg',
    altText: '',
    caption: '',
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(ads);
});

module.exports = router;
