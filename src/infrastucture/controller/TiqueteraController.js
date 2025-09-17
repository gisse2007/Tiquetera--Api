import CreateTiquetera from "../../application/use-cases/CreateTiquetera.js"
import GetTiquetera from "../../application/use-cases/GetTiquetera.js"
import GetTiqueteraById from "../../application/use-cases/GetTiqueteraById.js"
import PutTiqueteraById from "../../application/use-cases/PutTiqueteraById.js"
import DeleteTiqueteraById from "../../application/use-cases/DeleteTiqueteraById.js"
import TiqueteraRepositoryMongo from "../repositories/TiqueteraRepositoryMongo.js"
 
const tiqueteraRepository = new TiqueteraRepositoryMongo();

export const createCliente = async (req, res) => {
  try {
    const createTiquetera = new CreateTiquetera(tiqueteraRepository);
    const tiquetera = await createTiquetera.execute(req.body);
    res.status(201).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTiquetera = async (req, res) => {
  try {
    const getTiquetera = new GetTiquetera(tiqueteraRepository);
    const tiquetera = await getTiquetera.execute();
    res.status(200).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTiqueteraById = async (req, res) => {
  try {
    const getTiqueteraById = new GetTiqueteraById(tiqueteraRepository);
    const tiquetera = await getTiqueteraById.execute(req.params.id);
    res.status(200).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const putTiqueteraById = async (req, res) => {
  try {
    const putTiqueteraById = new PutTiqueteraById(tiqueteraRepository);
    const tiquetera = await putTiqueteraById.execute(req.params.id, req.body);
    res.status(200).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTiqueteraById = async (req, res) => {
  try {
    const deleteTiqueteraById = new DeleteTiqueteraById(tiqueteraRepository);
    const tiquetera = await deleteTiqueteraById.execute(req.params.id);
    res.status(200).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
