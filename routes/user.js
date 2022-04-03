const express = require('express');
const { fetchUsers, fetchUserById, signupUser, loginUser } = require('../controller/user');
const router = express.Router();

router.get('/', fetchUsers );
router.get('/:id', fetchUserById);
router.post('/signup', signupUser);
router.get('/login', loginUser);

module.exports = router;