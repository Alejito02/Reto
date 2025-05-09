import ProductosyServiciosModel from '../models/ProductosyServicios.js'

const postProductosyServicios = async (req, res) => {
    try {
        const {
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes
        } = req.body;

        const productosyservicios = new ProductosyServiciosModel({
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes
        });
        
        await productosyservicios.save();
        res.json(productosyservicios);
    } catch (error) {
        res.status(400).json({error: "Product/service registration failed", errors: error.errors});
        console.log(error);
    }
};

const getProductosyServicios = async (req, res) => {
    try {
        const productosyservicios = await ProductosyServiciosModel.find({state: 2});
        res.json({productosyservicios});
    } catch (error) {
        res.status(400).json({error: "Product/service search failed"});
        console.log(error);
    }
};

const getProductoServicio = async (req, res) => {
    try {
        const productosyservicios = await ProductosyServiciosModel.findById(req.params.id);
        res.json(productosyservicios);
    } catch (error) {
        res.status(400).json({error: "Failed to get product/service"});
        console.log(error);
    }
};

export {
    postProductosyServicios,
    getProductosyServicios,
    getProductoServicio
};