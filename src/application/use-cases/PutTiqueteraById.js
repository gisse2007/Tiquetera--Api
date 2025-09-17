class PutTiqueteraById {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }
  async execute(id, data) {
    return await this.tiqueteraRepository.updateById(id, data);
  }
}

export default PutTiqueteraById;