const FacturasModel = require("../models/Facturas.js");

const helperFacturas = {
    validarId: async (id) => {
        const existe = await FacturasModel.findById(id);
        if (!existe) {
            throw new Error("el id no existe");
        }
    },
};

module.exports = helperFacturas;