import UsuariosModel from '../models/Usuarios.js'

const postUsuarios = async (req, res) => {
    try {
        const { identification, dv, company, trade_name, names, address, email, phone, 
                legal_organization_id, tribute_id, identification_document_id, municipality_id } = req.body;

        const usuario = new UsuariosModel({
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
            municipality_id
        })
        
        await usuario.save()
        res.json(usuario)
    } catch (error) {
        res.status(400).json({error: "User registration failed"})
        console.log(error);
    }
}

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuariosModel.find({state: 2})
        res.json({usuarios})
    } catch (error) {
        res.status(400).json({error: "User search failed"})
        console.log(error);
    }
}

const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuariosModel.findById(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.status(400).json({error: "Failed to get user"})
        console.log(error);
    }
}

const putUsuarios = async (req, res) => {
    try {
        const { names, address, email, phone } = req.body
        const usuario = await UsuariosModel.findById(req.params.id)
        
        usuario.names = names
        usuario.address = address
        usuario.email = email
        usuario.phone = phone
        
        await usuario.save()
        res.json({message: "User updated successfully"})
    } catch (error) {
        res.status(400).json({error: "User update failed"})
        console.log(error);
    }
}

export {
    postUsuarios,
    getUsuarios,
    getUsuario,
    putUsuarios
}