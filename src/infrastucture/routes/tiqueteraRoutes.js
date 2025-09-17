import { Router } from "express";

import { createTiquetera, 
    deleteTiqueteraById, 
    getTiquetera, 
    getTiqueteraById, 
    putTiqueteraById }from "../controller/TiqueteraController.js"

const router = Router();

router.post("/", createTiquetera);
router.get("/", getTiquetera);
router.get("/:id", getTiqueteraById);
router.put("/:id", putTiqueteraById);
router.delete("/:id", deleteTiqueteraById);

export default router;