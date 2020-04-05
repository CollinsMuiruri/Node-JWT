const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'My first post',
            decription: 'random data you should\'nt not access'
        }
    });
});

module.exports = router