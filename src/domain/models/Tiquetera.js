class Tiquetera {
    constructor({
        id,
        nroTiquetera,
        cliente,
        saldo,
        totalTransacciones
    }){
        this.id = id;
        this.nroTiquetera = nroTiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones;
    }
}

export default Tiquetera;