import { Router } from "express";
import {
  getEmpleados,
  postEmpleados,
  deleteEmpleados,
  putEmpleados,
  getUnEmpleado,
} from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/empleados", getEmpleados);
router.get("/empleados/:id", getUnEmpleado);
router.post("/empleados", postEmpleados);
router.put("/empleados/:id", putEmpleados);
router.delete("/empleados/:id", deleteEmpleados);

export default router;
