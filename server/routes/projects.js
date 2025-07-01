const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// POST /api/projects - Add new project
router.post('/', async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const newProject = new Project({ name, description, image });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

module.exports = router;
