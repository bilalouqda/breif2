const express = require('express');
const { createUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { authMiddleware,authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', authMiddleware, authorize('admin'), getAllUsers);
router.get('/:id', authMiddleware, authorize('admin', 'user'), getUserById); 
router.put('/:id', authMiddleware, authorize('admin', 'user'), updateUser);
router.delete('/:id', authMiddleware, authorize('admin'), deleteUser);

module.exports = router;
