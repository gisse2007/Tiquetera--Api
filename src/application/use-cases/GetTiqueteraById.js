class GetTiqueteraById {
  constructor(tiqueteraRepository) {
    this.tiqueteraRepository = tiqueteraRepository;
  }
  async execute(id) {
    return await this.tiqueteraRepository.findById(id);
  }
}

export default GetTiqueteraById;