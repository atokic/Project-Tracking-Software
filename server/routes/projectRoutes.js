const express = require('express');
const { createProject, getProjects, deleteProject, updateProject } = require('../controllers/projectController');
const router = express.Router();

router.post('/', createProject);
router.get('/', getProjects);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);
module.exports = router;