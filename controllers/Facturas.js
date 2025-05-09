import FacturaModel from '../models/Facturas.js';
import axios from 'axios';

const postFacturas = async (req, res) => {
    const authHeader = req.headers.authorization;
    let token = "";
    
    try {
        if (authHeader) {
            token = authHeader.split(" ")[1];
        } else {
            throw new Error("No hay token");
        }

        const {
            numbering_range_id,
            reference_code,
            observation,
            payment_form,
            payment_due_date,
            payment_method_code,
            billing_period,
            customer,
            items
        } = req.body;

        const facturaValidada = await axios.post(
            process.env.URL_API,
            {
                numbering_range_id,
                reference_code,
                observation,
                payment_form,
                payment_due_date,
                payment_method_code,
                billing_period,
                customer,
                items
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        let response = facturaValidada.data;

        const factura = new FacturaModel({
            numbering_range_id,
            reference_code,
            observation,
            payment_form,
            payment_due_date,
            payment_method_code,
            billing_period,
            customer,
            items,
            cufe: response.data.bill.cufe,
            url: response.data.bill.public_url,
            qr: response.data.bill.qr,
            qr_image: response.data.bill.qr_image,
            number: response.data.bill.number,
            total: response.data.bill.total,
            state: 1
        });

        await factura.save();
        res.json(factura);
    } catch (error) {
        res.status(400).json({ 
            error: "Factura registration failed",
            details: error.response?.data || error.message 
        });
        console.log("Error:", error);
    }
};

const getFacturas = async (req, res) => {
    try {
        const facturas = await FacturaModel.find({ state: 1 });
        const reverse = facturas.reverse();
        res.json({ facturas: reverse });
    } catch (error) {
        res.status(400).json({ error: "Facturas search failed" });
        console.log(error);
    }
};

const getFactura = async (req, res) => {
    try {
        const factura = await FacturaModel.findById(req.params.id);
        res.json(factura);
    } catch (error) {
        res.status(400).json({ error: "Failed to get factura" });
        console.log(error);
    }
};

const putUpdateState = async (req, res) => {
    try {
        const { id } = req.params;
        const factura = await FacturaModel.findById(id);
        const newState = factura.state === 1 ? 0 : 1;
        const updatedFactura = await FacturaModel.findByIdAndUpdate(
            id,
            { state: newState },
            { new: true }
        );
        res.json(updatedFactura);
    } catch (error) {
        res.status(400).json({ error: "Operation failure" });
        console.log(error);
    }
};

export {
    postFacturas,
    getFacturas,
    getFactura,
    putUpdateState
};