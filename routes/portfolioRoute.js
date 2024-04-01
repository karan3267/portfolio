const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} = require("../models/protfolioModel");

router.get("/get/portfolio-data", async (req, res) => {
  try {
    const intro = await Intro.find();
    const about = await About.find();
    const experience = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contact = await Contact.find();
    res.status(200).send({
      intro: intro[0],
      about: about[0],
      experience: experience,
      projects: projects,
      courses: courses,
      contacts: contact[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports=router;
