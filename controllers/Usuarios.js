const UsuariosSchema = require("../models/Usuarios.js");

const postUsuarios = async (req, res) => {
    try{
        const{identification, dv, company, trade_name, names, address, email, phone, legal_organization_id, tribute_id, identification_document_id, municipality_id,} = req.body;
        const usuario = new UsuariosSchema({
            identification,
            dv,
            company,
            trade_name,
            names,
            address,
            email,
            phone,
            legal_organization_id,
            tribute_id,
            identification_document_id,
            municipality_id,
        })
        await usuario.save();
        res.json({usuario});
    } catch(error){
        console.log(error);
        res.status(400).json({message: "Error al crear el usuario"});
    }   
};

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuariosSchema.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error al obtener los usuarios"});
    }
};

const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuariosSchema.findById(req.params.id);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error al obtener el usuario"});
    }
};

const putUsuarios = async (req, res) => {
    try {
        const {names, address, email, phone,} = req.body;
        const usuario = await UsuariosSchema.findById(req.params.id);
        usuario.names = names;
        usuario.address = address;
        usuario.email = email;
        usuario.phone = phone;
        await usuario.save();
        res.json({message: "Usuario actualizado"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Error al actualizar el usuario"});
    }
};

module.exports={postUsuarios, getUsuarios, getUsuario, putUsuarios};