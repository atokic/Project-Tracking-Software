const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, startDate, endDate } = req.body;
  try {
    const newProject = new Project({ name, startDate, endDate });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};