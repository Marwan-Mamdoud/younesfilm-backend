import { Router } from "express";
import {
  addProject,
  deleteImage,
  deleteProject,
  getProject,
  getProjects,
  updatePorject,
} from "../Controllers/Project.js";
const router = Router();

router.get("/get-projects", getProjects);

router.post("/addProject", addProject);

router.get("/get-project/:id", getProject);

router.put("/updateProject/:id", updatePorject);

router.put("/deleteImage/:id", deleteImage);

router.delete("/delete-project/:id", deleteProject);

export default router;
