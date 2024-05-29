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
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5; // Number of projects per page

  try {
    const totalProjects = await Project.countDocuments();
    const totalPages = Math.ceil(totalProjects / pageSize);

    const projects = await Project.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({ projects, totalPages });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};