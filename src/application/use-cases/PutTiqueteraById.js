class PutTiqueteraById {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }

  async execute(id, saldo) {
    const tiqueteraActualizada = await this.tiqueteraRepository.incrementarTransaccion(id, saldo);

    if (!tiqueteraActualizada) {
      throw new Error(`Tiquetera no encontrada`);
    }
    return tiqueteraActualizada;
  }
}

export default PutTiqueteraById;


