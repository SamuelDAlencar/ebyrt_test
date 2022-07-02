const express = require('express');
const { addTask, updateTask, deleteTask } = require('../../database/controllers/task.controllers');
const { validateAccess, validateTaskAdd, validTaskUpdate } = require('../../middlewares');

const router = express.Router();

router.post('/', validateAccess, validateTaskAdd, addTask);
router.put('/', validateAccess, validTaskUpdate, updateTask);
router.delete('/', validateAccess, deleteTask);

module.exports = router;