class PutTiqueteraById {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }

  async execute(id, saldo) {
    const tiqueteraActual = await this.tiqueteraRepository.findById(id);
    if (!tiqueteraActual) {
      throw new Error(`Tiquetera no encontrada`);
    }
    const nuevoContador = (tiqueteraActual.contadorTransacciones || 0) + 1;

    await this.tiqueteraRepository.updateById(id, {
      saldo,
      contadorTransacciones: nuevoContador,
    });
    return this.tiqueteraRepository.findById(id);
  }
}

export default PutTiqueteraById;

