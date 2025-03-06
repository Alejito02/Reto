const UsuariosModel =require ("../models/Usuarios.js");

const helperUsuarios = {
    emailYaRegistrado: async (email) => {
        const usuario = await usuario.findOne({ email });
        if (usuario) {
            throw new Error("El email ya está registrado");
        }
    },
    validarId: async (id)=>{
        const existe = await UsuariosModel.findById(id)
        if(!existe){
            throw new Error ( "el id no existe")
        }
    }
}

module.exports = helperUsuarios