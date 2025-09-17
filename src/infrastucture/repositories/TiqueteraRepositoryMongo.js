import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
    nroTiquetera: { type: Number, required: true },
    cliente: { type: String, required: true },
    saldo: { type: Number, default: 0, require:true },
    totalTransaccion: {type: Number, require: true}
})

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema);

class TiqueteraRepositoryMongo{
    async create(tiqueteraData) {
    const tiquetera = new TiqueteraModel(tiqueteraData);
    return await tiquetera.save();
  }
  async findAll() {
    return await TiqueteraModel.find();
  }
  async findById(id) {
    return await TiqueteraModel.findById(id);
  }
  async updateById(id, data) {
    return await TiqueteraModel.findByIdAndUpdate(id, data, { new: true });
  }
  async deleteById(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }
}

export default TiqueteraRepositoryMongo;