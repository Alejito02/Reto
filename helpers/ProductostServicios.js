const ProductosyServiciosSchema=require("../models/ProductosyServicios.js");

const helperProductosyServicios = {
    validarId: async (id) => {
        const existe = await ProductosyServiciosSchema.findById(id);
        if (!existe) {
            throw new Error("el id no existe");
        }
    },
};

module.exports = helperProductosyServicios;