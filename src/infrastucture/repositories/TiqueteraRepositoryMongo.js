import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
  nroTiquetera: { type: String, required: true },
  cliente: { type: String, required: true },
  saldo: { type: Number, default: 0, required: true },
  totalTransacciones: { type: Number, default: 0 },
});

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema);

class TiqueteraRepositoryMongo {
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

  async updateById(id, updateData) {
    return await TiqueteraModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteById(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }

  async incrementarTransaccion(id, saldo) {
    return await TiqueteraModel.findByIdAndUpdate(
      id,
      {
        $set: { saldo },         
        $inc: { totalTransacciones: 1 }, 
      },
      { new: true }
    );
  }
  // async inicializarContadores() {
  //   return await TiqueteraModel.updateMany(
  //     { contadorTransacciones: { $exists: false } },
  //     { $set: { contadorTransacciones: 0 } }
  //   );
  // }
}

export default TiqueteraRepositoryMongo;
