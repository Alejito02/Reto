import mongoose from "mongoose";

const FacturasSchema = new mongoose.Schema({
    numbering_range_id:{type:Number, required:true},
    reference_code:{type:String, required:true},
    observation:{type:String},
    payment_form:{type:String, required:true},
    payment_due_date:{type:String, required:true},
    payment_method_code:{type:String, required:true},
    billing_period:{
        start_date:{type:String, required:true},
        start_time:{type:String, required:true},
        end_date:{type:String, required:true},
        end_time:{type:String, required:true}
    },
    customer:{type:Object, required:true}, //recibe objeto completo con datos del cliente
    items:{type:Array, required:true}, //recibe un array de objetos con datos de cada item referente a la factura
    cufe:{type:String, required:true},
    url:{type:String , required:true},
    qr:{type:String , required:true},
    qr_image:{type:String , required:true}, 
    number:{type:String , required:true},
    total:{type:Number, default:0},
    state:{type:Number, default:1}
})

export default mongoose.model('Facturas', FacturasSchema);

