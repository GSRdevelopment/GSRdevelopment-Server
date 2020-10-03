const Project = require("./../Models/projectModel");

exports.createProject = async (req, res) => {
  try {
    const { projectName, projectDescription, url, img } = req.body;

    Project.create({
      projectName,
      projectDescription,
      url,
      img,
    });

    res.status(201).json({
      status: "success",
      message: "Project successfully created",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getProject = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      status: "success",
      projects,
    });
  } catch (err) {
    res.status(404).json({
      stauts: "fail",
      message: err.message,
    });
  }
};

exports.editModel = async (req, res) => {
  await Project.updateOne({ _id: req.params.id }, req.body);

  try {
    res.status(200).json({
      status: "success",
      message: "Project updated successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteModel = async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id });

    res.stauts(200).json({
      status: "success",
      message: "Project successfully deleted",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
